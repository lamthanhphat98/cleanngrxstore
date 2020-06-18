import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IConfigState } from '../store/state/config.state';
import { IConfig } from '../models/config.interface';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http:HttpClient) { }
  getConfig()
  {
    return this.http.get<IConfig>(environment.apiUrl+"/api/store/config");
  }
}
