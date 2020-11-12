import { Component, OnInit } from '@angular/core';
import faker from 'faker';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  infos:Array<Array<string>> = [];
  constructor() {}

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.infos = [];
    this.updateInfos();
  }

  updateInfos():void{
    for(let i = 0;i < 30 ;i++){
      let courant:Array<string> = [];
      courant.push(faker.name.findName());
      courant.push(faker.internet.email());
      courant.push(faker.company.companyName());
      //faker.seed(9);
      courant.push(faker.random.number({
        'min': 100000000,
        'max': 999999999
      }));
      courant.push(faker.lorem.text());
      this.infos.push(courant);
    }
    
  }
  
}
