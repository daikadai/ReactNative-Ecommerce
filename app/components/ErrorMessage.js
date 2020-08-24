import React from 'react'
import AppText from './AppText'
import { StyleSheet } from 'react-native';

const ErrorMessage = ({ error, visible }) => {
  if(!visible || !error) return null;
  console.log(visible);
  return (
    <AppText style={styles.error}>
      {error}
    </AppText>
  )
}

const styles = StyleSheet.create({
  error: { color: 'red'}
})


export default ErrorMessage
