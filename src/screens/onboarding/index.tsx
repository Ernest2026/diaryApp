import { Button, useTheme } from '@rneui/themed'
import { Text } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { useState } from 'react'
import { screen1, screen2, screen3 } from '../../../assets/onboarding'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'onboarding'
>

const Onboarding = ({
    navigation,
}: {
    navigation: OnboardingScreenNavigationProp
}) => {
    const { theme } = useTheme()
    const styles = makeStyles(theme)
    const [screen, setScreen] = useState(0)

    const screensData = [
        {
            image: screen1,
            title: 'Record your memories',
            text: 'Back up and sync your diary entries across all your devices',
        },
        {
            image: screen2,
            title: 'Never lose your entries',
            text: 'Back up and sync your diary entries across all your devices',
        },
        {
            image: screen3,
            title: 'Protect your privacy',
            text: 'Set a PIN on your diary to keep your entries out of prying eyes.',
        },
    ]

    const handleNextScreen = () => {
        if (screen <= 1) {
            setScreen((screen) => screen + 1)
        }
    }

    return (
        <SafeArea style={{ justifyContent: 'flex-end' }}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.image}
                    source={screensData[screen].image}
                />
            </View>

            <View style={styles.indicatorContainer}>
                {[0, 1, 2].map((idx) => (
                    <View
                        key={idx}
                        style={
                            screen === idx
                                ? styles.activeIndicator
                                : styles.indicator
                        }
                    ></View>
                ))}
            </View>

            <View>
                <Text h1>{screensData[screen].title}</Text>
                <Text>{screensData[screen].text}</Text>
            </View>

            <View style={styles.buttonContainer}>
                {screen !== 2 ? (
                    <>
                        <Button
                            type="clear"
                            TouchableComponent={TouchableWithoutFeedback}
                            titleStyle={{ color: theme.colors['red-75'] }}
                            onPress={() => navigation.navigate('welcome')}
                        >
                            Skip
                        </Button>
                        <Button
                            title="Next"
                            containerStyle={{
                                width: 120,
                                borderRadius: 10,
                            }}
                            buttonStyle={{
                                backgroundColor: theme.colors['red-100'],
                            }}
                            onPress={handleNextScreen}
                        />
                    </>
                ) : (
                    <Button
                        title="Let's Go!"
                        containerStyle={{
                            width: '80%',
                            borderRadius: 10,
                            marginRight: 'auto',
                            marginLeft: 'auto',
                        }}
                        buttonStyle={{
                            backgroundColor: theme.colors['red-100'],
                        }}
                        titleStyle={{
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}
                        onPress={() => navigation.navigate('welcome')}
                    />
                )}
            </View>
        </SafeArea>
    )
}

export default Onboarding

const makeStyles = (theme: any) =>
    StyleSheet.create({
        imageContainer: {
            width: '100%',
            // height: '50%',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        image: {
            width: '100%',
            resizeMode: 'contain',
        },
        indicatorContainer: {
            flexDirection: 'row',
            marginBottom: 5,
        },
        indicator: {
            marginTop: 40,
            marginRight: 3,
            width: 66,
            height: 3,
            backgroundColor: '#C4C4C4',
        },
        activeIndicator: {
            marginTop: 40,
            marginRight: 3,
            width: 66,
            height: 3,
            backgroundColor: theme.colors['red-75'],
        },
        buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 60,
        },
    })
