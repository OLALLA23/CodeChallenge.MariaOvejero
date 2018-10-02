import React, { Component } from 'react';
import { SpinnerContainer } from './spinnerContainer/spinnerContainer';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
        <div className='container-fluid'>
            <SpinnerContainer />
            {this.props.children}
        </div>
    );
  }
}
