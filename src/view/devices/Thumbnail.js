import React from "react"
import DeviceThumbnail from "../device/Thumbnail";
import {Container, Row} from "reactstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {devices} = this.props
        return <div>
            <h1>Devices</h1>
            <Container>
                <Row>
                    {devices.map(device => (
                        <DeviceThumbnail key={`device-${device.id}`} device={device} {...this.props} />
                    ))}
                </Row>
            </Container>
        </div>
    }
}