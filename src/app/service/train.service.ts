import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http:HttpClient) { }
  
  getAllStation(){
    
    return this.http.get("http://localhost/my-api/index.php");
  }
}
