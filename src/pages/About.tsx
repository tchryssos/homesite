import camelCase from 'lodash.camelcase';
import { useEffect, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { Layout } from '~/components/meta/Layout';
import { Body } from '~/components/typography/Body';
import { Artwork, UnserializedArtwork } from '~/typings/art';

interface ArtPaneProps {
  artObj: Artwork;
}
const ArtPane: React.FC<ArtPaneProps> = ({ artObj }) => (
  <FlexBox>
    <Body>
      {artObj.artworkName} by {artObj.artist}
    </Body>
  </FlexBox>
);

const emptyArr: Artwork[] = [];
const About: React.FC = () => {
  const [artList, setArtList] = useState<Artwork[]>(emptyArr);

  useEffect(() => {
    const fetchArt = async () => {
      const resp = await fetch('/artlist.json');
      const artArr: UnserializedArtwork[] = await resp.json();
      setArtList(
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
      );
    };
    fetchArt();
  }, []);

  return (
    <Layout>
      {artList.map((art) => (
        <ArtPane artObj={art} key={`${art.artist}-${art.artworkName}`} />
      ))}
    </Layout>
  );
};

export default About;
