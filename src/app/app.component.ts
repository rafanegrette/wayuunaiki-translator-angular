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

  textToTranslate: string = "";
  textTranslated: string = "";

  constructor(private translateService: TranslateService) {

  }
  translate() {
    this.error = '';
    this.translateService.translate(this.textToTranslate)
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
