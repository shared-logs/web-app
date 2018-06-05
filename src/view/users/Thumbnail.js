import React from "react"
import UserThumbnail from "../user/Thumbnail"

export default class Thumbnail extends React.Component {
    render() {
        const {users} = this.props
        return <ul className="users thumbnail">
            {users.map(user => (
                <li key={user.id}>
                    <UserThumbnail user={user} {...this.props}/>
                </li>
            ))}
        </ul>
    }
}