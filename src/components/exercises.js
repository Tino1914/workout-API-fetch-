import React, { Component } from 'react'

export class exercises extends Component {

state = {
    loading: true,
    exercise : null
};


async componentDidMount(){
    const url = "https://wger.de/api/v2/exercisecategory/?language=2" ;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({exercise: data.results[0], loading: false });
    console.log(data);
}


    render() {
        return (
            <div>
                { this.state.loading || !this.state.exercise ? (<div>loading..</div> ) :
                    ( <div>
                        <div>

                        {this.state.exercise.name}
                        </div>
                        
                        </div>)}
            </div>
        )
    }
}

export default exercises
