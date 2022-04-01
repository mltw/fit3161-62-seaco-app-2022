import { Result } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCodeAndSendEmail } from '../actions';

// TODO: if email is not a valid email, display none
let params = new URLSearchParams(document.location.search);
const email = params.get("email"); 

class SuccessMsg extends Component {
    componentDidMount(){
        const {
            fetchCodeAndSendEmail,
            emailSentToUser
        } = this.props

        if (!emailSentToUser)
            fetchCodeAndSendEmail(email)
    }
    
    render() {
        return (
            <Result
                status="success"
                title="Registration approved!"
                subTitle={`You've approved ${email} to create an account for the SEACO web application.`}
            />
        )
    }
}

export default connect(state => ({
    // props
    emailSentToUser: state.sendEmailValidation.emailSentToUser,
}), {
    // actions
    fetchCodeAndSendEmail
})(SuccessMsg);
