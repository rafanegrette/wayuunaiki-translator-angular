import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { PhraseResponse } from './PhraseResponse';
import { environment } from '../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/vnd.heroku+json; version=3.docker-releases'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  
  //url:string ="http://localhost:5000/";

  constructor(private http: HttpClient) { }

  translateSpaToGuc(textToTranslate: string) {        
    let textJson = { "text": textToTranslate};
    console.log(textJson);
    return this.http.post<PhraseResponse>(environment.translateSpaToGucUrl, textJson, httpOptions)
                                          .pipe(
                                            retry(1),
                                            catchError(this.handleError)
                                          );
  }

  handleError(error: any) {
    let errorMessage: String = '';
    if (error.error instanceof ErrorEvent){
      errorMessage = "Ocurrio un error: " + error.error.message;
    } else {
      errorMessage = "Occurrio un error: " +
        error.status + "\nMensaje: " + error.message;
    }
    return throwError(errorMessage + ". \n\nContacte al administrador.");
  }

  translateGucToSpa(textToTranslate: string) {        
    let textJson = { "text": textToTranslate};
    console.log(textJson);
    return this.http.post<PhraseResponse>(environment.translateGucToSpaUrl, textJson, httpOptions)
                                          .pipe(
                                            retry(1),
                                            catchError(this.handleError)
                                          );
  }
  
}
