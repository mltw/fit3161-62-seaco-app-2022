import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu, Modal, BackTop } from 'antd';
import logo from "../logo.png";
import {
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined,
  LineChartOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
import { signOutUser } from '../actions';
import { 
    Link,
    useParams,
    Outlet 
} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function Main(props) {

    const [collapsed, setCollapsed] = useState(false)

    const {
        username,
        signOutUser
    } = props

    const { section, subSection } = useParams();

    let menuOpenKey = [];
    if (section === 'contacts')
        menuOpenKey = ['contacts']
    else if (section === 'reports')
        menuOpenKey = ['reports']

    console.log("in Main and section, subSection is", section, subSection)

    return (
    <Layout style={{ minHeight: '100vh' }}>
        <BackTop />
        <Sider 
            collapsible collapsed={collapsed} 
            onCollapse={setCollapsed}>
            <div
                onClick={()=>{setCollapsed(!collapsed) ;console.log(collapsed)}}
                style={{margin: "16px", cursor: "pointer", fontSize: '16px', textAlign:"center", color:"white"}}>

                { collapsed ? 
                    <MenuOutlined /> 
                    : 
                    <div style={{fontSize: '16px'}}>
                        <MenuOutlined/> &nbsp;
                        SEACO, Monash
                    </div> }
            </div>
            
            <Menu 
                theme="dark" 
                selectedKeys={[subSection || section]}
                defaultSelectedKeys={[subSection || section || 'dashboard']} 
                defaultOpenKeys={menuOpenKey}
                mode="inline">
                <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
                    <Link to="dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>

                <SubMenu key="reports" icon={<LineChartOutlined />} title="Reports">
                    <Menu.Item key="individual" >
                        <Link to="reports/individual">
                            Individual Health
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="household" >
                        <Link to="reports/household">
                            Household Health
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="physical" >
                        <Link to="reports/physical">
                            Physical
                        </Link>
                    </Menu.Item>
                </SubMenu>

                <SubMenu key="contacts" icon={<TeamOutlined />} title="SEACO Contact">
                    <Menu.Item key="c1" >
                        <Link to="contacts/c1">
                            Mohd Roshidi Ismail
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="c2" >
                        <Link to="contacts/c2">
                            Norliza Mat
                        </Link>
                    </Menu.Item>
                </SubMenu>

            </Menu>
        </Sider>

        <Layout className="site-layout">
            <Header style={{ background: "#fff", padding: 0}}>
                <Menu mode="horizontal" selectable={false} style={{height:"64px"}}>
                    <div>
                        <img src={logo} alt="Logo" style={{padding: "5px 5px 5px 16px" ,width:"100%", height:"100%" }}/>
                    </div>
                    
                    <SubMenu key="sub1" title={username} icon={<UserOutlined style={{fontSize: "22px"}}/>} style={{marginLeft:'auto', fontSize: "15px"}}>
                        <Menu.Item key="1" onClick={()=>{
                                Modal.confirm({
                                title: 'Are you sure you want to sign out?',
                                icon: <ExclamationCircleOutlined />,
                                okText: 'Yes',
                                cancelText: 'Cancel',
                                onOk() {signOutUser()},
                                onCancel() {console.log('cancel')}
                              });
                            }}>
                                Sign Out
                        </Menu.Item>
                    </SubMenu>
                </Menu>    
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <h1 style={{margin: "16px 0px"}}>
                    Hello, {username}!
                </h1>
                <div style={{ padding: 24, minHeight: 360, background: "#fff" }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>SEACO x Team MA 16</Footer>
        </Layout>
    </Layout>
    );

}

export default connect(state => ({
    // props
    username: state.userValidation.username,
}), {
    // actions
    signOutUser
})(Main);