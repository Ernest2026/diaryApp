import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { thumbup } from '../../../assets/auth'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type SignUpConfirmedScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'signupconfirmed'
>

const SignUpConfirmed = ({
    navigation,
}: {
    navigation: SignUpConfirmedScreenNavigationProp
}) => {
    const { theme } = useTheme()

    return (
        <SafeArea style={styles.container}>
            <Image style={styles.image} source={thumbup} />

            <Text h3 style={{ textAlign: 'center' }}>
                Great! You’ve successfully created an account.
            </Text>

            <Button
                title="Sign In"
                containerStyle={styles.btnContainerStyle}
                buttonStyle={{
                    backgroundColor: theme.colors['red-100'],
                }}
                titleStyle={styles.btnTitleStyle}
                onPress={() => navigation.navigate('signin')}
            />
        </SafeArea>
    )
}

export default SignUpConfirmed

const styles = StyleSheet.create({
    container: {
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: '90%',
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
