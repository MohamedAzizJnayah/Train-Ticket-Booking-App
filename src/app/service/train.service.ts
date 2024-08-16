import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }
  
  getAllStation(){
    
    return this.http.get("http://localhost/my-api/index.php")
  }
  getSearchPage(fromStation:number,toStation:number,date:string){
    return this.http.get("http://localhost:4209/search/"+fromStation+"/"+toStation+"/"+date);
  }
}
