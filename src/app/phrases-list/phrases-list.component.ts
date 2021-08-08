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
  SPEAKER_HOVER_PATH: string = "assets/speaker-icon-hover.svg";
  speakerHoverPath: string = this.SPEAKER_HOVER_PATH;
  speakerNormalPath: string = "assets/speaker-icon.svg";
  speakerPlayingPath: string = "assets/speaker-icon-playing.svg";
  speakerPath: string = this.speakerNormalPath;
  mouseOutSpeaker: number = -1;
  isAudioPlaying: boolean = false;
  constructor(private phraseListService: PhrasesListService) { }

  ngOnInit(): void {
    this.phraseListService.loadData().then(data => {
      this.phrases = data;
    });
  }

  playAudio(idAudio: string){
    this.speakerHoverPath = this.speakerPlayingPath;
    let audio = new Audio();
    audio.src = 'https://github.com/rafanegrette/publicdatasets/blob/master/audios-wayunaiki/' + idAudio +'.wav?raw=true';
    audio.load();
    this.isAudioPlaying = true;
    audio.play();
    audio.onended = () => {
      this.speakerHoverPath = this.SPEAKER_HOVER_PATH;
      this.isAudioPlaying = false;
    };
  }

}
