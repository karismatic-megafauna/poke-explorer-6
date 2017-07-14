import React, { Component } from 'react';
import { Card } from 'antd';

class PokeCard extends Component {
  render() {
    const { name, id, imgSrc } = this.props;
    return (
      <Card title={ name } extra={ id } style={{ width: '300px', margin: '10px' }}>
        <img src={ imgSrc } alt={ name }/>
      </Card>
    )
  }
}

export default PokeCard;
