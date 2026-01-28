import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import {useEffect, useState} from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

const initialEntries = [
    {id: 1, description: 'Something', value: '100.00', isExpense: true},
    {id: 2, description: 'Something Else', value: '10.00', isExpense: false},
    {id: 3, description: 'Something Else Again', value: '100.00', isExpense: true}
];

function App() {
    const [entries, setEntries] = useState(initialEntries);

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    const [isOpen, setIsOpen] = useState(false);
    const [entryId, setEntryId] = useState(null);

    const [incomeTotal, setIncomeTotal] = useState(0);
    const [expenseTotal, setExpenseTotal] = useState(0);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        let totalIncome = 0;
        let totalExpenses = 0;
        entries.map(entry => {

            if (entry.isExpense) {
                return totalExpenses += Number(entry.value);
            }
            return totalIncome += Number(entry.value);
        })
        setIncomeTotal(totalIncome);
        setExpenseTotal(totalExpenses);
        setTotal(totalIncome - totalExpenses);
    }, [entries]);


    useEffect(() => {
        if (!isOpen && entryId) {
            const index = entries.findIndex(entry => entry.id === entryId);
            const newEntries = [...entries]
            newEntries[index].description = description;
            newEntries[index].value = value;
            newEntries[index].isExpense = isExpense;
            setEntries(newEntries);
            resetEntry();
        }
    }, [isOpen])

    function deleteEntry(id) {
        const result = entries.filter(entry => entry.id !== id);
        setEntries(result);
    }

    function addEntry() {
        const result = entries.concat({id: Math.random(), description, value, isExpense});
        setEntries(result);
        resetEntry();
    }

    function editEntry(id) {
        if (id) {
            const index = entries.findIndex(entry => entry.id === id);
            const entry = entries[index];
            setEntryId(id);
            setDescription(entry.description);
            setValue(entry.value);
            setIsExpense(entry.isExpense);
            setIsOpen(true);
        }
    }

    function resetEntry() {
        setDescription('');
        setValue('');
        setIsExpense(false);
    }

    return (
        <Container>
            <MainHeader title={'Budget'}/>
            <DisplayBalance title={'Your Balance'}
                            value={total}
                            size={'small'}/>
            <DisplayBalances incomeTotal={incomeTotal}
                             expenseTotal={expenseTotal}/>
            <MainHeader title={'History'} type={'h3'}/>
            <EntryLines entries={entries}
                        deleteEntry={deleteEntry}
                        editEntry={editEntry}
                        setIsOpen={setIsOpen}/>
            <MainHeader title={'Add new transaction'} type={'h3'}/>
            <NewEntryForm addEntry={addEntry}
                          description={description}
                          value={value}
                          isExpense={isExpense}
                          setDescription={setDescription}
                          setValue={setValue}
                          setIsExpense={setIsExpense}/>
            <ModalEdit isOpen={isOpen}
                       setIsOpen={setIsOpen}
                       description={description}
                       value={value}
                       isExpense={isExpense}
                       setDescription={setDescription}
                       setValue={setValue}
                       setIsExpense={setIsExpense}/>
        </Container>
    );
}

export default App;
