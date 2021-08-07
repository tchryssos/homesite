import PageWrapper from 'components/PageWrapper';
import ProjectBlock from 'components/ProjectBlock';
import Body from 'components/typography/Body';
import Title from 'components/typography/Title';
import { LG_MIN_STRING, SM_MIN_STRING } from 'constants/styles/breakpoints';
import orNull from 'logic/util/orNull';
import React from 'react';
import { createUseStyles } from 'react-jss';
import BanjoJace from 'static/banjo_jace.png';
import BaseballIcon from 'static/baseball.ico';
import Codecademy from 'static/codecademy.svg';
import ManYouKnow from 'static/man_you_know.png';
import Moss from 'static/moss.png';
import QuadioLogo from 'static/quadio.jpg';
import Sparkle from 'static/sparkle.png';
import TroyHead from 'static/troy_head.png';
import Vercel from 'static/vercel.svg';

const useStyles = createUseStyles({
  codeBlockWrapper: {
    display: 'grid',
    gridGap: 16,
    marginBottom: 16,
    gridTemplateColumns: '1fr',
    [SM_MIN_STRING]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [LG_MIN_STRING]: {
      gridTemplateColumns: '1fr 1fr 1fr',
    },
  },
  descWrapper: {
    marginBottom: 16,
  },
  descText: {
    marginTop: 4,
  },
});

interface SectionProps {
  title: string;
  desc?: string;
  children: React.ReactNode;
}

const PortfolioSection: React.FC<SectionProps> = ({
  title,
  desc,
  children,
}) => {
  const classes = useStyles();
  return (
    <>
      <Title>{title}</Title>
      <div className={classes.descWrapper}>
        {orNull(!!desc, <Body className={classes.descText}>{desc}</Body>)}
      </div>
      <div className={classes.codeBlockWrapper}>{children}</div>
    </>
  );
};

const Portfolio = () => (
  <PageWrapper>
    <PortfolioSection desc="A selection of professional projects." title="Work">
      <ProjectBlock
        imageAltText="Codecademy logo"
        imageSrc={Codecademy}
        text="An online learning platform that has helped over 45 million people learn to code."
        title="Codecademy"
        to="https://www.codecademy.com/"
        toRepo="https://github.com/Codecademy"
      />
      <ProjectBlock
        imageAltText="Moss sprout logo"
        imageSrc={Moss}
        text="A shared virtual desktop workspace for creative teams to view and organize project assets."
        title="Moss Workspace"
        to="https://mossworkspace.com/"
        toOthers={[
          {
            extLink: 'https://vimeo.com/472490067/524a565895',
            extTitle: 'Moss Vimeo',
            extType: 'vimeo',
          },
        ]}
      />
      <ProjectBlock
        imageAltText="Quadio transport logo"
        imageSrc={QuadioLogo}
        text="A music streaming and sharing app for college creatives."
        title="Quadio"
        to="https://www.quadio.com/"
        toOthers={[
          {
            extLink:
              'https://tchryssos.medium.com/building-an-audio-waveform-progress-bar-with-react-for-quadio-132223928b14',
            extTitle:
              'Building an audio waveform progress bar for Quadio dev blog',
            extType: 'medium',
          },
        ]}
      />
      <ProjectBlock
        imageAltText="Sparkle emoji"
        imageSrc={Sparkle}
        text="Portfolio website for graphic &amp; UX designer Casey Bradford."
        title="casey&#x0200B;bradford&#x0200B;.club"
        to="https://caseybradford.club/"
        toRepo="https://github.com/tchryssos/casey-site"
      />
    </PortfolioSection>
    <PortfolioSection
      desc="A selection of creative projects I've built to satisfy my own curiosity and/or teach myself something new."
      title="Experiments"
    >
      <ProjectBlock
        imageAltText="Closed captioning logo"
        imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/09/Closed_captioning_symbol.svg"
        text="A lightweight, browser-based streaming tool for automatic closed captioning using the SpeechRecognition API"
        title="Stream CC"
        to="https://tchryssos.github.io/stream-cc/"
        toRepo="https://github.com/tchryssos/stream-cc"
      />
      <ProjectBlock
        imageAltText="A generated man"
        imageSrc={ManYouKnow}
        text="A canvas-based weirdo generator. Still a work in progress."
        title="The Man You Know"
        to="https://tchryssos.github.io/the-man-you-know/"
        toRepo="https://github.com/tchryssos/the-man-you-know"
      />
      <ProjectBlock
        imageAltText="Banjo the Mind Sculptor"
        imageSrc={BanjoJace}
        text="Enter the name of a Magic the Gathering card and have Banjo &amp; Co. from Banjo Kazooie read you the card text."
        title="Banjo MtG"
        to="https://tchryssos.github.io/banjo-mtg/"
        toRepo="https://github.com/tchryssos/banjo-mtg"
      />
      <ProjectBlock
        imageAltText="Pixel-art baseball"
        imageSrc={BaseballIcon}
        text="Step up to the plate as a procedurally generated baseball player  and swing for the fences!"
        title="HOME RUN"
        to="https://tchryssos.github.io/homerun/"
        toRepo="https://github.com/tchryssos/homerun"
      />
    </PortfolioSection>
    <PortfolioSection
      desc="Templates, odds and ends, and projects that don't fit anywhere else."
      title="Other"
    >
      <ProjectBlock
        hideLink
        imageAltText="Troy's head"
        imageSrc={TroyHead}
        text="Peek behind the curtain of this site."
        title="troychryssos&#x0200B;.com"
        to="https://github.com/tchryssos/homesite"
        toRepo="https://github.com/tchryssos/homesite"
      />
      <ProjectBlock
        hideLink
        imageAltText="Vercel logo"
        imageSrc={Vercel}
        text="My template for new Next.js projects. Includes typescript."
        title="Next.js Template"
        to="https://github.com/tchryssos/next-template"
        toRepo="https://github.com/tchryssos/next-template"
      />
      {/* @TODO React template needs a little work, and would I still make a plain react project without Next? */}
      {/* <ProjectBlock
        hideLink
        imageAltText="React JS logo"
        imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
        text="My template for new React projects. Includes React, TS, and Storybook."
        title="React Template"
        to="https://github.com/tchryssos/react-template"
        toRepo="https://github.com/tchryssos/react-template"
      /> */}
      <ProjectBlock
        hideLink
        imageAltText="Parcel box"
        imageSrc="https://parceljs.org/assets/parcel-og.png"
        text="My template for new Parcel projects."
        title="Parcel Template"
        to="https://github.com/tchryssos/parcel-template"
        toRepo="https://github.com/tchryssos/parcel-template"
      />
    </PortfolioSection>
  </PageWrapper>
);

export default Portfolio;
