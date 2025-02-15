import {combineReducers, legacy_createStore} from 'redux'
import reduxData from '../reducer/reduxData'
import hotelsData from '../reducer/hotelsData'
import bookingData from '../reducer/bookingData'
import transactions from '../reducer/transactions'

let rootRedux = combineReducers({reduxData, hotelsData, bookingData, transactions})

let store = legacy_createStore(rootRedux)

export default store