import React, { Component } from 'react';
class SampleStateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Mahesh Sabnis',
            role: 'Traniner'
        };
    }
    render() {
        return (
            <div>
                <h2>The State within Component : {this.state.name}</h2>
                <h2>The State across Component : {this.props.message}</h2>
                <TestComponent data={this.state.role}/>
            </div>
        );
    }
}

class TestComponent extends Component {
    render() {
        return (
            <div>
                <h2>
                    The Role is {this.props.data}
                </h2>
            </div>
        )
    }
}

export default SampleStateComponent;