import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import News from './pages/news.js'
import Login from './pages/login.js'
import User from './pages/user.js'
import Header from './components/header.js'
import Post from './pages/post.js'
import MobileHeader from './components/mobileHeader.js'
import NewsPaginated from './pages/newsPaginated.js'

class App extends Component {
  
  render(){
    
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">  
            <Header />
            <MobileHeader />
            <div className="news-page">
              <Switch>
                <Route exact path="/" component={News} />
                <Route exact path="/news/:no" component={NewsPaginated} />
                <Route exact path="/user/:user" component={User}/>
                <Route exact path="/post/:id" component={Post}/>
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }
}

export default App;
