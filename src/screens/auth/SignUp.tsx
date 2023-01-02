import { Button, Icon, Input, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'

const SignUpScreen = ({ navigation }: any) => {
    const { theme } = useTheme()

    return (
        <SafeArea>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.authContainer}>
                    <View style={styles.logoContainer}>
                        <Image
                            style={styles.logo}
                            source={require('../../../assets/icon.png')}
                        />
                    </View>

                    <View
                        style={{
                            backgroundColor: 'blue',
                            justifyContent: 'flex-end',
                            height: '70%',
                            // justifyContent: 'space-around',
                        }}
                    >
                        <Text
                            h3
                            style={{ textAlign: 'center', marginBottom: 24 }}
                        >
                            Sign Up
                        </Text>

                        <Text style={styles.label}>Name</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Email Address</Text>
                        <TextInput style={styles.input} />

                        <Text style={styles.label}>Password</Text>
                        <TextInput style={styles.input} />

                        <Button
                            title="Sign Up"
                            containerStyle={styles.btnContainerStyle}
                            buttonStyle={{
                                backgroundColor: theme.colors['red-100'],
                            }}
                            titleStyle={styles.btnTitleStyle}
                            // onPress={() => navigation.navigate('welcome')}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeArea>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    authContainer: {
        height: '100%',
        backgroundColor: 'green',
        // justifyContent: 'space-between',
    },
    logoContainer: {
        height: '30%',
        paddingTop: 100,
        backgroundColor: 'green',
        // minHeight: 160,
        alignItems: 'center',
        // justifyContent: 'flex-end',
    },
    logo: {
        width: 160,
        margin: 'auto',
        marginVertical: 30,
        maxHeight: 160,
        resizeMode: 'contain',
    },
    btnContainer: {
        width: '100%',
    },
    btnContainerStyle: {
        width: '80%',
        borderRadius: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        // marginVertical: 56,
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
