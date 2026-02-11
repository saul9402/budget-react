import {call, put, take} from 'redux-saga/effects';
import entryTypes, {removeEntryResult} from '../actions/entries.actions';
import axios from "axios";

export function* deleteEntrySaga() {
    while (true) {
        const {payload} = yield take(entryTypes.REMOVE_ENTRY);
        yield call(deleteEntry, payload.id);
        yield put(removeEntryResult(payload.id)); // Update the store after deletion
    }
}

async function deleteEntry(id) {
    await axios.delete(`http://localhost:3001/entries/${id}`);
    await axios.delete(`http://localhost:3001/values/${id}`);
}