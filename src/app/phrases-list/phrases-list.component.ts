import { Component, OnInit } from '@angular/core';
import { PhraseModel } from '../model/phrase.model';
import { PhrasesListService } from '../phrases-list.service';

@Component({
  selector: 'app-phrases-list',
  templateUrl: './phrases-list.component.html',
  styleUrls: ['./phrases-list.component.css'],
  providers: [PhrasesListService]
})
export class PhrasesListComponent implements OnInit {

  phrases: PhraseModel[] = [];

  constructor(private phraseListService: PhrasesListService) { }

  ngOnInit(): void {
    this.phraseListService.loadData().then(data => {
      this.phrases = data;
    });
  }

}
