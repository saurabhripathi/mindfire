import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss']
})
export class AircraftComponent implements OnInit {
  headersData: { field: string; header: string; }[];
  rowsData: unknown;

  constructor(private readonly globalServiceService:  GlobalServiceService) { 
    this.headersData=this.globalServiceService.aircrafttTableHeader()
  }

  ngOnInit() {
    this.globalServiceService.fetchAirCraft().subscribe((response)=>{
      this.rowsData = response
      
    })

  }

}
