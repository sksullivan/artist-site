import React from 'react';

import LogoImg from '../../img/logo.png'

const centerStyle = {
  marginLeft: '5%',
  width: '40%',
  position: 'absolute',
  top: '26%',
}

const titleBlockStyle = {
  // backgroundColor: '#fff',
  padding: '10px',
  maxWidth: '120%'
}

const navBlockStyle = {
  // backgroundColor: '#fff',
  padding: '0px',
  paddingRight: '7px',
  marginRight: '15px',
  fontFamily: '"Roboto Condensed", cursive',
  fontWeight: 'bold',
  fontStyle: 'italic',
  color: 'unset',
  fontSize: '30px',
  textDecoration: 'none',
}

export default class Title extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={centerStyle}>
        <img style={titleBlockStyle} src={LogoImg} />
        <div style={{ marginTop: '24px' }}>
          <a style={navBlockStyle} href="#">LISTEN</a>
          <a style={navBlockStyle} href="#">WATCH</a>
          <a style={navBlockStyle} href="#">READ</a>
          <a style={navBlockStyle} href="#">MEET</a>
        </div>
      </div>
    );
  }
}
