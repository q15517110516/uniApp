import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Message extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='message'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
