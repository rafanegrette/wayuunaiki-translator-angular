import { Component } from '@angular/core';
import { TranslateService } from './translate.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Traductor español-wayuunaiki';

  textToTranslate: string = "";
  textTranslated: string = "";

  constructor(private translateService: TranslateService) {

  }
  translate() {
    this.translateService.translate(this.textToTranslate)
          .subscribe(response => this.textTranslated = response.body);
  }
}
