import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traductor español-wayuunaiki';
  error: string = '';

  labelToTranslate: string = "Español";
  labelTranslated: string = "Wayuunaiki";
  spanishToWayuu: Boolean = true;
  textToTranslate: string = "";
  textTranslated: string = "";
  logoPath: string = "assets/logo128px.png";

  constructor(private translateService: TranslateService) {

  }
  translate() {
    this.error = '';

    if (this.spanishToWayuu) {
      this.translateService.translateSpaToGuc(this.textToTranslate)
            .subscribe(response => {
                                  if (response.statusCode === 200) 
                                    this.textTranslated = response.body;
                                  else {
                                    this.error = response.body;
                                    this.textTranslated = '';
                                    }
                                  },
                      error => {
                        this.error = error;
                        this.textTranslated = ''});
    } else {
      this.translateService.translateGucToSpa(this.textToTranslate)
            .subscribe(response => {
                                  if (response.statusCode === 200) 
                                    this.textTranslated = response.body;
                                  else {
                                    this.error = response.body;
                                    this.textTranslated = '';
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
  }
}
