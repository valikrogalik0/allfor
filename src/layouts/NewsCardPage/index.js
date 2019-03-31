import React, { Component } from 'react';
import NewsCardPage from './NewsCardPage';


import { compose } from 'recompose';
import { connect } from 'react-redux';

import { news } from '../../actions'

class NewsCard extends Component {

   componentDidMount() {
      console.log('==========',this.props);
   }

   render() {
      return( 
         <NewsCardPage props={this.props} />
      )
   }
}

export default compose(connect((state, ownProps) => news()))(NewsCard);