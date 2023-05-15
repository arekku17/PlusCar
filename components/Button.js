import React from 'react'
import { StyleSheet } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../core/theme'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function Button({ mode, style, children, icono, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      icon={({ size, color }) => (
        <>
        {icono && <FontAwesomeIcon icon={ icono } size={size} color={color} />}
        </>
      )}
      labelStyle={[styles.text]}
      mode={mode}
      {...props}
      
    >
    {children}
    </PaperButton>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: theme.colors.button
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    // lineHeight: 26,
  },
})
