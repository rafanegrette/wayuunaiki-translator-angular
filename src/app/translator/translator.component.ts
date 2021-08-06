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
  title = 'Traductor español-wayuunaiki';  
  @Output() logoPathChanged = new EventEmitter<string>();

  constructor(private translateService: TranslateService) {

  }
  translate() {
    this.error = '';

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
                                  },
                      error => {
                        this.error = error;
                        this.textTranslated = ''});
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
                                  },
                      error => {
                        this.error = error;
                        this.textTranslated = ''});
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
    } else {
      this.labelToTranslate = "Wayuunaiki";
      this.labelTranslated = "Español";
      textTemp = this.textTranslated;       
      this.textTranslated  = this.textToTranslate;
      this.textToTranslate = textTemp;
      this.logoPath = "assets/logo2-128px.png";
    }
    this.logoPathChanged.emit(this.logoPath);
  }

  ngOnInit(): void {
  }

  changeLogoPath(path: string) {
    this.logoPath = path;
  }

}
