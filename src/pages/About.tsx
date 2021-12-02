import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import camelCase from 'lodash.camelcase';
import shuffle from 'lodash.shuffle';
import { useEffect, useState } from 'react';

import { FlexBox } from '~/components/box/FlexBox';
import { GridBox } from '~/components/box/GridBox';
import { Image } from '~/components/Image';
import { Layout } from '~/components/meta/Layout';
import { SubBody } from '~/components/typography/SubBody';
import { IS_URL } from '~/constants/regex';
import { useBreakpointsLessThan } from '~/logic/hooks/useBreakpoints';
import { pxToRem } from '~/logic/util/styles/pxToRem';
import { Artwork, UnserializedArtwork } from '~/typings/art';

const scaleRandom = (n: number, i: number, a: number[]) => {
  if (i === 0 || i === a.length - 1) {
    return n;
  }
  return n * (Math.random() * (1.1 - 0.9) + 0.9);
};

// re: matrix
// The values represent the following functions:
// matrix( scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY() )
// https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix()
const createRipple = () => {
  const scaleX = [1, 1.01, 0.99, 1].map(scaleRandom);
  const scaleY = [1, 1.01, 0.99, 1].map(scaleRandom);
  const skewX = [0, -0.1, 0.1, 0].map(scaleRandom);
  const skewY = [0, 0.01, -0.01, 0].map(scaleRandom);
  const transX = [0, 5, -5, 0].map(scaleRandom);
  const transY = [0, -2, 2, 0].map(scaleRandom);

  return keyframes`
  from {
    transform: matrix(
      ${scaleX[0]},
      ${skewY[0]},
      ${skewX[0]},
      ${scaleY[0]},
      ${transX[0]},
      ${transY[0]}
    )
  }
  33% {
    transform: matrix(
      ${scaleX[1]},
      ${skewY[1]},
      ${skewX[1]},
      ${scaleY[1]},
      ${transX[1]},
      ${transY[1]}
    )
  }
  66% {
    transform: matrix(
      ${scaleX[2]},
      ${skewY[2]},
      ${skewX[2]},
      ${scaleY[2]},
      ${transX[2]},
      ${transY[2]}
    )
  }
  to {
    transform: matrix(
      ${scaleX[3]},
      ${skewY[3]},
      ${skewX[3]},
      ${scaleY[3]},
      ${transX[3]},
      ${transY[3]}
    )
  }
`;
};

interface IndexProps {
  index: number;
}

const ArtFrame = styled(FlexBox)`
  display: inline-flex;
  width: 100%;
  position: relative;
`;

const ArtImg = styled(Image)<IndexProps>`
  width: 100%;
  height: ${pxToRem(400)};
  position: relative;
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing[8]};
  animation: ${createRipple()} 2.5s linear infinite
    ${({ index }) => `${index * 500}ms`};
`;

interface ArtPaneProps {
  artObj: Artwork;
  index: number;
}
const ArtPane: React.FC<ArtPaneProps> = ({ artObj, index }) => (
  <ArtFrame column p={8}>
    <ArtImg
      index={index}
      layout="fill"
      objectFit="scale-down"
      objectPosition="left bottom"
      src={artObj.artworkUrl}
    />
    <SubBody mb={4}>{artObj.artworkName}</SubBody>
    <SubBody>{artObj.artist}</SubBody>
  </ArtFrame>
);

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
      <GridBox columns={isLessThanMd ? 2 : 3}>
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
