// @flow
'use strict'

import React from 'react'

import Container from './Container.jsx'
import Title from './Title.jsx'

import FlowersImg from '../../img/flowers.png'
import MirrorImg from '../../img/mirror.png'
import PillsImg from '../../img/pills.png'
import HolesImg from '../../img/holes.png'
import HangingImg from '../../img/hanging.png'


export default class StaticApp extends React.Component {
	render () {
		return (
			<div>
				<Container backgroundImage={HolesImg}>
					<Title />
				</Container>
				{/*<Container backgroundImage={FlowersImg} />
				<Container backgroundImage={HangingImg} />
				<Container backgroundImage={MirrorImg} />*/}
			</div>
		)
	}
}