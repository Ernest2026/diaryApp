import { Button, Input, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { icon } from '../../../assets'
import { RNETheme } from '../../theme'

type SignUpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'signup'
>

const SignUp = ({ navigation }: { navigation: SignUpScreenNavigationProp }) => {
    const { theme } = useTheme()
    const styles = makeStyles(theme)

    return (
        <SafeArea style={{ backgroundColor: theme.colors['grey-100'] }}>
            <View style={styles.screenContainer}>
                <Image style={styles.logo} source={icon} />

                <View style={{ paddingBottom: 20 }}>
                    <Text h3 style={{ textAlign: 'center', marginBottom: 24 }}>
                        Sign Up
                    </Text>

                    <Text style={styles.label}>Name</Text>
                    <Input containerStyle={styles.inputContainerStyle} />

                    <Text style={styles.label}>Email Address</Text>
                    <Input containerStyle={styles.inputContainerStyle} />

                    <Text style={styles.label}>Password</Text>
                    <Input containerStyle={styles.inputContainerStyle} />
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
            </View>
        </SafeArea>
    )
}

export default SignUp

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        screenContainer: {
            flex: 1,
            paddingVertical: 50,
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
            // width: '100%',
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
        inputContainerStyle: {
            backgroundColor: theme.colors['grey-75'],
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 5,
        },
    })
