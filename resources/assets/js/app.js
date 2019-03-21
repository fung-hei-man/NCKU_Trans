import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import Home from './home';
import Comment from './comment';
import Layout from './layout';
import Post from './post';
import Admin from './admin'
import QA from './major_QA';
import error from './error';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
class App extends Component{
    constructor(props) {
    super(props);
    }

    render(){
        return(
        <HashRouter>    
            <Switch>
                <Route exact path="/" component={Home}/>
                <Layout>
                    <Route path="/comment" component={Comment}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/QA/:id" component={QA}/>
                    <Route path="/home" component={Home}/>
                </Layout>
                <Route path="" component={error}/>         
            </Switch>
        </HashRouter>
        );
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );
