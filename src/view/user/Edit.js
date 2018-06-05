import React from "react"
import User from "../../model/User";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";

export default class Edit extends React.Component {
    static get SUBMIT() {
        return "submit_user"
    }

    static get VALIDATE() {
        return "validate_user"
    }

    render() {
        const {user, handlers, validators, feedback} = this.props
        return <Form onSubmit={handlers[Edit.SUBMIT]}>
            <FormGroup>
                <Label>{User.SCREEN_NAME}</Label>
                <Input type="text" id={User.SCREEN_NAME} value={user[User.SCREEN_NAME]} onChange={handlers[User.SCREEN_NAME]} {...validators[User.SCREEN_NAME]()}/>
                <FormFeedback>{feedback[User.SCREEN_NAME]}</FormFeedback>
            </FormGroup>
            <FormGroup>
                <Label>{User.FIRST_NAME}</Label>
                <Input type="text" id={User.FIRST_NAME} value={user[User.FIRST_NAME]} onChange={handlers[User.FIRST_NAME]}/>
            </FormGroup>
            <FormGroup>
                <Label>{User.LAST_NAME}</Label>
                <Input type="text" id={User.LAST_NAME} value={user[User.LAST_NAME]} onChange={handlers[User.LAST_NAME]}/>
            </FormGroup>
            <FormGroup>
                <Label>{User.EMAIL}</Label>
                <Input type="text" id={User.EMAIL} value={user[User.EMAIL]} onChange={handlers[User.EMAIL]}/>
            </FormGroup>
            <Button color="primary" type="submit" {...validators[Edit.VALIDATE]}>Save</Button>
        </Form>
    }
}