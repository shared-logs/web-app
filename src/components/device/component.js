import React, {Component} from "react"
import Loading from "../Loading";
import LogsView from "../log/list";
import DeviceForm from "./editor";

export default class Device extends Component
{
    render() {
        const mode = this.props.mode
        const device = this.props.device

        if (mode === "create") return <DeviceForm/>

        if (!device) return <Loading mode={mode}/>

        switch(mode) {
            case "inline":
                return <span className="device inline">{device.name} <small>{device.manufacturer} {device.model}</small></span>
            case "thumb":
                return (
                    <div className="device thumb">
                        <p>
                            {device.name}<br/>
                            <small>{device.manufacturer} {device.model}</small>
                        </p>
                    </div>
                )
            case "edit":
                return <DeviceForm device={device}/>
            case "full":
            default:
                return (
                    <div className="device full">
                        <h4>{device.name}</h4>
                        <p>{device.manufacturer}</p>
                        <p>{device.model}</p>
                        <p>Created {device.created}{(device.modified !== device.created ? `, modified ${device.modified}` : "")}</p>
                        <LogsView device_data={device}/>
                    </div>
                )
        }
    }
}