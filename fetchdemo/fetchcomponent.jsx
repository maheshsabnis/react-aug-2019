import React, { Component } from 'react';
import {HttpService} from './service';
class FetchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StudentId: 0,
            StudentName: '',
            Students:[{StudentId:0,StudentName:''}],
            ErrorMessage:'',
            SuccessMessage:''
        };
        this.serv = new HttpService(); // instance of the service class
    }
    
    // the metod that will be executed after render()
    componentDidMount(){
     this.loadData();
    }

    loadData(){
        this.serv.getStudents()
        .then(resp=>resp.json()) // subscribe to received promise
        .then(data=>{
            console.log(data);
             this.setState({'Students':data});
        }) // success
        .catch(err=>{this.setState({'ErrorMessage':err});}); // fail
    }
    change(evt) {
        this.setState({
            [evt.target.name]: evt.target.value });
    }
    save(){
        let student={
            StudentId: this.state.StudentId,
            StudentName: this.state.StudentName
        };

        this.serv.postStudent(student)
            .then(resp=>resp.json())
            .then(data=>{
                this.setState({'SuccessMessage':`Student Added Successfully ${JSON.stringify(data)}`});
                this.loadData();
            }).catch(err=>{this.setState({'ErrorMessage':err});}); // fail;
    }
    render() {
        return (
            <div className="container">
                    <div className="form-group">
                        <label htmlFor="StudentId">StudentId</label>
                        <input type="text" className="form-control" value={this.state.StudentId} onChange={this.change.bind(this)}
                            name="StudentId" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="StudentName">StudentName</label>
                        <input type="text" className="form-control" value={this.state.StudentName} onChange={this.change.bind(this)}
                            name="StudentName" />
                    </div>
                    <div className="form-group">
                        <input type="button" value="Save" 
                         onClick={this.save.bind(this)}
                        className="btn btn-success" />
                    </div>
                    <div className="container">
                       <span>{this.state.ErrorMessage}</span>
                       <span>{this.state.SuccessMessage}</span>
                    </div>
                    <hr/>
                    <table className="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <td>Student Id</td>
                          <td>Student Name</td>
                        </tr>
                      </thead>
                      <tbody>
                         {
                             this.state.Students.map((s,i) => (
                                 <tr key={i}>
                                   <td>{s.StudentId}</td>
                                   <td>{s.StudentName}</td>
                                 </tr>
                             ))
                         }
                      </tbody>
                    </table>
            </div>
        );
    }
}

export default FetchComponent;