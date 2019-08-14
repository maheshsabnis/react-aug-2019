import React, { Component } from 'react';
class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers:[]
        };
        this.generateHeaders();
    }
    generateHeaders() {
        if (this.props.dataSource.length > 0) {
            for (let c in this.props.dataSource[0]) {
                this.state.headers.push(c);
            }
        }
    }
    onRowClick(){
        alert('Clicked');
    }
    render() {
        return (
            <table className="table table-striped table-bordered">
                <thead>
                 <tr>
                 {
                     this.state.headers.map((h,i) => (
                         <td key={i}>{h}</td>
                     ))
                 }
                 </tr>
                </thead>
                <tbody>
                  {
                    this.props.dataSource.map((d,i)=>(
                        <tr key={i} onClick={this.onRowClick.bind(this)}>
                            {
                                this.state.headers.map((h,i) => (
                                    <td key={i}>{d[h]}</td>
                                ))  
                            }
                        </tr>
                    ))
                  }
                </tbody>
            </table>
        );
    }
}

export default TableComponent;