import { Component } from '@angular/core';
import { TranslationService} from 'translation-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shell';

  constructor(private translateService: TranslationService) {
    this.translateService.onLangChanged().subscribe((value) => {
      console.log('Changed language: ', value);
    })
  }
}
