import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
    return (
        <Pressable
            onPress={props.onPress}
            style={({ pressed }) => [{
                backgroundColor: pressed ? props.pressedButtonColor : props.buttonColor,
                width: props.setWidth,

            }, styles.button]} >
            <Text>{props.title}</Text>
        </Pressable>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    signupButton: {
        width: '40%',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent
            : 'center'
    },
})