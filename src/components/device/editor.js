import React, {Component} from "react"
import {ControlLabel, Form, FormControl, FormGroup} from "react-bootstrap";
import Device from "../../model/Device";

export default class DeviceEditor extends Component {
    constructor(props) {
        super(props)

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.processSubmit = this.processSubmit.bind(this)
    }

    componentDidMount() {
        this.resetForm()
    }

    resetForm() {
        const device = this.props.device
        if (device) {
            this.setState({
                manufacturer: device.manufacturer,
                model: device.model,
                name: device.name
            })
        } else {
            this.setState({
                manufacturer: "",
                model: "",
                name: ""
            })
        }
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const device = this.props.device
        const params = {
            manufacturer: this.state.manufacturer,
            model: this.state.model,
            name: this.state.name
        }
        if (device) {
            Device.update(device.id, params, device => {
                this.processSubmit(device)
            })
        } else {
            Device.create(params, device => {
                this.processSubmit(device)
            })
        }
    }

    processSubmit(device) {
        if (this.props.processSubmit) {
            this.props.processSubmit(device)
        } else {
            this.setState({ device: device })
        }
        this.resetForm()
    }

    render = () => (
        <Form onSubmit={this.handleSubmit}>
            <FormGroup controlId="manufacturer">
                <ControlLabel>Manufacturer</ControlLabel>
                <FormControl
                    type="text"
                    onChange={this.handleChange}
                />
            </FormGroup>
        </Form>
    )

}