import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({id, description, value, isExpense = false, deleteEntry, editEntry}) => {

    return (
        <>
            <Segment color={isExpense ? 'red' : 'green'}>
                <Grid columns={3} style={{textAlign: 'center'}}>
                    <GridRow>
                        <GridColumn wide={10} style={{textAlign: "left"}}> {description} </GridColumn>
                        <GridColumn wide={3} style={{textAlign: "right"}}> {value} </GridColumn>
                        <GridColumn wide={3}>
                            <Icon name="edit" onClick={() => editEntry(id, description, value, isExpense)}/>
                            <Icon name="trash" onClick={() => deleteEntry(id)}/>
                        </GridColumn>
                    </GridRow>
                </Grid>
            </Segment>
        </>
    )
        ;
};

export default EntryLine;