import React from 'react';

const style = {
	height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

export default class Container extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={{ ...style, backgroundImage: `url(${this.props.backgroundImage})` }}>
      	{this.props.children}
      </div>
    )
  }
}
