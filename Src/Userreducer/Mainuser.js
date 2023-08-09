import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import userstore from './Userstore'
import { Provider } from 'react-redux'
import Userlist from './Userlist'

const Mainuser = ({navigation}) => {
  return (
    <Provider store={userstore}>
        <Userlist/>
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default Mainuser

