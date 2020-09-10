import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';


@Component({
  selector: 'app-fuel-report',
  templateUrl: './fuel-report.component.html',
  styleUrls: ['./fuel-report.component.scss']
})
export class FuelReportComponent implements OnInit {
  report: any;
  headersData: { field: string; header: string; }[];

  constructor(private readonly globalServiceService:  GlobalServiceService) {
    this.headersData = this.globalServiceService.fuelReportTableHeader()
   }

  ngOnInit() {
    this.globalServiceService.fetchFuelReport().
    subscribe((response)=>{
      for(let x of response.data){
        for(let y of x.transactions){
          let date = y.createdAt.split('T')[0]
          let time = y.createdAt.split('T')[1].split('.')[0]
          y['dateTime'] = date+"  "+time
        }
      }
      this.report=response.data
    })
  }

}
