import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Todolist = (props) => {
  return (
    <View  style={styles.item}>
        <View style={styles.itemleft}>
            <View style={styles.square} />
            <Text style={styles.itemtext}> {props.text} </Text>
        </View>

        <View style={styles.circle}/>
    </View>
  )
}

const styles = StyleSheet.create({
item:{
    backgroundColor:'#fff',
    padding:15,
    borderRadius:12,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20
},
itemleft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
},
square:{
    width:24,
    height:24,
    backgroundColor:'#55BCF6',
    opacity: 0.4,
    borderRadius:5,
    marginRight:15
},
itemtext:{
    fontSize:15,
    fontWeight:600,
    color:'black',
},
circle:{
    width:12,
    height:12,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#55BCF6'
}

})

export default Todolist

