import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function ResultDetail({result}) {
  return (
    <View>
      <Image style ={{width:250,height:120}}source={{uri:result.image_url}}/>
      <Text>ResultDetail</Text>
    </View>
  )
}

const styles = StyleSheet.create({})