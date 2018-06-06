import React from "react"
import UserThumbnail from "../user/Thumbnail"
import {ListGroup, ListGroupItem} from "reactstrap";

export default class Thumbnail extends React.Component {
    render() {
        const {users} = this.props
        return <div>
            <h1>Users</h1>
            <ListGroup className="users thumbnail">
                {users.map(user => (
                    <ListGroupItem key={user.id}>
                        <UserThumbnail user={user} {...this.props}/>
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    }
}