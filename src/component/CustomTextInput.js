import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const CustomTextInput = (props) => {
    return (
        <View style={styles.InputContainer}>
            <Text style={styles.inputBoxText}>{props.title}</Text>
            <TextInput
                secureTextEntry={props.isSecureText}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
                value={props.value}
                style={styles.TextInputStyle}

            />
        </View>

    )
}

export default CustomTextInput

const styles = StyleSheet.create({
    InputContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputBoxText: {
        alignSelf: 'flex-start',
        marginLeft: '10%',
        color: 'black',
        fontWeight: 'bold',

    },
    TextInputStyle: {
        width: '80%',
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 0.5,
        borderRadius: 10,
        marginVertical: 10,

    },
})