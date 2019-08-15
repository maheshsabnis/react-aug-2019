import React, { Component } from 'react';
class ValidationComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            EmpNo: 0,
            EmpName: '',
            isEmpNoValid: true,
            EmpNoErrorMessage: '',
            isEmpNameValid: true,
            EmpNameErrorMessage: ''
        };
    }
    change(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        this.Validate(evt.target.name, evt.target.value);
    }
    Validate(name, value) {
        switch (name) {
            case 'EmpNo':
                if (value <= 0) {
                    this.setState({ 'isEmpNoValid': false });
                    this.setState({ 'EmpNoErrorMessage': 'EmpNo cannot be -ve' });
                }else{
                    this.setState({ 'isEmpNoValid': true });
                    this.setState({ 'EmpNoErrorMessage': '' });
                }
                break;
            case 'EmpName':
                if (value.length <= 0) {
                    this.setState({ 'isEmpNameValid': false });
                    this.setState({ 'EmpNameErrorMessage': 'EmpName cannot be empty' });
                }else{
                    this.setState({ 'isEmpNameValid': true });
                    this.setState({ 'EmpNameErrorMessage': '' });
                }
                break;
        }
    }
    save() {
        console.log('Saved...');
    }
    render() {
        return (
            <div className="container">
                <form action="post" onSubmit={this.save.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="EmpNo">EmpNo</label>
                        <input type="text" className="form-control" value={this.state.EmpNo} onChange={this.change.bind(this)}
                            name="EmpNo" />
                        <div className='alert alert-danger' hidden={this.state.isEmpNoValid}>{this.state.EmpNoErrorMessage}</div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="EmpName">EmpName</label>
                        <input type="text" className="form-control" value={this.state.EmpName} onChange={this.change.bind(this)}
                            name="EmpName" />
                        <div className='alert alert-danger' hidden={this.state.isEmpNameValid}>{this.state.EmpNameErrorMessage}</div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Save" className="btn btn-success" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ValidationComponent;