import { Component, OnInit } from '@angular/core';
import { TrainService } from '../../service/train.service';
import { IStation } from '../../model/train';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(public trainServ:TrainService){}
  stationList:IStation[]=[];
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
});
  }

}
