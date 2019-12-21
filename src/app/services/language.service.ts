import { Injectable } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Storage } from "@ionic/storage";

const LNG_KEY = "SELECTED_LANGUAGE";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  selected = '';

  constructor(private translate: TranslateService,
    private storage: Storage,
  ) { }

  setInitialLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang('de');

    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }

  setLanguage(val) {
    this.translate.use(val);
    this.selected = val;
    this.storage.set(LNG_KEY, val);
  }

  getLanguages() {
    return [
      { text: 'English', value: 'en' },
      { text: 'German', value: 'de' },
    ]
  }
}
