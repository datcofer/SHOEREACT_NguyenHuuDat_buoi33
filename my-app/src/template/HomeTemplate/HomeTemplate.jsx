import React from 'react';
import { Layout, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const HomeTemplate = () => {
    const arrNavLink = [
        {
            to: "/",
            content: "Home",
        },
        
    ]
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className='min-h-screen'>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
              <div className="demo-logo" />
              
              {arrNavLink.map((item, index) => {
                  return (
                    <NavLink className={({isActive}) => {
                        console.log(isActive);
                        return `mx-4 ${isActive ? "text-red-500" : "text-white"}`;
                      }} to={item.to}>{item.content}</NavLink> 
                  );
              })}
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        
        <div
          style={{
            padding: 24,
            minHeight: "100%",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet/>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Repo của Nguyễn Hữu Đạt
      </Footer>
    </Layout>
  );
};
export default HomeTemplate;