import { React, Component } from 'react';
import { Link } from 'react-router-dom';
import {  Col, Tooltip } from 'antd';
import { Form, Input, Button } from 'antd';
import { MailOutlined, InfoCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import logo from '../logo.png';
import { StyledRow, StyledCol } from './Styled';
import { connect } from 'react-redux';
import { registerUserTemp} from '../actions';

class SignupTemp extends Component {

  render() {

    const {
        registerUserTemp
    } = this.props

    return (
        <StyledRow type="flex" justify="center" align="middle">
        <Col xs={2} sm={4} md={6} lg={6} xl={7}></Col>

        <StyledCol xs={20} sm={16} md={12} lg={12} xl={10} type="flex" justify="center" align="middle">
            <div style={{maxWidth:"250px", overflow:"hidden", paddingBottom: "20px"}}>
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
                onFinish = {(values) => registerUserTemp(values)}
            >
                <h2>Sign Up</h2>
                <Form.Item
                    name="email"
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
                        
                        prefix={<MailOutlined className="site-form-item-icon" />} 
                        placeholder="Monash Email" />
                </Form.Item>

                

                {/* <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item> */}

                <Button style={{marginBottom: "10px" }} type="primary" shape="round" htmlType="submit" className="login-form-button" size="large">
                    Request for code 
                    <Tooltip title="An email will be sent to you once Mr X approves the registration. Kindly follow the steps there to complete the sign up process.">
                        <InfoCircleOutlined style={{fontSize: "17px"}}/>
                    </Tooltip>
                </Button>
                <br></br>
                <Button style={{marginBottom: "10px" }} type="default" shape="round" className="login-form-button" size="large">
                    <Link to= "/">
                        Sign In
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
    registerUserTemp
})(SignupTemp);