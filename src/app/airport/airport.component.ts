import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import * as requestUrl from '../shared/request-url'

@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.scss']
})
export class AirportComponent implements OnInit {
  headersData: { field: string; header: string; }[];
  rowsData: any;

  constructor(private readonly globalServiceService:  GlobalServiceService) { 
    this.headersData=this.globalServiceService.airportTableHeader()
  }

  ngOnInit() {
    this.globalServiceService.fetchAirport().subscribe((response)=>{
      this.rowsData = response
      this.globalServiceService.airportList = response
      
    })
  }

}
