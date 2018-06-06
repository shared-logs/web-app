import React from "react"
import EntryDetail from "../entry/Detail";
import {ListGroup, ListGroupItem} from "reactstrap";

export default class Detail extends React.Component {
    render() {
        const {entries} = this.props
        return <ListGroup>
            {entries.map(entry => (
                <ListGroupItem key={entry.id}>
                    <EntryDetail entry={entry} {...this.props}/>
                </ListGroupItem>
            ))}
        </ListGroup>
    }
}