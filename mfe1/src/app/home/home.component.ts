import { Component, OnDestroy, OnInit } from '@angular/core';
import { takeWhile } from 'rxjs';
import { TranslationService } from 'translation-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscribeLang: boolean = true;

  constructor(private translationService: TranslationService) {
    this.translationService.onLangChanged().pipe(takeWhile(() => this.subscribeLang)).subscribe((lang) => {
      console.log('Lang change mfe1', lang);
    })
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.subscribeLang = false;
  }

}
