export default {
  pages: [
    'pages/index/index',
    'pages/service/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: "#666",
    selectedColor: "#b4282d",
    backgroundColor: "#fafafa",
    borderStyle: 'black',
    list: [
      {
        pagePath: "pages/index/index",
        text: '家'
      },
      {
        pagePath: "pages/service/index" ,
        text: 'Service'
      }
    ]
  }
}
