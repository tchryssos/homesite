import styled from '@emotion/styled';
import camelCase from 'lodash.camelcase';
import shuffle from 'lodash.shuffle';
import { useEffect, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { Layout } from '~/components/meta/Layout';
import { Body } from '~/components/typography/Body';
import { Artwork, UnserializedArtwork } from '~/typings/art';

const ArtFrame = styled(FlexBox)(({ theme }) => ({
  border: `${theme.colors.primaryHeavy} solid ${theme.border.borderWidth[1]}`,
  borderRadius: theme.border.borderRadius.rounded,
}));

interface ArtPaneProps {
  artObj: Artwork;
}
const ArtPane: React.FC<ArtPaneProps> = ({ artObj }) => (
  <ArtFrame p={8}>
    <Body>
      {artObj.artworkName} by {artObj.artist}
    </Body>
  </ArtFrame>
);

const emptyArr: Artwork[] = [];
const About: React.FC = () => {
  const [artList, setArtList] = useState<Artwork[]>(emptyArr);

  useEffect(() => {
    const fetchArt = async () => {
      const resp = await fetch('/artlist.json');
      const artArr: UnserializedArtwork[] = await resp.json();
      setArtList(
        shuffle(
          artArr.reduce((newArtArr, currArt) => {
            if (currArt.Artist && currArt['Artwork Name']) {
              const nextArt: Artwork = {} as Artwork;
              Object.keys(currArt).forEach((key) => {
                nextArt[camelCase(key) as keyof Artwork] =
                  currArt[key as keyof UnserializedArtwork];
              });
              newArtArr.push(nextArt);
            }

            return newArtArr;
          }, [] as Artwork[]),
        ),
      );
    };
    fetchArt();
  }, []);

  return (
    <Layout>
      <GridBox columnGap={16} columns={3} rowGap={16}>
        {artList.map((art) => (
          <ArtPane artObj={art} key={`${art.artist}-${art.artworkName}`} />
        ))}
      </GridBox>
    </Layout>
  );
};

export default About;
