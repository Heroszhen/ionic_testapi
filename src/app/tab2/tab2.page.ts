import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  lines:Array<string> = ["toutes","1","2","3A","3B","4","5","6","7","8"];
  infos:Array<object> = [];
  constructor(private as:ApiService) {}

  ngOnInit():void{
  }

  ionViewWillEnter():void{
    this.infos = [];
  }

  searchLigne(line:any):void{
    this.infos = [];
    if(line["value"] == this.lines[0]){
      this.as.getGetAllTramways().subscribe((data)=>{
        this.infos = data["result"]["tramways"];
      });
    }else{
      this.as.getGetOneTramway(line["value"]).subscribe((data)=>{
        this.infos.push(data["result"]);
      });
    }
  }


}
