import { Button, Icon, Input, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import {
    Image,
    KeyboardAvoidingView,
    StyleSheet,
    TextInput,
    View,
} from 'react-native'
import { icon } from '../../../assets'

const SignIn = ({ navigation }: any) => {
    const { theme } = useTheme()

    return (
        <SafeArea>
            <View
                style={{
                    flex: 1,
                    paddingVertical: 50,
                    justifyContent: 'space-between',
                }}
            >
                <Image style={styles.logo} source={icon} />

                <View style={{ paddingVertical: 20 }}>
                    <Text h3 style={{ textAlign: 'center', marginBottom: 24 }}>
                        Sign In
                    </Text>

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput style={styles.input} />

                    <Text style={styles.label}>Password</Text>
                    <TextInput style={styles.input} />
                </View>

                <Button
                    title="Sign In"
                    containerStyle={styles.btnContainerStyle}
                    buttonStyle={{
                        backgroundColor: theme.colors['red-100'],
                    }}
                    titleStyle={styles.btnTitleStyle}
                    onPress={() => navigation.navigate('home')}
                />
            </View>
        </SafeArea>
    )
}

export default SignIn

const styles = StyleSheet.create({
    logo: {
        width: 160,
        marginRight: 'auto',
        marginLeft: 'auto',
        maxHeight: 160,
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
