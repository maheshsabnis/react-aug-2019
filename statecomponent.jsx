import React, { Component } from 'react';
class StateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            n1: 0,
            n2: 0,
            res: 0
        };
    }

    handleN1Change(evt){
        // setState is an async method to update the state property
        // evt: the event on 'target' element and read its 'value'
        this.setState({'n1':evt.target.value});
        console.log(this.state.n1);
    }
    handleN2Change(evt){
        this.setState({'n2':evt.target.value});
        console.log(this.state.n2);
    }

    handleAddClick(evt){
        let res = parseInt(this.state.n1) + parseInt(this.state.n2);
        this.setState({'res':res});
    }
    handleMultClick(evt){
        let res = parseInt(this.state.n1) * parseInt(this.state.n2);
        this.setState({'res':res});
    }
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="N1">N1</label>
                    <input type="text" className="form-control" value={this.state.n1} onChange={this.handleN1Change.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="N2">N2</label>
                    <input type="text" className="form-control" value={this.state.n2} onChange={this.handleN2Change.bind(this)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Res">Res</label>
                    <input type="text" className="form-control" value={this.state.res} readOnly/>
                </div>
                <div className="form-group">
                     <input type="button" value="Add" className="btn btn-success" onClick={this.handleAddClick.bind(this)}/>
                     <input type="button" value="Mult" className="btn btn-warning" onClick={this.handleMultClick.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default StateComponent;