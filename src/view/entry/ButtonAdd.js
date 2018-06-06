import React from "react"
import FontAwesome from "react-fontawesome"
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

export default class ButtonAdd extends React.Component {
    render() {
        const {device, log, caption} = this.props
        return <Button tag={Link} className="float-right" to={`/devices/${device.id}/logs/${log.id}/add`} size={caption ? "" : "sm"}
                       color={caption ? "primary" : "secondary"}>
            <FontAwesome name="plus-circle"/> {caption ? "Add Entry" : ""}
        </Button>
    }

}