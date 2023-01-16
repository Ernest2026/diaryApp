import React from 'react'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Input, Text, useTheme } from '@rneui/themed'
import { john } from '../../../assets/emoji'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RNETheme } from '../../theme'

type EnterPinScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'enterpin'
>

const EnterPin = ({
    navigation,
}: {
    navigation: EnterPinScreenNavigationProp
}) => {
    const { theme } = useTheme()
    const styles = makeStyles(theme)

    return (
        <SafeArea style={{ backgroundColor: theme.colors['grey-100'] }}>
            <View style={styles.screenContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={john} style={styles.image} />
                    <Text h1 h1Style={{ fontSize: 30, textAlign: 'center' }}>
                        Welcome, John
                    </Text>
                    <Text style={{ fontSize: 14 }}>
                        Please enter your passcode
                    </Text>
                    <View style={styles.dotsContainer}>
                        <View style={styles.dotContainer}>
                            <View style={styles.dot}></View>
                        </View>
                        <View style={styles.dotContainer}>
                            <View style={styles.dot}></View>
                        </View>
                        <View style={styles.dotContainer}>
                            <View style={styles.dot}></View>
                        </View>
                        <View style={styles.dotContainer}>
                            <View style={styles.dot}></View>
                        </View>
                    </View>
                </View>

                <View style={styles.numberContainer}>
                    <View style={styles.numberRow}>
                        <Button
                            type="clear"
                            title="1"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="2"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="3"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                    </View>
                    <View style={styles.numberRow}>
                        <Button
                            type="clear"
                            title="4"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="5"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="6"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                    </View>
                    <View style={styles.numberRow}>
                        <Button
                            type="clear"
                            title="7"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="8"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="9"
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                    </View>
                    <View style={styles.numberRow}>
                        <Button
                            type="clear"
                            // title="1"
                            onPress={() =>
                                navigation.navigate('setpinsuccessfully')
                            }
                            buttonStyle={styles.textButtonStyle}
                            titleStyle={styles.textTitleStyle}
                        />
                        <Button
                            type="clear"
                            title="0"
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
                            buttonStyle={styles.textButtonStyle}
                        />
                    </View>
                </View>
            </View>
        </SafeArea>
    )
}

export default EnterPin

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        screenContainer: {
            flex: 1,
            paddingVertical: 30,
            justifyContent: 'space-between',
        },
        image: {
            width: 128,
            maxHeight: '40%',
            resizeMode: 'contain',
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
