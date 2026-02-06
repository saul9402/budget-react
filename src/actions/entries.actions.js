const types = {
    GET_ENTRIES: 'GET_ENTRIES',
    POPULATE_ENTRIES: 'POPULATE_ENTRIES',
    POPULATE_ENTRY_DETAILS: 'POPULATE_ENTRY_DETAILS',
    ADD_ENTRY: 'ADD_ENTRY',
    REMOVE_ENTRY: 'REMOVE_ENTRY',
    UPDATE_ENTRY: 'UPDATE_ENTRY'
}

export default types;

export const addEntryRedux = (payload) => ({type: types.ADD_ENTRY, payload});

export const removeEntryRedux = (id) => ({type: types.REMOVE_ENTRY, payload: {id}});

export const updateEntryRedux = (id, entry) => ({type: types.UPDATE_ENTRY, payload: {id, entry}});

export const getAllEntries = () => ({type: types.GET_ENTRIES});

export const populateEntries = (entries) => ({type: types.POPULATE_ENTRIES, payload: entries});

export const populateEntryDetails = (id, entry) => ({type: types.POPULATE_ENTRY_DETAILS, payload: {id, entry}});
