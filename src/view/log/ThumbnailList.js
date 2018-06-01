import React from "react"
import Thumbnail from "./Thumbnail"
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class ThumbnailList extends React.Component {
    render() {
        const {logs} = this.props
        return <ListGroup>
            {logs.map(log => (
                <ListGroupItem key={log.id}>
                    <Thumbnail log={log} {...this.props}/>
                </ListGroupItem>
            ))}
        </ListGroup>
    }
}