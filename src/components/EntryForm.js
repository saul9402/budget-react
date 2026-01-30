import React from 'react';
import {Checkbox, Container, FormGroup, FormInput, Segment} from "semantic-ui-react";

const EntryForm = ({description, value, isExpense, setDescription, setValue, setIsExpense}) => {

    return (
        <Container>
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
        </Container>
    );
};

export default EntryForm;
