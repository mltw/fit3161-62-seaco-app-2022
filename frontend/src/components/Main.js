import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Layout, Menu } from 'antd';
import logo from "../logo.png";
import {
  DesktopOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  MenuOutlined
} from '@ant-design/icons';
import "antd/dist/antd.css";
import { signOutUser } from '../actions';
import { 
    Link,
    useParams,
    Outlet 
} from 'react-router-dom';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCircleUser,  } from '@fortawesome/free-regular-svg-icons';
// import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function Main(props) {

    const [collapsed, setCollapsed] = useState(false)

    const {
        username,
        signOutUser
    } = props

      const { section } = useParams();
      console.log("in Main and section is", section)

    return (
    <Layout style={{ minHeight: '100vh' }}>
        <Sider 
            collapsible collapsed={collapsed} 
            onCollapse={setCollapsed}>
            <div
                onClick={()=>{setCollapsed(!collapsed) ;console.log(collapsed)}}
                style={{margin: "16px", cursor: "pointer", fontSize: '16px', textAlign:"center", color:"white"}}>

                { collapsed ? <MenuOutlined /> : 
                    <div style={{fontSize: '16px'}}>
                        <MenuOutlined/> &nbsp;
                        SEACO, Monash
                        {/* <img src={logo} alt="Logo" style={{width:"40%", objectFit:"contain"}}/> */}
                    </div> }
            </div>
            
            <Menu 
                theme="dark" 
                defaultSelectedKeys={[section || 'dashboard']} 
                defaultOpenKeys={section === 'c1' || section === 'c2' ? ['contact'] : []}
                mode="inline">
                <Menu.Item key="dashboard" icon={<PieChartOutlined />}>
                    <Link to="dashboard">
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key="qna" icon={<DesktopOutlined />}>
                    <Link to="qna">
                        Questions for analysis
                    </Link>
                </Menu.Item>
                <SubMenu key="contact" icon={<TeamOutlined />} title="SEACO Contact">
                    <Menu.Item key="c1" >
                        <Link to="c1">
                            Mohd Roshidi Ismail
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item key="c2" >
                        <Link to="c2">
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