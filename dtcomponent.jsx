import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const header = {
    fontSize: '55px',
    fontWeight: 'bold'
};

class UITableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Students: [
                { StudemtId: 101, StudentName: 'Mahesh', Class: 'First', Division: 'A' },
                { StudemtId: 102, StudentName: 'Tejas', Class: 'Second', Division: 'B' },
                { StudemtId: 103, StudentName: 'Anil', Class: 'Third', Division: 'C' },
                { StudemtId: 104, StudentName: 'Abhay', Class: 'First', Division: 'A' },
                { StudemtId: 105, StudentName: 'Akshay', Class: 'Second', Division: 'B' },
                { StudemtId: 106, StudentName: 'Ajay', Class: 'Third', Division: 'C' }
            ],
            headers: []
        };
        this.generateHeaders();
    }
    generateHeaders() {
        for (let c in this.state.Students[0]) {
            this.state.headers.push(c);
        }
    }
    render() {
        return ( <
            Paper >
            <
            Table >
            <
            TableHead >
            <
            TableRow > {
                this.state.headers.map((v, i) => ( <
                    TableCell key = { v }
                    align = "center"
                    style = { header } > { v } < /TableCell>
                ))
            } <
            /TableRow> < /
            TableHead > <
            TableBody > {
                this.state.Students.map((v, i) => ( <
                    TableRow key = { i } > {
                        this.state.headers.map((h, i) => ( <
                            TableCell key = { i }
                            align = "center" > { v[h] } < /TableCell>
                        ))
                    } <
                    /TableRow>
                ))
            } <
            /TableBody> < /
            Table > <
            /Paper>
        );
    }
}

export default UITableComponent;