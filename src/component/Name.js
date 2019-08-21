import React, { Component } from 'react';

class Name extends Component {
    constructor(props){
        super(props);
        this.state = {name: 'Mr. Unknow'};
    }
    changeName(){
        let n = document.getElementsByClassName('input')[0].value;
        this.setState({name: n});
    }
    render() {
        return (
            <div className="App-sayname">
                <input type="name" className="input" placeholder="Your Name" onChange={this.changeName.bind(this)}/>
                <p className="input-helper">Welcome {this.state.name}!</p>
            </div>
        );
    }
}

export default Name;