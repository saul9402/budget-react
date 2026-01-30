import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Segment} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {removeEntryRedux} from "../actions/entries.actions";
import {openEditModal} from "../actions/modals.actions";

const EntryLine = ({id, description, value, isExpense = false}) => {

    const dispatch = useDispatch();

    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} style={{textAlign: 'center'}}>
                    <GridRow>
                        <GridColumn wide={10} style={{textAlign: "left"}}> {description} </GridColumn>
                        <GridColumn wide={3} style={{textAlign: "right"}}> {value} </GridColumn>
                        <GridColumn wide={3}>
                            <Icon name="edit"
                                  bordered={true}
                                  onClick={() => dispatch(openEditModal(id))}/>
                            <Icon name="trash" onClick={() => dispatch(removeEntryRedux(id))}/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
        </>
    )
        ;
};

export default EntryLine;