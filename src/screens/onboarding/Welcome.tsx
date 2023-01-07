import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { icon } from '../../../assets'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'welcome'
>

const Welcome = ({
    navigation,
}: {
    navigation: WelcomeScreenNavigationProp
}) => {
    const { theme } = useTheme()

    return (
        <SafeArea
            style={{
                ...styles.container,
                backgroundColor: theme.colors['grey-100'],
            }}
        >
            <Image style={styles.logo} source={icon} />

            <View>
                <Text h1 style={{ textAlign: 'center' }}>
                    Welcome!
                </Text>
                <Text style={{ textAlign: 'center' }}>
                    Sign in to enable backup and syncing for all your diary
                    entries
                </Text>
            </View>

            <View style={styles.btnContainer}>
                <Button
                    title="Create Account"
                    containerStyle={styles.btnContainerStyle}
                    buttonStyle={{
                        backgroundColor: theme.colors['red-100'],
                    }}
                    titleStyle={styles.btnTitleStyle}
                    onPress={() => navigation.navigate('signup')}
                />

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

export default Welcome

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 30,
        justifyContent: 'space-between',
    },
    logo: {
        width: 160,
        maxHeight: '30%',
        resizeMode: 'contain',
    },
    btnContainer: {
        width: '100%',
    },
    btnContainerStyle: {
        width: '90%',
        borderRadius: 10,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 14,
    },
    btnTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})
