import React from "react"
import Detail from "../../../view/user/Detail";

export default class View extends React.Component {
    render() {
        const user = this.props.user || this.props.auth.user
        return <Detail user={user} {...this.props}/>
    }
}