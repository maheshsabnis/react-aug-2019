import React, { Component } from 'react';

class StudentComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StudentId: 0,
            StudentName: '',
            Address: '',
            Class: '',
            Division: '',
            Classes: ['First', 'Second', 'Third', 'Fourth'],
            Divisions: ['A', 'B', 'C', 'D'],
            Students: [{ StudentId: 0, StudentName: '', Address: '', Class: '', Division: '' }],
            headers: []
        };

        this.generateHeaders();
    }
    generateHeaders() {
        for (let h in this.state.Students[0]) {
            this.state.headers.push(h);
        }
    }
    handleOnChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
        console.log(evt.target.value);
    }
    clear() {
        this.setState({ 'StudentId': 0 });
        this.setState({ 'StudentName': '' });
        this.setState({ 'Address': '' });
        this.setState({ 'Class': '' });
        this.setState({ 'Division': '' });
    }
    save(){
        let student ={
            StudentId:this.state.StudentId,
            StudentName:this.state.StudentName,
            Address:this.state.Address,
            Class:this.state.Class,
            Division:this.state.Division
        };
        // this.state.Students.push(student);
        // console.log(JSON.stringify(this.state.Students));
        // to setState() for Students array
        // 1. define a temp Array same as Students Array
        let temp = this.state.Students.slice();
        // 2. push data in temp array
        temp.push(student);
        // 3. setState for Students using tempa array
        this.setState({'Students':temp});
    }
    getSelectedRow(std){
        this.setState({ 'StudentId': std.StudentId });
        this.setState({ 'StudentName': std.StudentName });
        this.setState({ 'Address': std.Address });
        this.setState({ 'Class': std.Class });
        this.setState({ 'Division': std.Division });
    }
    
    render() {
        return (
            <div className="container">
                <div className="form-group">
                    <label htmlFor="StudentId">Student Id</label>
                    <input type="text" className="form-control" value={this.state.StudentId} name="StudentId" onChange={this.handleOnChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="StudentName">Student Name</label>
                    <input type="text" className="form-control" value={this.state.StudentName} name="StudentName" onChange={this.handleOnChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Address">Adress</label>
                    <input type="text" className="form-control" value={this.state.Address} name="Address" onChange={this.handleOnChange.bind(this)} />
                </div>
                <div className="form-group">
                    <label htmlFor="Class">Class</label>
                    <select className="form-control" value={this.state.Class} name="Class" onChange={this.handleOnChange.bind(this)}>
                        <option>Select Class</option>
                        {
                            this.state.Classes.map((v, i) => (
                                <OptionsComponent key={i} val={v} />
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="Division">Division</label>
                    <select className="form-control" value={this.state.Division} name="Division" onChange={this.handleOnChange.bind(this)}>
                        <option>Select Division</option>
                        {
                            this.state.Divisions.map((v, i) => (
                                <OptionsComponent key={i} val={v} />
                            ))
                        }
                    </select>
                </div>
                <div className="form-group">
                    <input type="button" value="New" className="btn btn-default" onClick={this.clear.bind(this)} />
                    <input type="button" value="Save" className="btn btn-success" onClick={this.save.bind(this)} />
                </div>
                <br />
                Select Search Criteria
                <br/>
                <input type='radio' name='r' /> Student Name
                <input type='radio' name='r' /> Class
                <input type='radio' name='r'  /> Division
                <input type='text' className="form-control"/> 
                <br/>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            {
                                this.state.headers.map((v, i) => (
                                    <td key={i}>{v}</td>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.Students.map((v,i)=> (
                            <TableRowComponent key={i} std={v}
                            selectedRow={this.getSelectedRow.bind(this)}/>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

// the component that will generate <option>
class OptionsComponent extends Component {
    render() {
        return (<option value={this.props.val}>{this.props.val}</option>)
    }
}

class TableRowComponent extends Component {
    onRowClick(){
        // the ref. method to be defined by parent
        this.props.selectedRow(this.props.std);
    }
    render(){
        return (
            <tr onClick={this.onRowClick.bind(this)}>
                <td>{this.props.std.StudentId}</td>
                <td>{this.props.std.StudentName}</td>
                <td>{this.props.std.Address}</td>
                <td>{this.props.std.Class}</td>
                <td>{this.props.std.Division}</td>
            </tr>  
        )
    }
}

export default StudentComponent;