import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { PhraseResponse } from './PhraseResponse';
import { environment } from '../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  
  
  //url:string ="http://localhost:5000/";

  constructor(private http: HttpClient) { }

  translate(textToTranslate: string) {        
    let textJson = { "text": textToTranslate};
    return this.http.post<PhraseResponse>(environment.translateUrl, textJson, httpOptions);
  }
}
