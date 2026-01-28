import React from 'react';
import DisplayBalance from "./DisplayBalance";
import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";

const DisplayBalances = ({incomeTotal, expenseTotal}) => {
    return (
        <Segment style={{textAlign: 'center'}}>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <DisplayBalance title={'Income:'} value={incomeTotal} color={'green'}/>
                    </GridColumn>
                    <GridColumn>
                        <DisplayBalance title={'Expenses:'} value={expenseTotal} color={'red'}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    );
};

export default DisplayBalances;