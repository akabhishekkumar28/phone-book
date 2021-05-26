import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headersOpt = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private http: HttpClient) {}

  formData = {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: '',
    image: '',
  };

  saveContactList() {
    return this.http.post('http://localhost:5000/numberList', this.formData);
  }

  getRepos() {
    return this.http.get('http://localhost:5000/numberList');
  }

  deleteUser(id: number) {
    return this.http.delete(
      `http://localhost:5000/numberList/${id}`,
      headersOpt
    );
  }
}
