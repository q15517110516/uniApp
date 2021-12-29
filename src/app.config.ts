export default {
  pages: [
    'pages/index/index',
    'pages/service/index',
    'pages/addService/index',
    'pages/message/index',
    'pages/user/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "black",
    selectedColor: "#1989fa",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [
      {
        pagePath: "pages/index/index",
        text: '首页',
        iconPath: './images/home.png',
        selectedIconPath: './images/home-selected.png'
      },
      {
        pagePath: "pages/service/index" ,
        text: '服务',
        iconPath: './images/service.png',
        selectedIconPath: './images/service-selected.png'
      },
      {
        pagePath: "pages/addService/index" ,
        text: '',
        iconPath: './images/add.png',
        selectedIconPath: './images/add.png',
      },
      {
        pagePath: "pages/message/index" ,
        text: '消息',
        iconPath: './images/message.png',
        selectedIconPath: './images/message-selected.png'
      },
      {
        pagePath: "pages/user/index" ,
        text: '我的',
        iconPath: './images/account.png',
        selectedIconPath: './images/account-selected.png'
      }
    ]
  },
  usingComponents: {}
}
