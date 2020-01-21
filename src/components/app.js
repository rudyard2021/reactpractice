import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Excercises from '../pages/exeercises';
import ExerciseNew from '../pages/exerciseNew';
import NotFound from '../pages/notFound';

function App(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Excercises}/>
                <Route exact path="/exercise/new" component={ExerciseNew}/>
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
