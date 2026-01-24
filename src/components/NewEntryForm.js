import React from 'react';
import {Form, FormGroup, FormInput} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

const NewEntryForm = () => {
    return (
        <Form unstackable>
            <FormGroup>
                <FormInput icon='tags' placeholder='New shinny thing' label="Description" width={12}/>
                <FormInput icon='dollar' placeholder='100.00' label="Value" width={4} iconPosition={'left'}/>
            </FormGroup>
            <ButtonSaveOrCancel/>
        </Form>
    );
};

export default NewEntryForm;