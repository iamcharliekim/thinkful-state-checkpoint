import React from 'react';

class HelloWorld extends React.Component {
    state = {
        who: 'world'
    }

    whoHandler = (e) => {
        this.setState({who: e.target.textContent})
    }
    
    
    
    
    render(){
        
        return (
            <div>
                <p> Hello, {this.state.who} </p>
                <button onClick={this.whoHandler}> World </button>
                <button onClick={this.whoHandler}> Friend </button>
                <button onClick={this.whoHandler}> React </button>
            </div>
        
        
        )
    }
}

export default HelloWorld