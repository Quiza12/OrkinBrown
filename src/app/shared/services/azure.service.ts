import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AzureService {

  url = 'https://prod-23.australiaeast.logic.azure.com:443/workflows/e8f5fc0236434295b5cd03aa8e734126/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=8zF3vMPYJlGEqFdArY4tKXrwkTEHA7mVNj7979Qc5N4&Content-Type=application/json';
  
  constructor(private http: HttpClient) { }

  postData(value: any) {
    return this.http.post(this.url, value);
  }

}
