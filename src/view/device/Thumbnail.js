import React from "react"
import {Link} from "react-router-dom";
import {Card, CardBody, CardHeader, CardText, Col} from "reactstrap";
import FontAwesome from "react-fontawesome"

export default class Thumbnail extends React.Component {
    render() {
        const {device} = this.props
        return <Col sm="4">
            <Card>
                <CardHeader>
                    <Link to={`/devices/${device.id}`}>{device.name}</Link>
                </CardHeader>
                <CardBody>
                    <CardText>{device.logs ? device.logs.map(log => (
                        <div key={`log-${log.id}`}>
                            <Link to={`/devices/${device.id}/logs/${log.id}`}>{log.name}</Link>
                            <div>
                                {log.entries ? log.entries.map(entry => (
                                    <div key={`entry-${entry.id}`}>{entry.title} <small><br/>{entry.created}</small></div>
                                )) : ""}
                                <Link className="float-right" to={`/devices/${device.id}/logs/${log.id}/add`} size="sm" color="secondary">
                                    <FontAwesome name="plus-circle"/>
                                </Link>
                            </div>
                        </div>
                    )) : "No logs"}</CardText>
                </CardBody>
            </Card>
        </Col>
    }
}
