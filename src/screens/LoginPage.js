import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    Image
} from 'react-native';
import React, { useState } from 'react';
import { Loading, CustomTextInput, CustomButton } from '../component/';

const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);
    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome {result}</Text>
            <Image
                source={require('../../assets/image/loginicon.png')}
                style={styles.image} />

            <CustomTextInput
                title="Email"
                isSecureText={false}
                onChangeText={setEmail}
                value={email}
                placeholder="Enter your email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                onChangeText={setPassword}
                value={password}
                placeholder="Enter your password"
            />


            <CustomButton
                title="Login"
                setWidth="80%"
                onPress={() => setIsLoading(true)}
                buttonColor="lightcoral"
                pressedButtonColor="lightblue"
            />
            <CustomButton
                title="Sign up"
                setWidth="40%"
                onPress={() => navigation.navigate('SignUp')}
                buttonColor="lightgray"
                pressedButtonColor="gray"
            />



            {isLoading ? <Loading changeIsLoading={() => setIsLoading(false)} /> : null}

        </View>
    );
}

export default LoginPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 10,
        resizeMode: 'contain'
    },
    welcome: {
        fontWeight: 'bold',
        fontSize: 25,
    },
});