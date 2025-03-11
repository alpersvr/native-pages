import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import { Loading, CustomTextInput, CustomButton } from '../component/';
import { useSelector, useDispatch } from 'react-redux';
import { setEmail,setIsLoading, setPassword } from '../redux/userSlice';

const LoginPage = ({ navigation }) => {

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [result, setResult] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    //userSlice içersindeki state bilgilerini almak için useSelector fonksiyonunu kullanıyoruz.
    //useSelector fonksiyonu ile state içerisindeki user objesini alıyoruz.
    //user objesinin içerisindeki email ve password bilgilerini almak için destructuring işlemi yapıyoruz.
    //Bu bilgileri kullanarak login işlemi yapacağız.
    const { email,password,isLoading} = useSelector((state) => state.user);

    //userSlice içersindeki reducer yapılarını kullanma veya veri gönderme 
    const dispatch = useDispatch();


    return (
        <View style={styles.container}>

            <Text style={styles.welcome}>Welcome</Text>
            <Image
                source={require('../../assets/image/loginicon.png')}
                style={styles.image} />

            <CustomTextInput
                title="Email"
                isSecureText={false}
                onChangeText={(text) => dispatch(setEmail(text))}
                value={email}
                placeholder="Enter your email"
            />

            <CustomTextInput
                title="Password"
                isSecureText={true}
                onChangeText={(password) => dispatch(setPassword(password))}
                value={password}
                placeholder="Enter your password"
            />


            <CustomButton
                title="Login"
                setWidth="80%"
                onPress={() => dispatch(setIsLoading(true))}
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



            {isLoading ? <Loading changeIsLoading={() => dispatch(setIsLoading(false))} /> : null}

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