import React, { Component, Fragment } from 'react'
import NavBar from './NavBar';
import NewQuestion from './NewQuestion'
import LeaderBoard from './leaderBoard'
import Home from './Home'
import QuestionsChecker from './QuestionsChecker'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound';

class ProtectedRoute extends Component {
    render() {
        return (
        <Router>
            <Fragment>
            <NavBar /> 
            <Switch>
            <Route exact  path='/' component={Home} ></Route>
            <Route path='/questions/:id' component={QuestionsChecker} />
            <Route path='/add' component={NewQuestion} /> 
            <Route path='/leaderboard' component={LeaderBoard}/> 
            <Route component={NotFound} />
            </Switch>
            </Fragment>
            </Router>
        ) 
    }
}

export default ProtectedRoute
