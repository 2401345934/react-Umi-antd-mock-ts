import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Footer, Content, Sider } = Layout;

const index = () => {
  return (
    <Layout>
      <Sider breakpoint="lg" collapsedWidth={'0'}>
        <div className={'title'}>肖明辉</div>
        <Menu theme={'dark'} mode={'inline'} defaultSelectedKeys={'[1]'}>
          <Menu.Item key={'1'}>课程记录</Menu.Item>
          <Menu.Item key={'2'}>联系我们</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className={'site-layout-background'} style={{ padding: 0 }}>
          头
        </Header>
        <Content
          className={'site-layout-background'}
          style={{
            margin: '24px 16px',
            padding: '24px',
            minHeight: 'max-context',
          }}
        >
          内容
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          umi3-demo create by 肖明辉
        </Footer>
      </Layout>
    </Layout>
  );
};

export default index;
