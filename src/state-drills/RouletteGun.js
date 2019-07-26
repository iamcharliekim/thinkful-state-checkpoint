import React from 'react'

class RouletteGun extends React.Component {
    state ={
        chamber: null,
        spinningTheChamber: false
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    clickHandler = () => {
        this.setState({spinningTheChamber: true})
        
        setTimeout(()=> {
            let chamberVal = Math.floor(Math.random()*8+1)
            this.setState({chamber: chamberVal, spinningTheChamber: false})
            
        }, 2000
    )}
    
    
    
    render() {
        let contentMsg;
        
        if (this.state.spinningTheChamber){
            contentMsg = 'spinning the chamber and pulling the trigger! ...'
        } else if (this.state.chamber === this.props.bulletInChamber){
            contentMsg = 'BANG!!!!'
        } else {
            contentMsg = 'you\'re safe!'
        }
        
        
        
        
        return (
            <div>
                <p>{contentMsg}</p>
                <button onClick={this.clickHandler}>Pull the trigger! </button>
            </div>
        
        )
    }
}

export default RouletteGun