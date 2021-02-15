import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor() { }

  revert(params: any): HttpParams {
    params = Object.assign({}, params);
    Object.keys(params).forEach(key => {
      if (typeof params[key] === 'object') {
        params[key] = JSON.stringify(params[key]);
      } else if (params[key] === undefined) {
        delete params[key];
      }
    });
    return params;
  }
}
