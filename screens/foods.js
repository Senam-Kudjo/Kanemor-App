import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Foods({navigation}) {
  return (
    <View style={styles.header}>
      <Text>foods</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
})