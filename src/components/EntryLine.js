import React from 'react';
import {Grid, GridColumn, GridRow, Icon, Segment} from "semantic-ui-react";

const EntryLine = ({title, value, isExpense = false}) => {
    return (

        <Segment color={isExpense ? 'red' : 'green'}>
            <Grid columns={3} style={{textAlign: 'center'}}>
                <GridRow>
                    <GridColumn wide={10} style={{textAlign: "left"}}> {title} </GridColumn>
                    <GridColumn wide={3} style={{textAlign: "right"}}> {value} </GridColumn>
                    <GridColumn wide={3}>
                        <Icon name="edit"/>
                        <Icon name="trash"/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>

    );
};

export default EntryLine;