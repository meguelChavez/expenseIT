import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container
} from "reactstrap";
import Select from "react-select";
import DatePicker from "react-datepicker";

const ExpenseForm = props => {
  const options = [{ value: "1", label: "Yes" }, { value: "0", label: "No" }];
  const {
    businessName,
    category,
    amount,
    paid,
    date,
    dueDate,
    edit,
    paidDate
  } = props;
  return (
    <Container>
      <Form>
        <FormGroup row>
          <Col sm="12">
            <Label>Business Name</Label>
            <Input
              type="text"
              name="businessName"
              placeholder="Business Name"
              value={businessName}
              onChange={props.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm="12">
            <Label>Category</Label>
            <Input
              type="text"
              name="category"
              value={category}
              placeholder="Category"
              onChange={props.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm="12" md="6">
            <Label>Amount</Label>
            <Input
              type="text"
              name="amount"
              value={amount}
              onChange={props.handleChange}
              placeholder="Amount"
            />
          </Col>

          <Col sm="12" md="6">
            <Label>Paid</Label>
            <Select
              name="paid"
              value={paid}
              options={options}
              onChange={props.handleSelect}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm="12" md="4">
            <Label>Date</Label>
            <Input name="date" value={date} onChange={props.handleChange} />
            {/* <DatePicker
                            name="date" selected={date} onChange={props.handleDateChange} */}
            {/* /> */}
          </Col>
          <Col sm="12" md="4">
            <Label>Due Date</Label>
            <Input
              name="dueDate"
              value={dueDate}
              onChange={props.handleChange}
            />
            {/* <DatePicker
                            name="dueDate" selected={dueDate} onChange={props.handleDateChange} */}
            {/* /> */}
          </Col>

          <Col sm="12" md="4">
            <Label>Paid Date</Label>
            <Input
              name="paidDate"
              value={paidDate}
              onChange={props.handleChange}
            />
            {/* <DatePicker
                         name="paidDate" selected={paidDate} onChange={props.handleDateChange} /> */}
          </Col>
        </FormGroup>
        {/* <Button onClick={props.addExpenses}>Add</Button> */}
      </Form>
    </Container>
  );
};

export default ExpenseForm;
