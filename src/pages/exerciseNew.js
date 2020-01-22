import React from 'react';

class ExerciseNew extends React.Component{

    // Pasando el this en una funcion
    // constructor(props){
    //     super(props);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleClick(){
    //     console.log(this);
    // }

    // Usando Arrow function, haciendo lo mismo
    handleClick = ()=>{
        console.log(this)
    }

    render(){
        return (<button onClick={this.handleClick}>Send</button>)
    }
}

export default ExerciseNew;
