import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import ExpenseForm from "../Forms/ExpenseForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faTrash } from "@fortawesome/free-solid-svg-icons";

const ExpenseModal = props => {
  const { buttonLabel, className, modal } = props;

  return (
    <div>
      <Modal isOpen={modal} toggle={props.toggleModal} className={className}>
        <ModalHeader toggle={props.toggleModal}> Expense Form</ModalHeader>
        {props.children}
        <ModalFooter>
          <Button
            onClick={() => {
              props.deleteExpense();
              props.toggleModal();
            }}
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button
            color="primary"
            name="save"
            onClick={e => {
              if (props.edit) {
                props.updateExpense();
              } else {
                props.addExpenses();
              }
              props.toggleModal();
            }}
          >
            Submit
          </Button>{" "}
          <Button color="secondary" name="cancel" onClick={props.toggleModal}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ExpenseModal;
