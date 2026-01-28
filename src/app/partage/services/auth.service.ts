import { Injectable } from '@angular/core';
import { UserI } from '../modeles/types';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?:UserI;

  isConn(){
    return this.user ? true : false;
  }
  deconn(){
    this.user = undefined;
  }
}