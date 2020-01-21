import React from 'react';
import exerciseImage from '../images/exercise.png';
import circleImage from '../images/circles.png';
import './styles/card.css';

class Card extends React.Component {
    render(){

        const {title, description, img, leftColor, rightColor} = this.props;
        console.log(this.props);

        return (
            <div className="card mx-auto fitness-card"
            style ={{
                backgroundImage:`url(${circleImage}), linear-gradient(to right, ${leftColor}, ${rightColor})`
            }}
            >
                <div className="card-body">
                    <div className="row-center">
                        <div className="col-6">
                            <img src={exerciseImage} className="float-right"/>
                        </div>
                        <div className="col-6 fitness-card-info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;