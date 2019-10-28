import React, { Component } from "react";
import axios from "axios";
import ExpenseForm from "../Forms/ExpenseForm";
import ExpenseModal from "../Expenses/ExpenseModal";
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import ReactTable from "react-table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faPlus } from "@fortawesome/free-solid-svg-icons";

class Expenses extends Component {
  state = {
    addExpense: {},
    expenses: [],
    columns: [],
    expenseModal: false,
    updating: false
  };

  componentDidMount() {
    this.createColumns();
    this.setState({ expenses: this.props.user.expenses });
  }
  addExpenses = () => {
    const { addExpense } = this.state;
    const payload = addExpense;
    console.log(payload);

    axios.post("/dashboard/add_expense", payload).then(res => {
      console.log(res);
      this.setState({});
      this.getExpenses({ addExpense: {} });
    });
  };

  getExpenses = () => {
    console.log("Get");
    axios.get("/dashboard/expenses").then(res => {
      console.log("gettin");
      console.log(res);
      const user = res.data[0];
      if (user) {
        const { expenses } = res.data[0];
        this.setState({ expenses, updating: true }, () => {
          this.setState({ updating: false });
        });
      }
    });
  };

  updateExpense = () => {
    const { addExpense, selected } = this.state;
    console.log("updating");
    const payload = { ...addExpense, expenseId: selected._id };
    console.log(payload);
    axios.post("/dashboard/update_expense", payload).then(res => {
      console.log(res);
      //   this.getExpenses();
    });
  };

  deleteExpense = () => {
    const { selected } = this.state;
    const payload = { expenseId: selected._id };
    console.log(payload);
    axios.put("/dashboard/delete_expense", payload).then(res => {
      console.log(res);
      this.getExpenses();
    });
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log("handle");
    const { addExpense } = this.state;
    const selected = this.state.selected || {};
    addExpense[name] = value;
    selected[name] = value;
    this.setState({ selected, [name]: value, addExpense });
  };

  // handleDateChange = (date, a, b) => {
  //     console.log(date)
  //     console.log(a)
  //     console.log(b)
  // }

  handleSelect = (chosenOption, action) => {
    const { name } = action;
    const { addExpense } = this.state;
    addExpense[name] = chosenOption.value;
    this.setState({ [name]: chosenOption, addExpense });
  };

  toggleModal = () => {
    const { expenseModal } = this.state;
    if (expenseModal) {
      this.setState({ edit: false });
    } else {
      this.setState({
        selected: {},
        businessName: null,
        category: null,
        amount: null,
        paid: null,
        date: null,
        dueDate: null,
        paidDate: null,
        edit: false
      });
    }
    this.setState({ expenseModal: !expenseModal });
  };

  createColumns = () => {
    const columns = [
      {
        Header: "Business Name",
        accessor: "businessName" // String-based value accessors!
      },
      {
        Header: "Category",
        accessor: "category" // String-based value accessors!
      },
      {
        Header: "Amount",
        accessor: "amount" // String-based value accessors!
      },
      {
        Header: "Paid",
        accessor: "paid" // String-based value accessors!
      },
      {
        Header: "Date",
        accessor: "date" // String-based value accessors!
      },
      {
        Header: "Due Date",
        accessor: "dueDate" // String-based value accessors!
      },
      {
        Header: "Paid Date",
        accessor: "paidDate" // String-based value accessors!
      }
    ];
    this.setState({ columns });

    //   {
    //     Header: 'Category',
    //     accessor: 'category',
    //     Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    //   }, {
    //     id: 'friendName', // Required because our accessor is not a string
    //     Header: 'Friend Name',
    //     accessor: d => d.friend.name // Custom value accessors!
    //   }, {
    //     Header: props => <span>Friend Age</span>, // Custom header components!
    //     accessor: 'friend.age'
    //   }]
  };

  render() {
    const {
      columns,
      expenses,
      expenseModal,
      businessName,
      category,
      amount,
      paid,
      date,
      edit,
      dueDate,
      paidDate,
      updating
    } = this.state;
    return (
      <Container className="pt-5">
        {/* <ExpenseForm
          businessName={businessName}
          category={category}
          amount={amount}
          paid={paid}
          date={date}
          dueDate={dueDate}
          paidDate={paidDate}
          addExpenses={this.addExpenses}
          handleSelect={this.handleSelect}
          handleDateChange={this.handleDateChange}
          handleChange={this.handleChange}
        /> */}
        <Button onClick={this.toggleModal}>
          {`Add Expense `}
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        {updating ? null : (
          <ReactTable
            data={expenses}
            columns={columns}
            default={10}
            getTrProps={(state, rowInfo, column) => {
              console.log(rowInfo);
              return {
                //   style: {
                //     background: rowInfo.row.age > 20 ? "green" : "red"
                //   },
                onClick: e => {
                  this.toggleModal();
                  this.setState({
                    selected: rowInfo.original,
                    businessName: rowInfo.original.businessName || null,
                    category: rowInfo.original.category || null,
                    amount: rowInfo.original.amount || null,
                    paid: rowInfo.original.paid || null,
                    date: rowInfo.original.date || null,
                    dueDate: rowInfo.original.dueDate || null,
                    paidDate: rowInfo.original.paidDate || null,
                    edit: true,
                    addExpense: {
                      businessName: rowInfo.original.businessName || null,
                      category: rowInfo.original.category || null,
                      amount: rowInfo.original.amount || null,
                      paid: rowInfo.original.paid || null,
                      date: rowInfo.original.date || null,
                      dueDate: rowInfo.original.dueDate || null,
                      paidDate: rowInfo.original.paidDate || null
                    }
                  });
                }
              };
            }}
          />
        )}
        <ExpenseModal
          toggleModal={this.toggleModal}
          addExpenses={this.addExpenses}
          edit={edit}
          modal={expenseModal}
          deleteExpense={this.deleteExpense}
          addExpenses={this.addExpenses}
          updateExpense={this.updateExpense}
        >
          <ExpenseForm
            businessName={businessName}
            category={category}
            amount={amount}
            paid={paid}
            date={date}
            dueDate={dueDate}
            paidDate={paidDate}
            expense={this.state.selected}
            edit={edit}
            handleSelect={this.handleSelect}
            updateExpense={this.updateExpense}
            handleDateChange={this.handleDateChange}
            handleChange={this.handleChange}
          />
        </ExpenseModal>
      </Container>
    );
  }
}

export default Expenses;
