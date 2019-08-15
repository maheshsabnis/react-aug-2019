import axios from 'axios';
export class HttpService {
    getStudents() {
        var response = fetch('http://localhost:4085/api/StudentAPI', { method: 'get' });
        return response;
    }

    postStudent(student) {
        var response = fetch('http://localhost:4085/api/StudentAPI', {
            method: 'post',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }

    putStudent(id, student) {
        var response = fetch(`http://localhost:4085/api/StudentAPI/${id}`, {
            method: 'put',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response;
    }
    deleteStudent(id, student) {
        var response = fetch(`http://localhost:4085/api/StudentAPI/${id}`, {
            method: 'delete'
        });
        return response;
    }
}