import { SafeArea } from '../../components/safearea'
import { Image, TouchableWithoutFeedback, View } from 'react-native'
import { Button, Icon, Switch, Text, useTheme } from '@rneui/themed'
import { avatar } from '../../../assets/emoji'

const Setting = ({ navigation }: any) => {
    const { theme } = useTheme()
    return (
        <SafeArea>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 16,
                }}
            >
                {/* <Icon
                    type="font-awesome-5"
                    color="black"
                    name="arrow-left"
                    iconStyle={{
                        fontSize: 28,
                        marginRight: 18,
                    }}
                /> */}
                <Button
                    type="clear"
                    buttonStyle={{
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                        marginRight: 18,
                    }}
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => navigation.goBack()}
                    icon={{
                        type: 'font-awesome-5',
                        color: 'black',
                        name: 'arrow-left',
                        size: 28,
                    }}
                />
                <Text h4>Settings</Text>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    flex: 1,
                    borderRadius: 35,
                    paddingHorizontal: 24,
                    paddingVertical: 44,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Change Profile Image
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '20%',
                        }}
                    >
                        <Button
                            type="clear"
                            buttonStyle={{
                                paddingHorizontal: 0,
                                paddingVertical: 0,
                            }}
                            TouchableComponent={TouchableWithoutFeedback}
                            // onPress={() => navigation.navigate('setting')}
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
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 8,
                    }}
                >
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Dark Mode
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '20%',
                        }}
                    >
                        <Switch color="#F26B74" value={false} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 8,
                    }}
                >
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            PIN Lock
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '20%',
                        }}
                    >
                        <Switch color="#F26B74" value={false} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 8,
                    }}
                >
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Sync Automatically
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '20%',
                        }}
                    >
                        <Switch color="#F26B74" value={false} />
                    </View>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 8,
                    }}
                >
                    <View style={{ width: '75%' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                            Sync Now
                        </Text>
                    </View>

                    <View
                        style={{
                            width: '20%',
                        }}
                    >
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
                }}
                // onPress={() => navigation.navigate('welcome')}
            >
                Logout
            </Button>
        </SafeArea>
    )
}

export default Setting
