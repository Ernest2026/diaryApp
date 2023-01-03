import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { thumbup } from '../../../assets/auth'

const SignUpConfirmed = ({ navigation }: any) => {
    const { theme } = useTheme()

    return (
        <SafeArea>
            <View style={styles.container}>
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
            </View>
        </SafeArea>
    )
}

export default SignUpConfirmed

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: '100%',
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
