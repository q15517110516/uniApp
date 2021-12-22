import { Component } from 'react'
import { View } from '@tarojs/components'
// import Taro from '@tarojs/taro';
import { Tabbar, TabbarItem, Icon } from "@antmjs/vantui";
import './index.scss';

export default class Index extends Component {

  state = {
    active: 0
  };

  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setState({
      active: event.detail
    });
    console.log(this.state.active)
  }

  render() {
    return (
      <View className='index'>
        <Tabbar
          active={this.state.active}
          onChange={e => this.onChange(e)}
        >
          <TabbarItem icon="wap-home-o">
            首页
          </TabbarItem>
          <TabbarItem icon="apps-o">
            服务
          </TabbarItem>
          <TabbarItem>
            <Icon name="add"
                  color="#5592fa"
                  size="50px"
                  style="margin-bottom: 20px; z-index: 2"
            />
          </TabbarItem>
          <TabbarItem icon="chat-o">
            消息
          </TabbarItem>
          <TabbarItem icon="contact">
            我的
          </TabbarItem>
        </Tabbar>
      </View>
    )
  }
}
