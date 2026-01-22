import './App.css';
import {
    Button, ButtonGroup, ButtonOr,
    Container,
    Form, FormGroup,
    FormInput,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Icon,
    Label,
    Segment,
    Statistic,
    StatisticLabel,
    StatisticValue
} from "semantic-ui-react";

function App() {
    return (<Container>
        <Header as="h1"> Budget </Header>
        <Statistic size="small">
            <StatisticLabel> Your Balance: </StatisticLabel>
            <StatisticValue> $2,550.53 </StatisticValue>
        </Statistic>

        <Segment style={{textAlign: 'center'}}>
            <Grid columns={2} divided>
                <GridRow>
                    <GridColumn>
                        <Statistic size="tiny" color="green">
                            <Label style={{textAlign: 'center'}}> Income: </Label>
                            <StatisticValue style={{color: 'green'}}> $1,200.00 </StatisticValue>
                        </Statistic>
                    </GridColumn>
                    <GridColumn>
                        <Statistic size="tiny" color={'red'}>
                            <Label style={{textAlign: 'center'}}> Expenses: </Label>
                            <StatisticValue> $623.50 </StatisticValue>
                        </Statistic>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
        <Header as="h3"> History </Header>
        <Segment color="red">
            <Grid columns={3} style={{textAlign: 'center'}}>
                <GridRow>
                    <GridColumn wide={10} style={{textAlign: "left"}}> Something </GridColumn>
                    <GridColumn wide={3} style={{textAlign: "right"}}> $10.00 </GridColumn>
                    <GridColumn wide={3}>
                        <Icon name="edit"/>
                        <Icon name="trash"/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
        <Segment color="green">
            <Grid columns={3} style={{textAlign: 'center'}}>
                <GridRow>
                    <GridColumn wide={10} style={{textAlign: "left"}}> Something Else </GridColumn>
                    <GridColumn wide={3} style={{textAlign: "right"}}> $100.00 </GridColumn>
                    <GridColumn wide={3}>
                        <Icon name="edit"/>
                        <Icon name="trash"/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>
        <Segment color="red">
            <Grid columns={3} style={{textAlign: 'center'}}>
                <GridRow>
                    <GridColumn wide={10} style={{textAlign: "left"}}> Something </GridColumn>
                    <GridColumn wide={3} style={{textAlign: "right"}}> $10.00 </GridColumn>
                    <GridColumn wide={3}>
                        <Icon name="edit"/>
                        <Icon name="trash"/>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Segment>

        <Header as="h3"> Add New Transaction </Header>
        <Form unstackable>
            <FormGroup>
                <FormInput icon='tags' placeholder='New shinny thing' label="Description" width={12}/>
                <FormInput icon='dollar' placeholder='100.00' label="Value" width={4} iconPosition={'left'}/>
            </FormGroup>
            <ButtonGroup style={{marginTop: 20}}>
                <Button> Cancel </Button>
                <ButtonOr/>
                <Button primary> Ok </Button>
            </ButtonGroup>
        </Form>
    </Container>);
}

export default App;
