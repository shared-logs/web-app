import React from "react"
import Entry from "../../../model/Entry";
import EntryEdit from "../../../view/entry/Edit"

export default class Edit extends  React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.validateTitle = this.validateTitle.bind(this)
        this.validateDetail = this.validateDetail.bind(this)
        this.validateForm = this.validateForm.bind(this)
        this.state = {
            submitted: false,
            entry: this.resetEntry(true),
            handlers: {
                [Entry.TITLE]: this.handleChange,
                [Entry.DETAIL]: this.handleChange,
                [EntryEdit.SUBMIT]: this.handleSubmit
            },
            validators: {
                [Entry.TITLE]: this.validateTitle,
                [Entry.DETAIL]: this.validateDetail,
                [EntryEdit.VALIDATE]: this.validateForm
            },
        };
        this.feedback = {
            [Entry.TITLE]: "",
            [Entry.DETAIL]: ""
        }
    }

    resetEntry(toBeReturned = false) {
        const blankForm = {
            [Entry.TITLE]: "",
            [Entry.DETAIL]: ""
        }
        if (toBeReturned) return blankForm
        else this.setState(blankForm);
    }

    handleChange(event) {
        var {entry} = this.state
        entry[event.target.id] = event.target.value
        this.setState({ entry: entry })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { match, auth } = this.props
        console.log("submitting!")
        Entry.create({
            [Entry.TITLE]: this.state.entry.title,
            [Entry.DETAIL]: this.state.entry.detail,
            [Entry.LOG_ID]: match.params.log_id,
            [Entry.USER_ID]: auth.user.id
        }, entry => {
            console.log(entry)
            this.processSubmit(entry)
            this.props.history.goBack()
        })
    }

    processSubmit(entry) {
        if (entry) {
            if (this.props.onSubmit && typeof this.props.onSubmit === "function") {
                this.props.onSubmit(entry)
            }
        }
    }

    validateTitle() {
        if (this.state.entry[Entry.TITLE].length > 0) {
            this.feedback[Entry.TITLE] = ""
            return {valid: true}
        } else {
            this.feedback[Entry.TITLE] = "A good, clear title is required!"
            return {invalid: true}
        }
    }

    validateDetail() {
        if (this.state.entry[Entry.DETAIL].length > 0) {
            this.feedback[Entry.DETAIL] = ""
            return {valid: true}
        } else {
            this.feedback[Entry.DETAIL] = "A clear, detailed description is required!"
            return {invalid: true}
        }
    }

    validateForm() {
        return this.validateTitle().valid && this.validateDetail().valid ?
            {} :
            {disabled: true}
    }

    render() {
        return <EntryEdit {...this.state} feedback={this.feedback} {...this.props}/>
    }
}