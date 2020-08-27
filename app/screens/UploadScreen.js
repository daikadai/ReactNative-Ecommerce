import React from 'react'
import { StyleSheet, Modal, View } from 'react-native'
import AppText from '../components/AppText'

const UploadScreen = ({ progress = 0, visible = false}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <AppText>{progress * 100}%</AppText>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
})

 
export default UploadScreen
