import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import alertify from "alertifyjs";
class FormDemo2 extends Component {
  state = { email: "", password: "", city: "", description: "" };
  hangleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    alertify.success(this.state.email + "added to db!");
    alertify.success(this.state.city + "added to db!");
    alertify.success(this.state.description + "added to db!");
    alertify.success(this.state.password + "added to db!");
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">email</Label>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="enter e-mail"
              onChange={this.hangleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="password">password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="enter password"
              onChange={this.hangleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="description">description</Label>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="enter description"
              onChange={this.hangleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="city">City</Label>
            <Input
              type="select"
              name="city"
              id="city"
              onChange={this.hangleChange}
            >
              <option>Ankara</option>
              <option>Adana</option>
              <option>Sivas</option>
              <option>Rize</option>
              <option>İstanbul</option>
            </Input>
          </FormGroup>
          <Button type ="submit">Save</Button>
        </Form>
      </div>
    );
  }
}
export default FormDemo2;
