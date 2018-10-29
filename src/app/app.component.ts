import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecoturwe';
  siteRef: AngularFireObject<any>;
  site: any = {};
  sites: Observable<any>;

  constructor(private db: AngularFireDatabase){
    this.siteRef = this.db.object("sites");
    this.sites = this.siteRef.valueChanges();
  }
  submit = () => {
    this.site.photos = new Array(this.site.photos);
    let sites = this.db.list("sites");
    sites.push(this.site).then( site => {
      this.site = {};
    })
  }
}
