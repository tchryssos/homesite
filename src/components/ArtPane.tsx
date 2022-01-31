import styled from '@emotion/styled';
import { SyntheticEvent, useState } from 'react';

import { pxToRem } from '~/logic/util/styles/pxToRem';
import { Artwork } from '~/typings/art';

import { FlexBox } from './box/FlexBox';
import { Image } from './Image';
import { SubBody } from './typography/SubBody';

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
`;

interface ArtPaneProps {
  artObj: Artwork;
  index: number;
}

export const ArtPane: React.FC<ArtPaneProps> = ({ artObj, index }) => {
  const [imageElement, setImageElement] = useState<HTMLImageElement>();

  const onLoad = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    if (target.complete) {
      setImageElement(e.target as HTMLImageElement);
    }
  };

  return (
    <ArtFrame column p={8}>
      <ArtImg
        index={index}
        layout="fill"
        objectFit="scale-down"
        objectPosition="center bottom"
        src={artObj.artworkUrl}
        onLoad={onLoad}
      />
      <SubBody mb={4}>{artObj.artworkName}</SubBody>
      <SubBody>{artObj.artist}</SubBody>
    </ArtFrame>
  );
};
