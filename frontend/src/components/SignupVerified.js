import { React, Component } from 'react';
import {  Col } from 'antd';
import { Form, Input, Button,} from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.png';
import { StyledRow, StyledCol } from './Styled';
import { connect } from 'react-redux';
import { registerAndValidateUser} from '../actions';

let params = new URLSearchParams(document.location.search);
const email = params.get("email"); 

class SignupVerified extends Component {

  render() {

    const {
        registerAndValidateUser
    } = this.props

    return (
        <StyledRow type="flex" justify="center" align="middle">
        <Col xs={2} sm={4} md={6} lg={6} xl={7}></Col>

        <StyledCol xs={20} sm={16} md={12} lg={12} xl={10} type="flex" justify="center" align="middle">
            <div style={{maxWidth:"200px", overflow:"hidden", paddingBottom: "20px"}}>
                <img src={logo} alt="Logo" style={{width:"100%", objectFit:"contain"}}/>
            </div>

            <Form
                // labelCol={{ span: 7 }}
                // wrapperCol={{ span: 17 }}
                size = "large"
                type="flex" justify="center" align="middle"
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish = {(values) => registerAndValidateUser(values)}
            >
                <h2>Finish Signing Up</h2>
                <Form.Item
                    // label = "Username"
                    name="email"
                    initialValue={email}
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        {
                            pattern :/^[\w-.]+@(student\.)?(monash\.edu)$/,
                            message: "Please use your Monash email."
                        }
                    ]}>
                    <Input 
                        disabled={email ? true : false}
                        prefix={<MailOutlined className="site-form-item-icon" />} 
                        placeholder="Monash Email" />
                </Form.Item>
                <Form.Item
                    // label = "Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}>
                    <Input 
                        prefix={<UserOutlined className="site-form-item-icon" />} 
                        placeholder="Username" />
                </Form.Item>

                <Form.Item
                    // label = "Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        { min: 8, message: 'Password is a minimum of 8 characters.' }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item
                    // label = "Confirm Password"
                    name="passwordConfirm"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        { min: 8, message: 'Password is a minimum of 8 characters.' }
                    ]}
                >
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the verification code!',
                        },
                        { len: 6, message: 'Code is 6 digits only.' }
                    ]}
                >
                    <Input
                        prefix={<SafetyCertificateOutlined className="site-form-item-icon" />}
                        placeholder="Verification Code"
                    />
                </Form.Item>

                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Button style={{marginBottom: "10px" }} type="primary" shape="round" htmlType="submit" className="login-form-button" size="large">
                    Sign Up
                </Button>
                <br></br>
                {/* <Button style={{marginBottom: "10px" }} type="default" shape="round" className="login-form-button" size="large">
                    <Link to= "/">
                        Sign In
                    </Link>
                </Button> */}
            </Form>
        
        </StyledCol>

        <Col xs={2} sm={4} md={6} lg={6} xl={7}></Col>

    </StyledRow>
    )
  }
}

export default connect(state => ({
    // props
    valid: state.userValidation.valid,
}), {
    // actions
    registerAndValidateUser
})(SignupVerified);