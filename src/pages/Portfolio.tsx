import React from 'react'
import { createUseStyles } from 'react-jss'

import orNull from 'logic/util/orNull'

import ProjectBlock from 'components/ProjectBlock'
import PageWrapper from 'components/PageWrapper'
import Title from 'components/typography/Title'
import Body from 'components/typography/Body'

import { SM_MIN_STRING, LG_MIN_STRING } from 'constants/styles/breakpoints'

import BanjoJace from 'static/banjo_jace.png'
import BaseballIcon from 'static/baseball.ico'
import Sparkle from 'static/sparkle.png'
import TroyHead from 'static/troy_head.png'
import QuadioLogo from 'static/quadio.jpg'
import Moss from 'static/moss.png'

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
})

interface SectionProps {
	title: string,
	desc?: string,
	children: React.ReactNode,
}

const PortfolioSection: React.FC<SectionProps> = ({
	title, desc, children,
}) => {
	const classes = useStyles()
	return (
		<>
			<Title>{title}</Title>
			<div className={classes.descWrapper}>
				{orNull(
					!!desc,
					<Body className={classes.descText}>{desc}</Body>,
				)}
			</div>
			<div className={classes.codeBlockWrapper}>
				{children}
			</div>
		</>
	)
}

const Portfolio = () => (
	<PageWrapper>
		<PortfolioSection
			title="Work"
			desc="A selection of professional projects."
		>
			<ProjectBlock
				title="casey&#x0200B;bradford&#x0200B;.club"
				text="Portfolio website for graphic &amp; UX designer Casey Bradford."
				to="https://caseybradford.club/"
				toRepo="https://github.com/tchryssos/casey-site"
				imageSrc={Sparkle}
				imageAltText="Sparkle emoji"
			/>
			<ProjectBlock
				title="Moss Workspace"
				text="A shared virtual desktop workspace for creative teams to view and organize project assets."
				to="https://mossworkspace.com/"
				imageSrc={Moss}
				imageAltText="Moss sprout logo"
				toOthers={[{
					extLink: 'https://vimeo.com/472490067/524a565895',
					extTitle: 'Moss Vimeo',
					extType: 'vimeo',
				}]}
			/>
			<ProjectBlock
				title="Quadio"
				text="A music streaming and sharing app for college creatives."
				to="https://app.quadio.com/tracks/337"
				imageSrc={QuadioLogo}
				imageAltText="Quadio transport logo"
			/>
		</PortfolioSection>
		<PortfolioSection
			title="Experiments"
			desc="A selection of creative projects I've built to satisfy my own curiosity and/or teach myself something new."
		>
			<ProjectBlock
				title="Banjo MtG"
				text="Enter the name of a Magic the Gathering card and have Banjo &amp; Co. from Banjo Kazooie read you the card text."
				to="https://tchryssos.github.io/banjo-mtg/"
				toRepo="https://github.com/tchryssos/banjo-mtg"
				imageSrc={BanjoJace}
				imageAltText="Banjo the Mind Sculptor"
			/>
			<ProjectBlock
				title="HOME RUN"
				text="Step up to the plate as a procedurally generated baseball player  and swing for the fences!"
				to="https://tchryssos.github.io/homerun/"
				toRepo="https://github.com/tchryssos/homerun"
				imageSrc={BaseballIcon}
				imageAltText="Pixel-art baseball"
			/>
			<ProjectBlock
				title="Stream CC"
				text="A lightweight, browser-based streaming tool for automatic closed captioning using the SpeechRecognition API"
				to="https://tchryssos.github.io/stream-cc/"
				toRepo="https://github.com/tchryssos/stream-cc"
				imageSrc="https://upload.wikimedia.org/wikipedia/commons/0/09/Closed_captioning_symbol.svg"
				imageAltText="Closed captioning logo"
			/>
		</PortfolioSection>
		<PortfolioSection
			title="Other"
			desc="Templates, odds and ends, and projects that don't fit anywhere else."
		>
			<ProjectBlock
				title="troychryssos&#x0200B;.com"
				text="Peek behind the curtain of this site."
				to="https://github.com/tchryssos/homesite"
				toRepo="https://github.com/tchryssos/homesite"
				hideLink
				imageAltText="Troy's head"
				imageSrc={TroyHead}
			/>
			<ProjectBlock
				title="React Template"
				text="My template for new React projects. Includes React, TS, and Storybook."
				to="https://github.com/tchryssos/react-template"
				toRepo="https://github.com/tchryssos/react-template"
				hideLink
				imageSrc="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
				imageAltText="React JS logo"
			/>
			<ProjectBlock
				title="Parcel Template"
				text="My template for new Parcel projects."
				to="https://github.com/tchryssos/parcel-template"
				toRepo="https://github.com/tchryssos/parcel-template"
				hideLink
				imageAltText="Parcel box"
				imageSrc="https://parceljs.org/assets/parcel-og.png"
			/>
		</PortfolioSection>
	</PageWrapper>
)

export default Portfolio
