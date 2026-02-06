//import * as testSaga from './testSaga.js';

import * as entriesSaga from './entriesSaga.js';

export function initSagas(sagaMiddleware) {
    //Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
    Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
}