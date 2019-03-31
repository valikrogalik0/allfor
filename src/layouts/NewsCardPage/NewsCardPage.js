import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import './style.css';

class NewsCardPage extends Component {
    render() {
        const { id, title, text, photoURL } = this.props.news;
        console.log(this.props);
        return (
            <div className='news-card-page'>
                <h2 className='news-card-page-title'>{ title }</h2>
                <div className='news-card-page-text'>{ text }</div>
                <img
                    className='news-card-page-image'
                    src={ photoURL }
                    alt="Зображення"/>
            </div>
        )
    }
}

export default compose(connect((state, ownProp) => Object.assign({}, state, ownProp)))(NewsCardPage);