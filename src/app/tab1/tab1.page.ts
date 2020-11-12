import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  lignes : Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
  infos : Array<object> = [];
  constructor(private as:ApiService) {}

  searchLigne(ligne:any):void{
    //console.log(ligne["value"]);
    let number:number = ligne["value"];
    this.infos = [];
    if(number != 0){
      this.as.getGetOneSubway(number).subscribe((data)=>{
        this.infos.push(data['result']);
      });
    }else{
      this.as.getGetAllSubways().subscribe((data)=>{
        this.infos = data['result']["metros"];
      });
    }
    
  }

}
