import {call, fork, put, take} from 'redux-saga/effects'
import entryTypes, {populateEntries, populateEntryDetails} from "../actions/entries.actions";
import axios from "axios";

export function* getAllEntries() {
    console.log("Waiting for GET_ENTRIES action...");
    yield take(entryTypes.GET_ENTRIES);
    console.log("Fetching all entries...");
    const result = yield call(axios, 'http://localhost:3001/entries');
    console.log(result);
    //yield put({type: entriesTypes.POPULATE_ENTRIES, payload: result.data}); // Without action creator
    yield put(populateEntries(result.data)); // Using action creator
}

export function* getEntryDetails(id) {
    console.log(`Fetching details for entry ID: ${id}...`);
    const {data} = yield call(axios, `http://localhost:3001/values/${id}`);
    console.log("Fetching details for entry ID:", data);
    yield put(populateEntryDetails(data.id, data));
}

export function* getAllEntriesDetails() {
    const {payload} = yield take(entryTypes.POPULATE_ENTRIES);
    //payload.map((entry) => yield fork(getEntryDetails, entry.id)); //Not allowed
    for (let i = 0; i < payload.length; i++) {
        const entry = payload[i];
        yield fork(getEntryDetails, entry.id);
    }
}