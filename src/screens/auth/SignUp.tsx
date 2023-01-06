import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import { icon } from '../../../assets'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type SignUpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'signup'
>

const SignUp = ({ navigation }: { navigation: SignUpScreenNavigationProp }) => {
    const { theme } = useTheme()

    return (
        <SafeArea style={styles.container}>
            <Image style={styles.logo} source={icon} />

            <View style={{ paddingBottom: 20 }}>
                <Text h3 style={{ textAlign: 'center', marginBottom: 24 }}>
                    Sign Up
                </Text>

                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Email Address</Text>
                <TextInput style={styles.input} />

                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} />
            </View>

            <Button
                title="Sign Up"
                containerStyle={styles.btnContainerStyle}
                buttonStyle={{
                    backgroundColor: theme.colors['red-100'],
                }}
                titleStyle={styles.btnTitleStyle}
                onPress={() => navigation.navigate('signupconfirmed')}
            />
        </SafeArea>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        justifyContent: 'space-between',
    },
    logo: {
        width: 160,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxHeight: '25%',
        resizeMode: 'contain',
    },
    btnContainerStyle: {
        width: '80%',
        borderRadius: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    btnTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        marginTop: 12,
    },
    input: {
        backgroundColor: '#DCDBE7',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 5,
    },
})
