import React from "react"
import EntryThumbnail from "../entry/Thumbnail";
import {ListGroup, ListGroupItem} from "reactstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {entries} = this.props
        return <ListGroup>
            {entries.map(entry => (
                <ListGroupItem key={entry.id}>
                    <EntryThumbnail entry={entry} {...this.props}/>
                </ListGroupItem>
            ))}
        </ListGroup>
    }
}