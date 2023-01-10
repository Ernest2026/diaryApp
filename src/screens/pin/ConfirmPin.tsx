import React, { useState } from 'react'
import { SafeArea } from '../../components/safearea'
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Input, Text } from '@rneui/themed'
import SubHeader from '../../components/Header/SubHeader'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RNETheme } from '../../theme'
import { useTheme } from '@rneui/themed'
import { getItem, saveItem } from '../../hooks/useSecureStore'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'

type ConfirmPinScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'confirmpin'
>

const ConfirmPin = ({
    navigation,
}: {
    navigation: ConfirmPinScreenNavigationProp
}) => {
    const [pin, setPin] = useState('')
    const initialPin = useSelector((state: RootState) => state.pin.initialPin)

    const { theme } = useTheme()
    const styles = makeStyles(theme)

    setTimeout(async () => {
        const pini = await getItem('pin')
        console.log(pini)
    }, 2000)

    const handlePinPress = async (pinVal: string, value: string) => {
        const newPin = pinVal + value

        if (pinVal.length < 3) {
            setPin(newPin)
        } else if (newPin === initialPin) {
            setPin('')
            await saveItem('pin', newPin)
            navigation.navigate('setpinsuccessfully')
        } else {
            setPin('')
            navigation.navigate('createpin')
        }
    }

    const handleDeletePinPress = () => {
        setPin((oldPin) => oldPin.slice(0, -1))
    }

    return (
        <SafeArea style={styles.container}>
            <SubHeader title="Create PIN" navigation={navigation} />

            <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <Text h1 h1Style={{ fontSize: 36, textAlign: 'center' }}>
                    Re-enter your new PIN
                </Text>
                <Text style={{ fontSize: 14 }}>Please enter your passcode</Text>
                <View style={styles.dotsContainer}>
                    {[1, 2, 3, 4].map((idx) => {
                        return (
                            <View key={idx} style={styles.dotContainer}>
                                {pin.length >= idx && (
                                    <View style={styles.dot}></View>
                                )}
                            </View>
                        )
                    })}
                </View>
            </View>

            <View style={styles.numberContainer}>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        title="1"
                        onPress={(e) => handlePinPress(pin, '1')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="2"
                        onPress={(e) => handlePinPress(pin, '2')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="3"
                        onPress={(e) => handlePinPress(pin, '3')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        title="4"
                        onPress={(e) => handlePinPress(pin, '4')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="5"
                        onPress={(e) => handlePinPress(pin, '5')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="6"
                        onPress={(e) => handlePinPress(pin, '6')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        title="7"
                        onPress={(e) => handlePinPress(pin, '7')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="8"
                        onPress={(e) => handlePinPress(pin, '8')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="9"
                        onPress={(e) => handlePinPress(pin, '9')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        // title="1"
                        onPress={() => navigation.navigate('confirmpin')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="0"
                        onPress={(e) => handlePinPress(pin, '0')}
                        buttonStyle={styles.textButtonStyle}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        icon={{
                            name: 'backspace',
                            type: 'font-awesome-5',
                            size: 32,
                            color: theme.colors.black,
                        }}
                        onPress={handleDeletePinPress}
                        buttonStyle={styles.textButtonStyle}
                    />
                </View>
            </View>
        </SafeArea>
    )
}

export default ConfirmPin

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        container: {
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: theme.colors['grey-100'],
            justifyContent: 'space-between',
        },
        dotsContainer: {
            flexDirection: 'row',
            marginTop: 20,
            width: 250,
            justifyContent: 'space-between',
        },
        dotContainer: {
            width: 42,
            height: 42,
            borderRadius: 10,
            backgroundColor: '#C9C9DC',
            justifyContent: 'center',
            alignItems: 'center',
        },
        dot: {
            width: 10,
            height: 10,
            backgroundColor: 'black',
            borderRadius: 5,
        },
        numberContainer: {
            marginHorizontal: 20,
            alignItems: 'center',
            marginBottom: 40,
        },
        numberRow: {
            flexDirection: 'row',
            width: 300,
            justifyContent: 'space-between',
        },
        textButtonStyle: {
            minWidth: 72,
            minHeight: 78,
        },
        textTitleStyle: {
            color: theme.colors.black,
            fontSize: 40,
            fontWeight: 'bold',
        },
    })
