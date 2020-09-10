import { Injectable } from '@angular/core';
import { HttpService } from './shared/http-service';
import * as requestUrl from './shared/request-url'

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {
  airportList: any = []
  constructor(private readonly http: HttpService) {

  }

  // login api called 
  loginFn(payload) {
    return this.http.post(requestUrl.USER.LOGIN, payload)
  }
  airportTableHeader() {
    return ([
      { field: 'airportName', header: 'Airport' },
      { field: 'fuelCapacity', header: 'Fuel Capacity' },
      { field: 'fuelAvailable', header: 'Fuel Available' }
    ])
  }


  // fetching the airports list api called
  fetchAirport() {
    return this.http.get<any>(requestUrl.AIRPORT.LIST)
  }



  // fetching the aircrafts list api called
  fetchAirCraft() {
    return this.http.get<any>(requestUrl.AIRCRAFT.LIST)
  }

  // fetching the transaction lists api called
  fetchTransaction() {
    return this.http.get<any>(requestUrl.TRANSACTION.LIST)
  }


  // save the transaction api called
  saveTransaction(payload) {
    return this.http.post<any>(requestUrl.TRANSACTION.LIST, payload)
  }


  // fetching fuel reports api called
  fetchFuelReport() {
    return this.http.get<any>(requestUrl.TRANSACTION.FUEL_REPORT)
  }


  aircrafttTableHeader() {
    return ([
      { field: 'aircraftNo', header: 'Aircraft' },
      { field: 'airline', header: 'Airline' },
      { field: 'source', header: 'From' },
      { field: 'destination', header: 'To' },
    ])
  }

  transactionTableHeader() {
    return ([
      { field: 'transactionId', header: 'Transaction Id' },
      { field: 'transactionType', header: 'Transaction Type' },
      { field: 'airportName', header: 'Airport' },
      { field: 'aircraftNo', header: 'Aircraft' },
      { field: 'quantity', header: 'Quantity' }
    ])
  }


  fuelReportTableHeader() {
    return ([
      { field: 'dateTime', header: 'Date/time' },
      { field: 'transactionType', header: 'Type' },
      { field: 'quantity', header: 'Fuel' },
      { field: 'aircraftNo', header: 'Aircraft' }
    ])
  }

  saveAirportDetails(payload) {
    return this.http.post<any>(requestUrl.AIRPORT.LIST, payload)
  }

  saveAircraftDetails(payload) {
    return this.http.post<any>(requestUrl.AIRCRAFT.LIST, payload)
  }

  mockAirportData() {
    return [{
      "airportId": 1,
      "airportName": "Indira Gandhi International Airport, Delhi",
      "fuelCapacity": 250000,
      "fuelAvailable": 200000,
    },
    {

      "airportId": 2,
      "airportName": "Rajiv Gandhi International Airport, Hyderabad",
      "fuelCapacity": 250000,
      "fuelAvailable": 10000,
    },
    {

      "airportId": 3,
      "airportName": "Chhatrapati Shivaji International Airport, Mumbai",
      "fuelCapacity": 250000,
      "fuelAvailable": 120000,
    },
    {

      "airportId": 4,
      "airportName": "Chennai International Airport, Chennai",
      "fuelCapacity": 250000,
      "fuelAvailable": 150000,
    },
    {

      "airportId": 5,
      "airportName": "Kempegowda International Airport, Bangalore",
      "fuelCapacity": 250000,
      "fuelAvailable": 150000,
    }
    ]
  }

  mockAircraftData() {
    return [{
      "aircraftId": 1,
      "destination": "Lucknow",
      "source": "Delhi",
      "airline": "Indigo",
      "aircraftNo" : "6E 292"
    },
    {

      "aircraftId": 2,
      "destination": "Pune",
      "source": "Mohali",
      "airline": "GoAir",
      "aircraftNo" : "6E 294"
    },
    {

      "airportId": 3,
      "destination": "Mohali",
      "source": "Bhopal",
      "airline": "SpiceJet",
      "aircraftNo" : "6E 296"
    }
    
    ]
  }
}
