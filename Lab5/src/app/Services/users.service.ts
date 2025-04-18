import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private readonly url = "http://localhost:3000/users"

  constructor(private readonly http: HttpClient) { }

  getAllUsers() {
    return this.http.get(this.url)
  }
  getUser(id: number) {
    return this.http.get(this.url + "/" + id)
  }

  addUser(user: any) {
    return this.http.post(this.url, user)


  }
}
