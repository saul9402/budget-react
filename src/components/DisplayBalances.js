import React from 'react';
import DisplayBalance from "./DisplayBalance";
import {Grid, GridColumn, GridRow, Segment} from "semantic-ui-react";

const DisplayBalances = () => {
    return (
        <Segment style={{textAlign: 'center'}}>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <DisplayBalance title={'Income:'} value={'$1,200.00'} color={'green'}/>
                    </GridColumn>
                    <GridColumn>
                        <DisplayBalance title={'Expenses:'} value={'$623.50'} color={'red'}/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
    );
};

export default DisplayBalances;