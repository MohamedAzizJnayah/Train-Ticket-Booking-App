import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { error } from 'console';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
constructor(public activatedRoute:ActivatedRoute){}
parm:any;
ngOnInit(): void {
    this.activatedRoute.params.subscribe((res:any)=>{
      this.parm=res;
      console.log(this.parm)
    },
  (error)=>{
    console.log("Error lors parms search component")
  })
}
}
