import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Content, Sider } = Layout;
const index = () => {
  return React.createElement(
    Layout,
    null,
    React.createElement(
      Sider,
      { breakpoint: 'lg', collapsedWidth: '0' },
      React.createElement('div', { className: 'title' }, '\u8096\u660E\u8F89'),
      React.createElement(
        Menu,
        { theme: 'dark', mode: 'inline', defaultSelectedKeys: '[1]' },
        React.createElement(
          Menu.Item,
          { key: '1' },
          '\u8BFE\u7A0B\u8BB0\u5F55',
        ),
        React.createElement(
          Menu.Item,
          { key: '2' },
          '\u8054\u7CFB\u6211\u4EEC',
        ),
      ),
    ),
    React.createElement(
      Layout,
      null,
      React.createElement(
        Header,
        { className: 'site-layout-background', style: { padding: 0 } },
        '\u5934',
      ),
      React.createElement(
        Content,
        {
          className: 'site-layout-background',
          style: {
            margin: '24px 16px',
            padding: '24px',
            minHeight: 'max-context',
          },
        },
        '\u5185\u5BB9',
      ),
      React.createElement(
        Footer,
        { style: { textAlign: 'center' } },
        'umi3-demo create by \u8096\u660E\u8F89',
      ),
    ),
  );
};
export default index;
//# sourceMappingURL=index.js.map
