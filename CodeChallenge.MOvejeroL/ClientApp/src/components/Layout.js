import React, { Component } from 'react';
import { SpinnerContainer } from './spinnerContainer/spinnerContainer';

export class Layout extends Component {
  displayName = Layout.name

    render = () => {
        const { children } = this.props
    return (
        <div className='container-fluid'>
            <SpinnerContainer />
            {children}
        </div>
    );
  }
}
