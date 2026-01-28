import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import {useState} from "react";
import EntryLines from "./components/EntryLines";

function App() {
    const [entries, setEntries] = useState(initialEntries);

    function deleteEntry(id) {
        const result = entries.filter(entry => entry.id !== id);
        setEntries(result);
    }

    function addEntry(description, value, isExpense) {
        const result = entries.concat({id: Math.random(), description, value, isExpense});
        setEntries(result);
    }

    return (
        <Container>
            <MainHeader title={'Budget'}/>
            <DisplayBalance title={'Your Balance'} value={'$2,550.00'} size={'small'}/>
            <DisplayBalances/>
            <MainHeader title={'History'} type={'h3'}/>
            <EntryLines entries={entries} deleteEntry={deleteEntry}/>
            <MainHeader title={'Add new transaction'} type={'h3'}/>
            <NewEntryForm addEntry={addEntry}/>
        </Container>
    );
}

const initialEntries = [
    {id: 1, description: 'Something', value: '$100.00', isExpense: true},
    {id: 2, description: 'Something Else', value: '$10.00', isExpense: false},
    {id: 3, description: 'Something Else Again', value: '$100.00', isExpense: true},
]
export default App;
