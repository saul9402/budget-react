import React from 'react';
import {Label, Statistic, StatisticValue} from "semantic-ui-react";

const DisplayBalance = ({title, value, color = 'black', size = 'tiny'}) => {
    return <Statistic size={size} color={color}>
        <Label style={{textAlign: 'center'}}> {title} </Label>
        <StatisticValue style={{color: color}}> {value} </StatisticValue>
    </Statistic>
};

export default DisplayBalance;