import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const ImageInput = ({imageUri}) => {
  return (
    <View style={styles.container}>
      {!imageUri && <MaterialCommunityIcons name="camera" color={colors.medium} size={40}/>}
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image}/>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    overflow: 'hidden',
    width: 100
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

export default ImageInput
