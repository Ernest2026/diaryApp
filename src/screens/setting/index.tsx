import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Switch, Text, useTheme } from '@rneui/themed'
import { avatar } from '../../../assets/emoji'
import SubHeader from '../../components/Header/SubHeader'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../navigation'
import { RNETheme } from '../../theme'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { changeMode } from '../../store/uiSlice'

type SettingScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'setting'
>

const Setting = ({
    navigation,
}: {
    navigation: SettingScreenNavigationProp
}) => {
    const { theme, updateTheme } = useTheme()
    const styles = makeStyles(theme)

    const darkMode = useSelector((state: RootState) => state.ui.darkMode)
    const dispatch = useDispatch()

    const handleValueChange = (mode: boolean) => {
        updateTheme({
            mode: mode ? 'dark' : 'light',
        })
        dispatch(changeMode())
        return
    }

    return (
        <SafeArea style={styles.container}>
            <SubHeader title="Settings" navigation={navigation} />

            <View style={styles.itemsContainer}>
                <View style={styles.itemContainer}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Change Profile Image
                        </Text>
                    </View>

                    <View style={{ width: '20%' }}>
                        <Button
                            type="clear"
                            buttonStyle={{
                                paddingHorizontal: 0,
                                paddingVertical: 0,
                            }}
                            TouchableComponent={TouchableWithoutFeedback}
                            onPress={() => navigation.navigate('setting')}
                            icon={
                                <Image
                                    source={avatar}
                                    style={{
                                        width: '100%',
                                        resizeMode: 'contain',
                                    }}
                                />
                            }
                        />
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Dark Mode
                        </Text>
                    </View>

                    <View style={{ width: '20%' }}>
                        <Switch
                            color="#F26B74"
                            value={darkMode}
                            onValueChange={(darkMode) =>
                                handleValueChange(darkMode)
                            }
                        />
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            PIN Lock
                        </Text>
                    </View>

                    <View style={{ width: '20%' }}>
                        <Switch
                            color="#F26B74"
                            value={false}
                            onValueChange={() =>
                                navigation.navigate('createpin')
                            }
                        />
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Sync Automatically
                        </Text>
                    </View>

                    <View style={{ width: '20%' }}>
                        <Switch
                            color="#F26B74"
                            value={false}
                            onValueChange={() =>
                                navigation.navigate('enterpin')
                            }
                        />
                    </View>
                </View>
                <View style={styles.itemContainer}>
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Sync Now
                        </Text>
                    </View>

                    <View style={{ width: '20%' }}>
                        <Button
                            type="clear"
                            buttonStyle={{
                                paddingHorizontal: 0,
                                paddingVertical: 8,
                            }}
                            TouchableComponent={TouchableWithoutFeedback}
                            // onPress={() => navigation.navigate('setting')}
                            icon={{
                                name: 'chevron-right',
                                type: 'font-awesome-5',
                                size: 27,
                                color: theme.colors.black,
                            }}
                        />
                    </View>
                </View>
            </View>

            <Button
                type="clear"
                TouchableComponent={TouchableWithoutFeedback}
                buttonStyle={{ paddingVertical: 21 }}
                titleStyle={{
                    color: theme.colors['red-75'],
                    fontWeight: 'bold',
                    fontSize: 22,
                }}
                // onPress={() => navigation.navigate('welcome')}
            >
                Logout
            </Button>
        </SafeArea>
    )
}

export default Setting

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        container: {
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: theme.colors['grey-100'],
        },
        itemsContainer: {
            backgroundColor: theme.mode === 'light' ? '#FFFFFF' : '#242424',
            flex: 1,
            borderRadius: 35,
            paddingHorizontal: 24,
            paddingVertical: 44,
            marginHorizontal: 20,
            marginTop: 15,
        },
        itemContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 8,
        },
    })
