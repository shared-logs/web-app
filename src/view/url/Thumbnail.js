import React from "react"
import {Button} from "reactstrap"
import FontAwesome from "react-fontawesome"

export default class Thumbnail extends React.Component {
    render() {
        const {url} = this.props
        return <Button href={url.url} color={url.name.indexOf("AstroPrint") > -1 ? "danger" : "secondary"}>{url.name.indexOf("AstroPrint") > -1 ? <FontAwesome name="rocket"/> : ""}{url.name.replace("AstroPrint", "")}</Button>
    }
}