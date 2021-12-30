import { Component } from 'react';
import { View } from '@tarojs/components';
import { Grid,
  GridItem
} from "@antmjs/vantui";
import { AtTabs, AtTabsPane } from 'taro-ui';
import './index.scss';

const tabList = [
  {
    title: '安装服务',
    service: [
      {
        text: '空调安装',
        icon: 'homeO'
      },
      {
        text: '洗衣机安装',
        icon: 'homeO'
      },
      {
        text: '家具组装',
        icon: 'homeO'
      }
    ],
  },
  {
    title: '家政服务',
    service: [
      {
        text: '家电维修',
        icon: 'homeO'
      },
      {
        text: '保姆',
        icon: 'homeO'
      },
      {
        text: '保洁',
        icon: 'homeO'
      }
    ],
  },
  {
    title: '搬家服务',
    service: [
      {
        text: '搬家服务',
        icon: 'homeO'
      },
      {
        text: '旧家具回收',
        icon: 'homeO'
      }
    ],
  },
  {
    title: '装修服务',
    service: [
      {
        text: '水电工',
        icon: 'homeO'
      },
      {
        text: '泥瓦工',
        icon: 'homeO'
      },
      {
        text: '木工',
        icon: 'homeO'
      }
    ]
  },
]


class Service extends Component {

  state = {
    current: 0,
  }

  handleClick (value) {
    this.setState({
      current: value
    })
  }

  render() {
    return (
      <AtTabs
        current={this.state.current}
        scroll
        tabDirection='vertical'
        tabList={[
          { title: '标签页1' },
          { title: '标签页2' },
          { title: '标签页3' },
          { title: '标签页4' },
          { title: '标签页5' },
          { title: '标签页6' },
        ]}
        onClick={this.handleClick.bind(this)}>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
          <View >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
          <View style='font-size:18px;text-align:center'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
          <View style='font-size:18px;text-align:center'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
          <View style='font-size:18px;text-align:center'>标签页四的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
          <View style='font-size:18px;text-align:center'>标签页五的内容</View>
        </AtTabsPane>
        <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
          <View style='font-size:18px;text-align:center'>标签页六的内容</View>
        </AtTabsPane>
      </AtTabs>


        // <AtTabs current={this.state.current}
        //         tabDirection='vertical'
        //         height='200px%'
        //         scroll
        //         tabList={[
        //           { title: '标签页1' },
        //           { title: '标签页2' },
        //           { title: '标签页3' },
        //           { title: '标签页4' },
        //           { title: '标签页5' },
        //           { title: '标签页6' },
        //         ]}
        //         onClick={this.handleClick.bind(this)}
        // >
        //   {tabList.map((item, index) => (
        //       <AtTabsPane current={this.state.current}
        //                   index={index}
        //                   key={index}>
        //         <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页一的内容</View>
        //         <Grid columnNum={3} >
        //           {item.service.map((value, i) => (
        //             <GridItem icon={value.icon}
        //                       text={value.text}
        //                       key={i}
        //
        //
        //             />
        //           ))}
        //         </Grid>
        //       </AtTabsPane>
        //   ))}
        // </AtTabs>
    );
  }
}

export default Service;

