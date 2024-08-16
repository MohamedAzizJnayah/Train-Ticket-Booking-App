import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { IStation } from '../../model/train';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public trainServ:TrainService, public router:Router){}
  stationList:IStation[]=[];
  fromStation=0;
  toStation=0;
  date='';
  valide=true;
  inValide='';
  ngOnInit(): void {
    this.loadAllStation();
  }
  
  loadAllStation(){
    
    this.trainServ.getAllStation().subscribe( (res: any) => {
      // Traiter les données reçues
      this.stationList=res;
      console.log(this.stationList)
},(error) => {
  // Gérer les erreurs
  console.error('Erreur lors de la récupération des stations', error);
});;
    console.log(this.stationList)
  }
  Search(){
    if (this.fromStation==0 || this.toStation==0 || this.date==''){
      this.valide=false;
      this.inValide=' Select your Journey Details !!'
      
    }
    else{
      if (this.fromStation==this.toStation){
        this.valide=false;
        this.inValide="From n To station Can't be the same !!"
      } else{
        this.valide=true;
        this.router.navigate(['/search' ,this.fromStation,this.toStation,this.date]);
        
      }
      
    }
  }

}
