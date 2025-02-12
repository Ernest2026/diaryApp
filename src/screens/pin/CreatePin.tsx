import React, { useEffect, useState } from 'react'
import { SafeArea } from '../../components/safearea'
import { StyleSheet, View } from 'react-native'
import { Button, Input, Text, useTheme } from '@rneui/themed'
import SubHeader from '../../components/Header/SubHeader'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RNETheme } from '../../theme'
import { useDispatch, useSelector } from 'react-redux'
import { addInitialPin } from '../../store/pinSlice'
import { RootState } from '../../store'

type CreatePinScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'createpin'
>

const CreatePin = ({
    navigation,
}: {
    navigation: CreatePinScreenNavigationProp
}) => {
    const [pin, setPin] = useState('')
    const dispatch = useDispatch()

    const { theme } = useTheme()
    const styles = makeStyles(theme)

    const handlePinPress = (pinVal: string, value: string) => {
        const newPin = pinVal + value

        if (pinVal.length < 3) {
            setPin(newPin)
        } else {
            setPin('')
            dispatch(addInitialPin(newPin))
            navigation.navigate('confirmpin')
        }
    }

    const handleDeletePinPress = () => {
        setPin((oldPin) => oldPin.slice(0, -1))
    }

    return (
        <SafeArea style={styles.container}>
            <SubHeader title="Create PIN" navigation={navigation} />

            <View style={{ marginHorizontal: 20, alignItems: 'center' }}>
                <Text h1 h1Style={{ fontSize: 30, textAlign: 'center' }}>
                    Create a new PIN
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
                        onPress={() => handlePinPress(pin, '1')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="2"
                        onPress={() => handlePinPress(pin, '2')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="3"
                        onPress={() => handlePinPress(pin, '3')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        title="4"
                        onPress={() => handlePinPress(pin, '4')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="5"
                        onPress={() => handlePinPress(pin, '5')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="6"
                        onPress={() => handlePinPress(pin, '6')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        title="7"
                        onPress={() => handlePinPress(pin, '7')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="8"
                        onPress={() => handlePinPress(pin, '8')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="9"
                        onPress={() => handlePinPress(pin, '9')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                </View>
                <View style={styles.numberRow}>
                    <Button
                        type="clear"
                        // title="1"
                        onPress={() => navigation.navigate('confirmpin')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
                        titleStyle={styles.textTitleStyle}
                    />
                    <Button
                        type="clear"
                        title="0"
                        onPress={() => handlePinPress(pin, '0')}
                        buttonStyle={styles.textButtonStyle}
                        containerStyle={{width: 'auto'}}
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
                        containerStyle={{width: 'auto'}}
                    />
                </View>
            </View>
        </SafeArea>
    )
}

export default CreatePin

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
