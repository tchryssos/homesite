import camelCase from 'lodash.camelcase';
import shuffle from 'lodash.shuffle';
import { useEffect, useState } from 'react';

import { ArtPane } from '~/components/ArtPane';
import { GridBox } from '~/components/box/GridBox';
import { Layout } from '~/components/meta/Layout';
import { IS_MET_IMAGE, IS_URL } from '~/constants/regex';
import { useBreakpointsLessThan } from '~/logic/hooks/useBreakpoints';
import { Artwork, UnserializedArtwork } from '~/typings/art';

const emptyArr: Artwork[] = [];
const About: React.FC = () => {
  const [artList, setArtList] = useState<Artwork[]>(emptyArr);

  const isLessThanMd = useBreakpointsLessThan('md');

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
              IS_URL.test(currArt['Artwork Url']) &&
              // Met museum images have separate API
              // neet to filter those out and make a separate request
              !IS_MET_IMAGE.test(currArt['Artwork Url'])
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
      <GridBox columns={isLessThanMd ? 2 : 3} mb={256}>
        {artList.map((art, i) => (
          <ArtPane
            artObj={art}
            index={i}
            key={`${art.artist}-${art.artworkName}`}
          />
        ))}
      </GridBox>
    </Layout>
  );
};

export default About;
