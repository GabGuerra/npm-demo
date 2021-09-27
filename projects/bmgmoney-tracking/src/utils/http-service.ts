import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private httpClient: HttpClient){

    }
  public post(url: string, endpoint: string, data: any = null) {
    return this.httpClient.post(url + endpoint, data, {  responseType:'text' as 'text' });
  }
}