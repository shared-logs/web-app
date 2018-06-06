import React from "react"
import QRCode from "qrcode.react"
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap"
import FontAwesome from "react-fontawesome"
import "../css/Shortcut.css"

export default class Shortcut extends React.Component {
    constructor(props) {
        super(props)
        this.state = { modal: false }
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        const {modal} = this.state
        const {title, subtitle, className} = this.props
        return <div className={className}>
            &nbsp;<Button onClick={this.toggle}><FontAwesome name="qrcode"/></Button>
            <Modal isOpen={modal} toggle={this.toggle} backdropClassName="opaque-background">
                <ModalHeader toggle={this.toggle}>{title}<br/><small>{subtitle}</small></ModalHeader>
                <ModalBody>
                    <div className="text-center">
                        <QRCode value={window.location.href} size={window.innerHeight/2} renderAs="svg"/>
                    </div>
                </ModalBody>
                <ModalFooter>{window.location.href}</ModalFooter>
            </Modal>
        </div>
    }
}