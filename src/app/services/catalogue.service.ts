import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trajet } from '../model/trajet.model';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  public host:string="http://localhost:8080";

  constructor(private httpClient:HttpClient) { }

  public getTrajets(page:number,size:number){
    return this.httpClient.get(this.host+"/trajets?page="+page+"&size="+size);
  }

  public getTrajetsByKeywordArrive(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/trajets/search/byLieuArrivePage?mc="+mc+"&page="+page+"&size="+size);
  }
  public getTrajetsByKeywordDepart(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/trajets/search/byLieuDepartPage?mc="+mc+"&page="+page+"&size="+size);
  }
  public getTrajetsByKeywordDate(mc:string,page:number,size:number){
    return this.httpClient.get(this.host+"/trajets/search/byDatePage?mc="+mc+"&page="+page+"&size="+size);
  }
  public deleteTrajetRessource(url){
    return this.httpClient.delete(url);
  }
  public addTrajetRessource(url,data):Observable<Trajet>{
    return this.httpClient.post<Trajet>(url,data);
  }
  public getRessources(url):Observable<Trajet>{
    return this.httpClient.get<Trajet>(url);
  }
  public updateTrajetRessource(url,data){
    return this.httpClient.put<Trajet>(url,data);
  }

  //partie user
  public addUserRessource(url,data):Observable<User>{
    return this.httpClient.post<User>(url,data)
  }

}
