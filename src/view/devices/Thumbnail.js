import React from "react"
import DeviceThumbnail from "../device/Thumbnail";

export default class Thumbnail extends React.Component {
    render() {
        const {devices} = this.props
        return <ul className="devices thumbnail">
            {devices.map(device => (
                <li key={device.id}>
                    <DeviceThumbnail device={device} {...this.props}/>
                </li>
            ))}
        </ul>
    }
}