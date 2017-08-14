import React from 'react';

const style = {
	height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export default class Container extends React.Component {
  render() {
    return (
      <div style={{ ...style, backgroundImage: `url(${this.props.backgroundImage})` }}>
      	{this.props.children}
      </div>
    )
  }
}
