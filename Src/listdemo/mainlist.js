import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Provider } from 'react-redux'
import Listscreen from './listscreen'
import liststores from './Liststore'

const Mainlist = () => {
  return (
    <Provider store={liststores}>
      <Listscreen/>
    </Provider>
  )
}

export default Mainlist

