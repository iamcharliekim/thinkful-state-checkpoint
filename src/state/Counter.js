import React from 'react';


class Counter extends React.Component {
    state = {
        count: 0
    };
    
    counterHandler = () => {
        this.setState({count: this.state.count + 1})
    }



    render() {
    return (
      <div>
        <p>The current count: {this.state.count}</p>
        <button onClick={this.counterHandler}>
          Add 1
        </button>
      </div>
    )
    }
}

export default Counter