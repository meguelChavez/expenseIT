import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";

const SignIn = props => {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="Email"
        />
      </FormGroup>{" "}
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="Password"
        />
      </FormGroup>{" "}
      <div className="d-flex justify-content-end">
        <Link to="/auth/google">
          <Button onClick={props.googleAuth}>Submit</Button>\
        </Link>
      </div>
    </Form>
  );
};

export default SignIn;
