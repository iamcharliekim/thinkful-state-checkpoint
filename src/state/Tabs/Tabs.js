import React from 'react';

class Tabs extends React.Component {
    
    static defaultProps = { tabs: [] }
    
    state = {
        currentTabIndex: 0 
    }

    componentDidMount(){
        console.log(this.props.tabs)
    }
    
    buttonClickHandler = (index) => {
        console.log('clicked', index)
        this.setState({currentTabIndex: index})
    }

    renderButtons = () => {
        return this.props.tabs.map((tab, i)=>{
            return <button key={i} onClick={() => this.buttonClickHandler(i)}>{tab.name}</button>
        })
    }
    
    renderContent = () => {
        const currentTab = this.props.tabs[this.state.currentTabIndex]
        
        return (
            <div className="content">
                {currentTab.content}
            </div>
        )
    }
    
    render() {
        
        return (
            <div>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
                
            </div>
        )
    }
}

export default Tabs