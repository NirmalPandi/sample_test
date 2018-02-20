import {takeEvery} from 'redux-saga';
import {call,put} from 'redux-saga/effects';
import axios from 'axios';


export function* workersaga(action) {
    
    try{
        console.log("Inside worker saga");
        const response = yield call(axios.get, 'https://restcountries.eu/rest/v2/region/asia');
        const data=response.data ;
        

        yield put({type: 'SUCCESS_API',payload: data})
    }
    catch(e){
        console.log("error found");
    }
  }


export function* watchsaga() {
    yield takeEvery('REQUEST_API', workersaga)
  }


export default function* rootSaga() {
    yield [
      watchsaga()
    ]
  }