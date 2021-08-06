import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PhraseModel } from './model/phrase.model';

@Injectable({
  providedIn: 'root'
})
export class PhrasesListService {
  private _listPhrases : PhraseModel[] = [];
  private PATH_DATA = 'assets/tourism_phrases.csv';

  constructor(private http: HttpClient) { }

  getPhrases() {
    return this._listPhrases;
  }

  loadData(): Promise<any[]>{
    const options = {
      responseType: 'text' as const,
    };
    return new Promise<any[]>(resolve => {
      this.http.get(this.PATH_DATA, {responseType: 'text'}).subscribe(data => {
        console.log(data)
        resolve(this._listPhrases);
      });
      
    });
  }

}
