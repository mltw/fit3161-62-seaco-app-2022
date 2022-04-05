import { Result } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCodeAndSendEmail } from '../actions';
import { LoadingOutlined } from '@ant-design/icons';

// TODO: if email is not a valid email, display none
let params = new URLSearchParams(document.location.search);
const emailId = params.get("id"); 

class SuccessMsg extends Component {

    componentDidUpdate(prevProps){
        const {
            emailSentToUser,
            userSignUpEmail
        } = this.props

        console.log("in did update", prevProps.emailSentToUser, emailSentToUser, userSignUpEmail)
        if (prevProps.emailSentToUser===false && emailSentToUser===true){
            this.setState({email: userSignUpEmail})
        }
    }
    componentDidMount(){
        const {
            fetchCodeAndSendEmail,
            emailSentToUser
        } = this.props

        if (!emailSentToUser)
            fetchCodeAndSendEmail(emailId)
    }
    
    render() {
        const {
            userSignUpEmail
        } = this.props
        console.log("in render", this.props)

        if(!userSignUpEmail)
            return (
                <Result
                    icon={<LoadingOutlined />}
                    title="Creating approval email... "
                />
            )

        return (
            <Result
                status="success"
                title="Registration approved!"
                subTitle={`You've approved ${userSignUpEmail} to create an account for the SEACO web application. You may safely close this page.`}
            />
        )
    }
}

export default connect(state => ({
    // props
    emailSentToUser: state.userRegistration.emailSentToUser,
    userSignUpEmail: state.userRegistration.userSignUpEmail,
}), {
    // actions
    fetchCodeAndSendEmail
})(SuccessMsg);
