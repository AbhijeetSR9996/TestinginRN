import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({ onPress }) {
    return (
      <TouchableOpacity
          style={[styles.button,
              { backgroundColor: '#fff' }]}
                 onPress={onPress} >
          <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff'
    }
})
export default AppButton;
