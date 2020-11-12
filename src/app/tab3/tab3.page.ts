import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  twochoices = {
    year:-1,
    zone:""
  };
  
  years:Array<number> = [];
  zones:Array<string> = ["alsace-moselle","guadeloupe","guyane","la-reunion","martinique","mayotte","metropole","nouvelle-caledonie","polynesie-francaise","saint-barthelemy","saint-martin","saint-pierre-et-miquelon","wallis-et-futuna"];
  infos:Array<Array<string>> = [];
  constructor(private as:ApiService) {}

  ionViewWillEnter():void{
    this.years = [];
    for(let i = 2000;i < 2026;i++)this.years.push(i);
    this.twochoices["year"] = -1;
    this.twochoices["zone"] = "";
    this.infos = [];
  }

  search():void{
    if(this.twochoices["year"] != -1 && this.twochoices["zone"] != ""){
      this.infos = [];
      this.as.getGetFetes(this.twochoices).subscribe((data)=>{
        for(let i in data){
          let courant:Array<string> = [];
          courant.push(i);
          courant.push(data[i]);
          this.infos.push(courant);
        }
      });
    }
  }
}
