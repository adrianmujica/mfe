import { Component, OnInit } from '@angular/core';
import { TranslationService} from 'translation-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';
  lang?: string;

  constructor(private translateService: TranslationService) {
    this.translateService.onLangChanged().subscribe((value) => {
      console.log('Changed language shell: ', value);
      // TODO: we should set the lang variable the first time that loads app
      this.lang = value;
    });
  }

  setLang(lang: string) {
    this.translateService.setLang(lang);
  }
}
