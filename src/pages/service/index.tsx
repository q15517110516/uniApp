import { Component } from 'react';
import { Grid,
  GridItem,
  Image
} from "@antmjs/vantui";
import { AtTabs, AtTabsPane } from 'taro-ui';
import { Text } from '@tarojs/components';
import './index.scss';

const tabList = [
  {
    title: '安装服务',
    service: [
      {
        text: '空调安装',
        icon: '../../images/air-conditioning.png'
      },
      {
        text: '洗衣机安装',
        icon: '../../images/washing-machine.png'
      },
      {
        text: '家具组装',
        icon: '../../images/furniture.png'
      },
      {
        text: '其他家电',
        icon: '../../images/electric-appliance.png'
      }
    ],
  },
  {
    title: '家政服务',
    service: [
      {
        text: '家电维修',
        icon: '../../images/washing-plate.png'
      },
      {
        text: '保姆',
        icon: '../../images/housekeeping.png'
      },
      {
        text: '保洁',
        icon: '../../images/cleaner.png'
      },
      {
        text: '擦窗户',
        icon: '../../images/cleaning-spray.png'
      },
      {
        text: '钟点工',
        icon: '../../images/washing-plate.png'
      },
      {
        text: '墙面粉刷',
        icon: '../../images/paint-roller.png'
      }

    ],
  },
  {
    title: '搬家服务',
    service: [
      {
        text: '搬家服务',
        icon: '../../images/relocation.png'
      },
      {
        text: '旧家具回收',
        icon: '../../images/recycle.png'
      }
    ],
  },
  {
    title: '装修服务',
    service: [
      {
        text: '水电工',
        icon: '../../images/electrician.png'
      },
      {
        text: '泥瓦工',
        icon: '../../images/builder.png'
      },
      {
        text: '木工',
        icon: '../../images/carpenter.png'
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
        <AtTabs current={this.state.current}
                tabDirection='vertical'
                height='100%'
                scroll
                tabList={tabList}
                onClick={this.handleClick.bind(this)}
        >
          {tabList.map((item, index) => (
              <AtTabsPane current={this.state.current}
                          tabDirection='vertical'
                          index={index}
                          key={index}
              >
                  <Grid columnNum={3}>
                    {item.service.map((value, i) => (
                      <GridItem key={i}>
                        <Image src={`${value.icon}`}
                               fit="cover"
                               style={{width: '100%', height: '100%'}}
                        />
                        <Text>{value.text}</Text>
                      </GridItem>
                    ))}
                  </Grid>
              </AtTabsPane>
          ))}
        </AtTabs>
    );
  }
}

export default Service;

