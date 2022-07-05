import React, { Component } from 'react';
import { withTranslation, WithTranslation } from 'react-i18next';

import './style.css'

class VCard extends React.Component<IProps, IState> {

    render() {
        return <div>{ this.props.t('title') }</div>;
    }
    
}

interface IProps extends WithTranslation {
}

interface IState {
    state: any;
}

export default withTranslation('vCard')(VCard);