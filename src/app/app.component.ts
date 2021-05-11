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

    if (this.spanishToWayuu) {
      this.labelToTranslate = "Español";
      this.labelTranslated = "Wayuunaiki";
    } else {
      this.labelToTranslate = "Wayuunaiki";
      this.labelTranslated = "Español";
    }
  }
}
