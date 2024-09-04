import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Iuser } from '../models/Iuser.interface';
import { catchError } from 'rxjs';
import { PERSONAS_DATA } from '../mock/data.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _http = inject(HttpClient)
  endPointUsers = ''
  constructor() { }

  getUsers(){
    return this._http.get<Iuser[]>(this.endPointUsers)


  }
  handleError(){
      return PERSONAS_DATA
  }

  getProducts(){
    return this._http.get('https://fakestoreapi.com/products')
  }
}
