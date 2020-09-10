import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../global-service.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  headersData: { field: string; header: string; }[];
  rowsData: unknown;
  openTransaction: boolean = false
  transactionType: { label: string; value: string; }[];
  airportLists: any = []
  aircraftLists: any = []
  transactionObject: any = {
    transactionType: '',
    airportId: '',
    quantity: '',
    // aircraft : ''
  }

  constructor(private readonly globalServiceService: GlobalServiceService) {
    this.headersData = this.globalServiceService.transactionTableHeader()
    this.transactionType = [
      { label: 'IN', value: 'IN' },
      { label: 'OUT', value: 'OUT' }
    ];
    this.initilizeAirportList()
  }

  ngOnInit() {
    this.globalServiceService.fetchTransaction().subscribe((response) => {
      this.rowsData = response.data
    })
  }

  addTransaction() {
    console.log(this.globalServiceService.airportList)
    this.openTransaction = true

  }

  transactionTypeSelect(event) {
    this.transactionObject['transactionType'] = event.value
    if (event.value === 'OUT') {
      this.transactionObject['aircraftId'] = ''
      this.globalServiceService.fetchAirCraft().subscribe((response) => {
        this.initilizeAircrafList(response)
      })
    }
    else {
      if (this.transactionObject.hasOwnProperty('aircraftId')) {
        delete this.transactionObject['aircraftId']
      }
    }
  }

  airportSelect(event) {
    this.transactionObject['airportId'] = event.value
  }

  aircraftSelect(event) {
    this.transactionObject['aircraftId'] = event.value
  }

  quantityEntered(event) {
    if (event.target.value !== '')
      this.transactionObject['quantity'] = parseInt(event.target.value,10)
  }

  initilizeAirportList() {
    this.globalServiceService.fetchAirport().subscribe((response) => {
      response.forEach((item, index) => {
        let obj = {}
        obj['label'] = item['airportName']
        obj['value'] = item['airportId']
        this.airportLists.push(obj)
      })
    })
  }

  initilizeAircrafList(response) {
    response.forEach((item, index) => {
      let obj = {}
      obj['label'] = item['aircraftNo']
      obj['value'] = item['aircraftId']
      this.aircraftLists.push(obj)
    })
  }

  saveClicked() {
    const payload = { ...this.transactionObject }
    this.globalServiceService.saveTransaction(payload).pipe(concatMap((resp) => {
      this.openTransaction = false
      return this.globalServiceService.fetchTransaction()
    })).
      subscribe((response) => {
        this.rowsData = response.data
      })
  }

  saveButtonStatus() {
    for (let x of Object.keys(this.transactionObject)) {
      if (this.transactionObject[x] === '') {
        return true
      }
    }
    return false

  }

}
