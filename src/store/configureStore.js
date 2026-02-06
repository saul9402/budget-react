import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import entriesReducers from "../reducers/entries.reducers";
import modalsReducers from "../reducers/modals.reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import {initSagas} from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const configureStore = () => {
    const store = createStore(combineReducers({
            entries: entriesReducers,
            modals: modalsReducers,
        }),
        composeWithDevTools({trace: true})(applyMiddleware(...middlewares))
    );

    initSagas(sagaMiddleware);
    return store;

}

export default configureStore;
