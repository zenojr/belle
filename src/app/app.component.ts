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
  title = 'app';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

}
