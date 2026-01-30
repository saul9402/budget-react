import React from 'react';
import {Button, Modal, ModalActions, ModalContent, ModalHeader} from "semantic-ui-react";
import EntryForm from "./EntryForm";
import {useDispatch, useSelector} from "react-redux";
import {closeEditModal} from "../actions/modals.actions";
import useEntryDetails from "../hooks/useEntryDetails";

const ModalEdit = ({
                       id,
                       description,
                       value,
                       isExpense
                   }) => {


    const dispatch = useDispatch();
    const entryUpdate = useEntryDetails(description, value, isExpense);
    const isOpen = useSelector(state => state.modals.isOpen);

    return (
        <Modal open={isOpen}>
            <ModalHeader> Edit entry </ModalHeader>
            <ModalContent>
                <EntryForm description={entryUpdate.description}
                           value={entryUpdate.value}
                           isExpense={entryUpdate.isExpense}
                           setDescription={entryUpdate.setDescription}
                           setValue={entryUpdate.setValue}
                           setIsExpense={entryUpdate.setIsExpense}/>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => dispatch(closeEditModal())}>Close</Button>
                <Button primary onClick={() => entryUpdate.updateEntry(id)}>Ok</Button>
            </ModalActions>
        </Modal>
    );
};

export default ModalEdit;