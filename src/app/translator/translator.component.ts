import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { TranslateService } from '../translate.service';
import { TranslateOptions } from '../TranslateOptions';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css', '../app.component.css']
})
export class TranslatorComponent implements OnInit {
  error: string = '';
  labelToTranslate: string = "Español";
  labelTranslated: string = "Wayuunaiki";
  spanishToWayuu: Boolean = true;
  textToTranslate: string = "";
  textTranslated: string = "";
  textDictionaryResult: string = "";
  results : TranslateOptions = {dictionary: "", predict : ""};
  logoPath: string = "assets/logo128px.png";  
  TITLE_S_TO_W: string = 'Traductor español - wayuunaiki';
  TITLE_W_TO_S: string = 'Traductor wayuunaiki - español';
  title: string = this.TITLE_S_TO_W;
  isLoading: boolean = false;

  @Output() logoPathChanged = new EventEmitter<string>();

  constructor(private translateService: TranslateService) {

  }
  translate() {
    this.error = '';
    this.isLoading = true;
    if (this.spanishToWayuu) {
      this.translateService.translateSpaToGuc(this.textToTranslate)
            .subscribe(response => {
                                  if (response.statusCode === 200) {
                                    this.textTranslated = response.body.predict;
                                    this.textDictionaryResult = response.body.dictionary;
                                  } else {
                                    this.error = response.body.predict;   
                                    this.textDictionaryResult = '';                                 
                                    this.textTranslated = '';
                                    }
                                    this.isLoading = false;
                                  },
                      error => {
                        this.error = error;
                        this.textTranslated = '',
                        this.isLoading = false;});
    } else {
      this.translateService.translateGucToSpa(this.textToTranslate)
            .subscribe(response => {
                                  if (response.statusCode === 200) {
                                    this.textTranslated = response.body.predict;
                                    this.textDictionaryResult = response.body.dictionary;
                                  } else {
                                    this.error = response.body.predict;
                                    this.textTranslated = '';
                                    this.textDictionaryResult = '';
                                    }
                                    this.isLoading = false;
                                  },
                      error => {
                        this.error = error;
                        this.textTranslated = '';
                        this.isLoading = false;});
    }
  }

  interchange() {
    this.spanishToWayuu = !this.spanishToWayuu;
    let textTemp: string = "";
    this.textDictionaryResult = '';
    
    if (this.spanishToWayuu) {
      this.labelToTranslate = "Español";
      this.labelTranslated = "Wayuunaiki";
      textTemp = this.textToTranslate;
      this.textToTranslate = this.textTranslated;
      this.textTranslated = textTemp;
      this.logoPath = "assets/logo128px.png";
      this.title = this.TITLE_S_TO_W;
    } else {
      this.labelToTranslate = "Wayuunaiki";
      this.labelTranslated = "Español";
      textTemp = this.textTranslated;       
      this.textTranslated  = this.textToTranslate;
      this.textToTranslate = textTemp;
      this.logoPath = "assets/logo2-128px.png";
      this.title = this.TITLE_W_TO_S
    }
    this.logoPathChanged.emit(this.logoPath);
  }

  ngOnInit(): void {
  }

  changeLogoPath(path: string) {
    this.logoPath = path;
  }

}
