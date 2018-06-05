import React from "react"
import User from "../../../model/User";
import Thumbnail from "../../../view/users/Thumbnail";
import Loading from "../../../view/Loading";

export default class Browse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        User.all(null, list => {
            this.setState({ users: list })
        })
    }

    render() {
        const {users} = this.state
        return users ?
            <Thumbnail users={users} {...this.props}/> :
            <Loading/>
    }
}