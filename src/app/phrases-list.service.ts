import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PhraseModel } from './model/phrase.model';

@Injectable({
  providedIn: 'root'
})
export class PhrasesListService {
  private _listPhrases : PhraseModel[] = [];
  private PATH_DATA = 'assets/phrases-json.json';

  constructor(private http: HttpClient) { }

  getPhrases() {
    return this._listPhrases;
  }

  loadData(): Promise<PhraseModel[]>{
    return new Promise<PhraseModel[]>(resolve => {
      this.http.get<PhraseModel[]>(this.PATH_DATA, ).subscribe(data => {
        this._listPhrases = data;
        resolve(this._listPhrases);
      });
      
    });
  }

}
