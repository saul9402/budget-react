import './App.css';
import {Container} from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
    return (
        <Container>
            <MainHeader title={'Budget'}/>
            <DisplayBalance title={'Your Balance'} value={'$2,550.00'} size={'small'}/>
            <DisplayBalances/>

            <MainHeader title={'History'} type={'h3'}/>
            <EntryLine title={'Something'} value={'$100.00'} isExpense/>
            <EntryLine title={'Something Else'} value={'$10.00'}/>
            <EntryLine title={'Something Else Again'} value={'$100.00'} isExpense/>
            <MainHeader title={'Add new transaction'} type={'h3'}/>
            <NewEntryForm/>
        </Container>
    );
}

export default App;
