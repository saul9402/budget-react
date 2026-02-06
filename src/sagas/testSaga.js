import {call, cancelled, delay, fork, put, take, takeEvery, takeLatest} from 'redux-saga/effects'

function double(number) {
    return number * 2;
}

export function* testSaga() {
    while (true) {
        console.log("Starting test saga");
        const state = yield take('TEST_MESSAGE'); // Wait for an action of type 'TEST_MESSAGE'
        const a = yield call(double, 2);
        console.log(a)
        const b = yield double(3);
        console.log(b)
        console.log("Finishing test saga", state);
    }
}

function* doNothing() {
    console.log("I have been called");
    yield delay(1000);
    console.log("I'm doing nothing...");
}

export function* testSagaFork() {
    while (true) {
        yield take('TEST_MESSAGE_2');
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({payload}) {
    console.log(`Starting test saga take every for index ${payload}`);
    yield delay(3000);
    console.log(`Ending test saga take every for index ${payload}`);
}

export function* testSagaTakeEvery() {
    const {payload} = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log(`Finishing test saga take every for index ${payload}`);
}

export function* infinitySaga() {
    console.log(`Starting test saga infinity`);
    let index = 0;
    while (true) {
        index++;
        try {
            console.log("Inside infinity saga loop", index);
            yield delay(500);
        } catch (error) {
            console.error("Error in infinity saga:", error);
        } finally {
            console.log(`Fork for index ${index} was cancelled?`, yield cancelled()); // Check if the saga was cancelled
        }
    }
}

// export function* testSagaCancelled() {
//     yield take('TEST_MESSAGE_4');
//     const handleCancel = yield fork(infinitySaga);
//     yield delay(3000);
//     yield cancel(handleCancel);
// }

export function* testSagaTakeLatest() {
    yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

export function* dispatchTest() {
    let index = 0;
    //yield put({type: 'TEST_MESSAGE_5', payload: index}); // Dispatch an action of type 'TEST_MESSAGE' every second
    while (true) {
        yield delay(2000);
        index++;
        yield put({type: 'TEST_MESSAGE_5', payload: index}); // Dispatch an action of type 'TEST_MESSAGE' every second
    }
}