import React from "react"
import DeviceThumbnail from "../device/Thumbnail";
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {devices} = this.props
        return <ListGroup>
            {devices.map(device => (
                <ListGroupItem key={device.id}>
                    <DeviceThumbnail device={device} {...this.props}/>
                </ListGroupItem>
            ))}
        </ListGroup>
    }
}