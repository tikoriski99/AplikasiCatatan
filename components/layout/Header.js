import React from 'react'
import {View,Text,StyleSheet} from 'react-native'


const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <Text style={styles.title}>Aplikasi Catatan </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:'#1e90ff',
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    height:100
  },
  title:{
    color:'#fff',
    fontSize:25,
    fontWeight:'bold'
  }
})

export default Header