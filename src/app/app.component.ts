import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {




  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'pt']);
    this.translate.setDefaultLang('en');
    this.translate.use('pt');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/pt|en/) ? browserLang : 'en' );
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
