import React from "react"
import FontAwesome from "react-fontawesome"

export default class Loading extends React.Component {
    render = () => <p>Loading&hellip; <FontAwesome name="circle-o-notch" spin={true}/></p>
}