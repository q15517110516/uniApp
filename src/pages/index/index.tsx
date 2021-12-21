import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <Button type="info">test</Button>
        <Button type="primary">
          主要按钮
        </Button>
      </View>
    )
  }
}
