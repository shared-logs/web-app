import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

export default class Loading extends Component {
    render() {
        switch (this.props.mode) {
            case "inline":
                return <span className="loading inline"><FontAwesome name="cog" spin/></span>
            case "thumb":
                return (
                    <div className="loading thumb">
                        <p>
                            <FontAwesome name="cog" spin/><br/>
                            <small>Loading&hellip;</small>
                        </p>
                    </div>
                )
            case "edit":
                return (
                    <div className="loading edit">
                        <p>
                            <FontAwesome name="cog" spin/><br/>
                            <small>Loading&hellip;</small>
                        </p>
                    </div>
                )
            case "create":
                return (
                    <div className="loading create">
                        <p>
                            <FontAwesome name="cog" spin/><br/>
                            <small>Loading&hellip;</small>
                        </p>
                    </div>
                )
            case "full":
            default:
                return (
                    <div className="loading full">
                        <p>
                            <FontAwesome name="cog" spin/><br/>
                            <small>Loading&hellip;</small>
                        </p>
                    </div>
                )
        }
    }
}