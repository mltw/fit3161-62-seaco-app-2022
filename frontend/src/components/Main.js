import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { StyledDivMainPage } from './Styled';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import "antd/dist/antd.css";
import { signOutUser } from '../actions';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser,  } from '@fortawesome/free-regular-svg-icons';
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Main extends Component {
state = {
    collapsed: false,
};

onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
};

render() {
    const { 
        collapsed 
    } = this.state;

    const {
        username,
        signOutUser
    } = this.props

    return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        
            {/* logo */}
            <StyledDivMainPage 
                onClick={()=>this.onCollapse(!collapsed)}
                style={{cursor: "pointer"}}>
                Click me to collpase
            </StyledDivMainPage>
            
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<PieChartOutlined />}>
                    Option 1
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                    Option 2
                </Menu.Item>
                <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                    Files
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header style={{ background: "#fff", padding: 0}}>
                <Menu mode="horizontal" selectable={false}>
                    <SubMenu key="sub1" title={username} icon={<UserOutlined style={{fontSize: "22px"}}/>} style={{marginLeft:'auto', fontSize: "15px"}}>
                        <Menu.Item key="1" onClick={signOutUser}>Sign Out</Menu.Item>
                    </SubMenu>
                </Menu>    
                {/* <div style={{textAlign:"right", marginRight: "16px"}}>
                    <Dropdown 
                        overlay={
                            <Menu>
                                <Menu.Item style={{marginLeft:'auto'}}>
                                    Sign Out <FontAwesomeIcon icon={faCircleUser} /><i class="fa-solid fa-circle-user"></i>
                                </Menu.Item>
                            </Menu>}
                    >
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {username} <UserOutlined />
                        </a>
                    </Dropdown>
                </div> */}

            </Header>
            <Content style={{ margin: '0 16px' }}>
                <h1 style={{margin: "16px 0px"}}>
                    Hello, {username}!
                </h1>
                {/* <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>Hello, {username} !</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
                Bill is a cat.
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>SEACO x Team MA 16</Footer>
        </Layout>
    </Layout>
    );
}
}

export default connect(state => ({
    // props
    username: state.userValidation.username,
}), {
    // actions
    signOutUser
})(Main);