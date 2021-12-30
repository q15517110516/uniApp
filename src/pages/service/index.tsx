import { Component } from 'react';
import { View } from '../../images/housekeeping.png';
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
        icon: ''
      },
      {
        text: '洗衣机安装',
        icon: 'homeO'
      },
      {
        text: '家具组装',
        icon: 'homeO'
      },
      {
        text: '其他家电',
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
        icon: '../../images/housekeeping.png'
      },
      {
        text: '保洁',
        icon: 'homeO'
      },
      {
        text: '擦窗户',
        icon: 'homeO'
      },
      {
        text: '擦玻璃',
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
        <AtTabs current={this.state.current}
                tabDirection='vertical'
                height='500px'
                scroll
                tabList={tabList}
                onClick={this.handleClick.bind(this)}
        >
          {tabList.map((item, index) => (
              <AtTabsPane current={this.state.current}
                          tabDirection='vertical'
                          index={index}
                          key={index}>
                  <Grid columnNum={3} >
                    {item.service.map((value, i) => (
                      <GridItem icon={value.icon}
                                text={value.text}
                                key={i}
                      />
                    ))}
                  </Grid>
              </AtTabsPane>
          ))}
        </AtTabs>
    );
  }
}

export default Service;

