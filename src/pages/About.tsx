import styled from '@emotion/styled';
import camelCase from 'lodash.camelcase';
import shuffle from 'lodash.shuffle';
import { useEffect, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { Image } from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { Body } from '~/components/typography/Body';
import { SubBody } from '~/components/typography/SubBody';
import { IS_URL } from '~/constants/regex';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import { Artwork, UnserializedArtwork } from '~/typings/art';

const ArtFrame = styled(FlexBox)(({ theme }) => ({
  display: 'inline-flex',
  width: '100%',
  position: 'relative',
}));

const ArtImg = styled(Image)`
  width: 100%;
  height: ${pxToRem(400)};
  position: relative;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
`;

interface ArtPaneProps {
  artObj: Artwork;
}
const ArtPane: React.FC<ArtPaneProps> = ({ artObj }) => (
  <ArtFrame column p={8}>
    <ArtImg layout="fill" objectFit="contain" src={artObj.artworkUrl} />
    <SubBody mb={4}>{artObj.artworkName}</SubBody>
    <SubBody>{artObj.artist}</SubBody>
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
            if (
              currArt.Artist &&
              currArt['Artwork Name'] &&
              currArt['Artwork Url'] &&
              IS_URL.test(currArt['Artwork Url'])
            ) {
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
      <GridBox columns={3}>
        {artList.map((art) => (
          <ArtPane artObj={art} key={`${art.artist}-${art.artworkName}`} />
        ))}
      </GridBox>
    </Layout>
  );
};

export default About;
