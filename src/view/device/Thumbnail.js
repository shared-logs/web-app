import React from "react"
import {Link} from "react-router-dom";
import {Card, CardBody, CardHeader, CardText, CardTitle, Col, Container} from "reactstrap";
import {humanDate} from "../utils";
import ButtonAdd from "../entry/ButtonAdd";
import UrlThumbnail from "../url/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {device} = this.props
        return <Col sm="4">
            <Container>
            <Card>
                <CardHeader tag={Link} to={`/devices/${device.id}`}>{device.name}</CardHeader>
                    {device.logs ? device.logs.map(log => (
                        <CardBody key={`log-${log.id}`}>
                            <CardTitle tag={Link} to={`/devices/${device.id}/logs/${log.id}`}>{log.name}</CardTitle>
                            <ButtonAdd device={device} log={log} caption={false}/>
                            <CardText>
                                {log.entries ? log.entries.map(entry => (
                                    <span key={`entry-${entry.id}`}>{entry.title} <small><br/>{humanDate(entry.created)}</small></span>
                                )) : ""}

                            </CardText>
                        </CardBody>
                    )) : <CardBody>
                        <CardText>No logs</CardText>
                    </CardBody>}
                {device.urls ? <CardBody>
                    {device.urls.map(url => (<UrlThumbnail key={`url-${url.id}`} url={url} {...this.props}/>
                    ))}
                </CardBody> : ""}
            </Card>
            </Container>
        </Col>
    }
}
