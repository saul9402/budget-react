import React, {useState} from 'react';
import {Checkbox, Form, FormGroup, FormInput, Segment} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = ({addEntry}) => {

    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const [isExpense, setIsExpense] = useState(false);

    return (
        <Form unstackable>
            <FormGroup>
                <FormInput icon='tags'
                           placeholder='New shinny thing'
                           label="Description"
                           width={12}
                           value={description}
                           onChange={(e) => setDescription(e.target.value)}/>
                <FormInput icon='dollar'
                           placeholder='100.00'
                           label="Value"
                           width={4}
                           iconPosition={'left'}
                           value={value}
                           onChange={(e) => setValue(e.target.value)}/>
            </FormGroup>
            <Segment compact>
                <Checkbox
                    label="Is expense"
                    toggle
                    checked={isExpense}
                    onChange={() => setIsExpense((oldState) => !oldState)}/>
            </Segment>
            <ButtonSaveOrCancel addEntry={addEntry} description={description} value={value} isExpense={isExpense}/>
        </Form>
    );
};

export default NewEntryForm;