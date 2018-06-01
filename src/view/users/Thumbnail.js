import React from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {users} = this.props
        return <ListGroup>
            {users.map(user => (
                <ListGroupItem key={user.id}>
                    <Thumbnail user={user} {...this.props}/>
                </ListGroupItem>
            ))}
        </ListGroup>
    }
}