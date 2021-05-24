import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";
import { DaysEvents } from '../Components/DaysEvents';
import Home from '../Components/Home';
import MedalsTable from '../Components/MedalsTable';
import { Search } from '../Components/Search';
import { Settings } from '../Components/Settings';
import { Sports } from '../Components/Sports';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home"  component={Home} />
                <Route path="/sports" component={Sports} />
                <Route path="/events" component={DaysEvents} />
                <Route path="/medals-table" component={MedalsTable} />
                <Route path="/search" component={Search} />
                <Route path="/settings" component={Settings} />
                <Route path="*" component={() => <h1>404 page not found</h1>} />
            </Switch>
        </div>
    )
}

export default Routes