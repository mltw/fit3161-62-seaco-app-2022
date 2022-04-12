import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import {  Col } from 'antd';
import { Form, Input, Button,} from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.png';
import { StyledRow, StyledCol } from './Styled';
import { connect } from 'react-redux';
import { validateUser} from '../actions';

class Signin extends Component {

  render() {

    const {
        validateUser
    } = this.props

    console.log("rendering signin and valid from props is", this.props.valid)
    return (
        <StyledRow type="flex" justify="center" align="middle">
        <Col xs={2} sm={4} md={6} lg={6} xl={7}></Col>

        <StyledCol xs={20} sm={16} md={12} lg={12} xl={10} type="flex" justify="center" align="middle">
            <div style={{maxWidth:"250px", overflow:"hidden", paddingBottom: "20px"}}>
                <img src={logo} alt="Logo" style={{width:"100%", objectFit:"contain"}}/>
            </div>

            <Form
                size = "large"
                type="flex" justify="center" align="middle"
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish = {(values) => validateUser(values)}
            >
                <h2>Sign In</h2>
                <Form.Item
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Email!',
                        },
                        {
                            pattern: /^[\w-.]+@(student\.)?(monash\.edu)$|^(seaco2022ma16@gmail.com)$/,
                            message: "Please use your Monash email."
                        }
                    ]}>
                    <Input 
                        prefix={<MailOutlined className="site-form-item-icon" />} 
                        placeholder="Email" />
                </Form.Item>

                <Form.Item
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

                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Button style={{marginBottom: "10px" }} type="primary" shape="round" htmlType="submit" className="login-form-button" size="large">
                    Sign In
                </Button>
                <br></br>
                <Button style={{marginBottom: "10px" }} type="default" shape="round" className="login-form-button" size="large">
                    <Link to= "/signup">
                        Sign Up
                    </Link>
                </Button>
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
    validateUser
})(Signin);