import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'

const WelcomeScreen = ({ navigation }: any) => {
    const { theme } = useTheme()

    return (
        <SafeArea>
            <View style={styles.wlcContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/icon.png')}
                />

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
                        // onPress={() => navigation.navigate('welcome')}
                    />
                </View>
            </View>
        </SafeArea>
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    wlcContainer: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        width: 160,
        maxHeight: 160,
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
