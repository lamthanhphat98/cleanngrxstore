import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserHttp } from '../models/http/user.http.interface';
import { environment } from 'src/environments/environment';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getUsers()
  {
    return this.http.get<IUser[]>(environment.apiUrl+"/api/store/user");
  }
  postUser(data : IUser)
  {
    return this.http.post(environment.apiUrl+"/api/store/user/post",data,{responseType:'text'});
  }
  deleteUser(id : number)
  {
    return this.http.delete(environment.apiUrl+"/api/store/user/delete?id="+id,{responseType:'text'});
  }
}
