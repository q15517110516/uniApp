import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Message extends Component {

  render () {
    return (
      <View className='message'>
        <Text>Message</Text>
      </View>
    )
  }
}
