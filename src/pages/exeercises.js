import React from 'react';
import Card from '../components/card';
import Welcome from '../components/welcome';

class Excercises extends React.Component{
    render(){
        return(
            <div>
                <Welcome
                username="Edwin Flores"
                />
                <Card
                    title="Technique Guides"
                    description="Learn amazin street workout and calisthenie."
                    img=""
                    leftColor="#A74CF2"
                    rightColor="#617BFB"
                />
            </div>
        )
    }
}
export default Excercises;
