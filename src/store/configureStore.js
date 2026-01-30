import {applyMiddleware, combineReducers, createStore} from "redux";
import entriesReducers from "../reducers/entries.reducers";
import modalsReducers from "../reducers/modals.reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const configureStore = () => {
    return createStore(combineReducers({
            entries: entriesReducers,
            modals: modalsReducers,
        }),
        composeWithDevTools({trace: true})(applyMiddleware())
    );

}

export default configureStore;
