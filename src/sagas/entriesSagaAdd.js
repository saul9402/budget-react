import {call, put, takeLatest} from 'redux-saga/effects';
import entryTypes, {addEntryResult} from '../actions/entries.actions';
import axios from "axios";

export function* addEntrySaga() {
    yield takeLatest(entryTypes.ADD_ENTRY, addEntryToDb)
}

function* addEntryToDb({payload}) {

    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
    yield put(addEntryResult(payload)); // Update the store after addition

}


function addEntry({id, description}) {
    return axios.post('http://localhost:3001/entries', {
        id,
        description
    });

}

function addEntryDetails({id, isExpense, value}) {
    return axios.post('http://localhost:3001/values', {
        id,
        isExpense,
        value
    });
}