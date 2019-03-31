import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "../../reducers";

import Header from "../Header";
import Main from "../../layouts/Main";
import News from "../../layouts/News";
import NewsCardPage from '../../layouts/NewsCardPage/NewsCardPage';
import Footer from "../Footer";
import Contacts from '../Contacts'

import "./style.css";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/news" component={News} />
            <Route exact path='/news/:id' component={NewsCardPage} />
            <Route exact path='/contacts' component={Contacts} />
          </Switch>
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
