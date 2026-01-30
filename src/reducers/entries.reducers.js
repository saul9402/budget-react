const reducer = (state = initialEntries, action) => {
    switch (action.type) {
        case 'ADD_ENTRY':
            return state.concat({...action.payload});
        case 'REMOVE_ENTRY':
            return state.filter(entry => entry.id !== action.payload.id);
        case 'UPDATE_ENTRY': {
            const newEntries = [...state];
            const index = newEntries.findIndex(entry => entry.id === action.payload.id);
            newEntries[index] = {...action.payload.entry};
            return newEntries;
        }
        default:
            break;
    }
    return state
}

const initialEntries = [
    {id: 1, description: 'Something Redux', value: '100.00', isExpense: true},
    {id: 2, description: 'Something Else Redux', value: '1000.00', isExpense: false},
    {id: 3, description: 'Something Else Again Redux', value: '100.00', isExpense: true}
];

export default reducer;