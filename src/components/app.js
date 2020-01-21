import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Excercises from '../pages/exeercises';
import ExerciseNew from '../pages/exerciseNew';

function App(){
    return(
        <BrowserRouter>
            <Route exact path="/exercise" component={Excercises}/>
            <Route exact path="/exercise/new" component={ExerciseNew}/>
        </BrowserRouter>
    );
}

export default App;
