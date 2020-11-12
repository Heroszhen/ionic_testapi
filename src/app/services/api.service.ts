import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getGetOneSubway(ligne:number){
    return this.http.get("https://api-ratp.pierre-grimaud.fr/v4/traffic/metros/" + ligne);
  }
  getGetAllSubways(){
    return this.http.get("https://api-ratp.pierre-grimaud.fr/v4/traffic/metros");
  }

  getGetOneTramway(ligne:string){
    return this.http.get("https://api-ratp.pierre-grimaud.fr/v4/traffic/tramways/" + ligne);
  }
  getGetAllTramways(){
    return this.http.get("https://api-ratp.pierre-grimaud.fr/v4/traffic/tramways");
  }
  getGetFetes(data:object){
    return this.http.get("https://calendrier.api.gouv.fr/jours-feries/"+data["zone"]+"/"+data["year"]+".json");
  }
}
