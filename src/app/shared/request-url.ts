import { environment } from 'src/environments/environment'

export const USER={
        LOGIN : environment.baseUrlMaster+'/v1/login',
}

export const AIRPORT={
    LIST : environment.baseUrlMaster+'/v1/airport-list',
}

export const AIRCRAFT={
    LIST : environment.baseUrlMaster+'/v1/aircraft-list',
}

export const TRANSACTION={
    LIST : environment.baseUrlMaster+'/v1/transaction-list',
    FUEL_REPORT : environment.baseUrlMaster+'/v1/fuel-report'
}



