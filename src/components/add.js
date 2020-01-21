import React from 'react';
import addImg from '../images/add.png';
import './styles/card.css'
import {Link} from 'react-router-dom';

function Add(props){
    return(
        // <a href="/exercise/new">
        //     <img src={addImg} className="add-pages"/>
        // </a>
        <Link to="/exercise/new">
            <img src={addImg} className="add-pages"/>
        </Link>
    );
}

export default Add;
