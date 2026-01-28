import React from 'react';
import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import EntryForm from "./EntryForm";

const ModalEdit = ({
                       isOpen,
                       setIsOpen,
                       description,
                       value,
                       isExpense,
                       setDescription,
                       setValue,
                       setIsExpense
                   }) => {
    return (
        <Modal open={isOpen}>
            <ModalHeader> Edit entry </ModalHeader>
            <ModalContent>
                <EntryForm description={description}
                           value={value}
                           isExpense={isExpense}
                           setDescription={setDescription}
                           setValue={setValue}
                           setIsExpense={setIsExpense}/>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button primary onClick={() => setIsOpen(false)}>Ok</Button>
            </ModalActions>
        </Modal>
    );
};

export default ModalEdit;