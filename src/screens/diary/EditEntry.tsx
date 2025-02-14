import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, Image, Text, useTheme } from '@rneui/themed'
import { useEffect, useState } from 'react'
import {
    Keyboard,
    ScrollView,
    StyleSheet,
    TouchableWithoutFeedback,
    View
} from 'react-native'
import {
    angry,
    depressed,
    happy,
    indifferent,
    laugh,
    sad,
    veryhappy,
    verysad
} from '../../../assets/emoji'
import TextEditor from '../../components/EditorDom/TextEditor'
import SubHeader from '../../components/Header/SubHeader'
import { SafeArea } from '../../components/safearea'
import { RootStackParamList } from '../../navigation'
import { RNETheme } from '../../theme'

type EditEntryScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'editentry'
>

const emoji = [
    {
        name: 'veryhappy',
        image: veryhappy,
    },
    {
        name: 'happy',
        image: happy,
    },
    {
        name: 'indifferent',
        image: indifferent,
    },
    {
        name: 'sad',
        image: sad,
    },
    {
        name: 'verysad',
        image: verysad,
    },
    {
        name: 'depressed',
        image: depressed,
    },
    {
        name: 'laugh',
        image: laugh,
    },
    {
        name: 'angry',
        image: angry,
    },
]

const EditEntry = ({
    navigation,
}: {
    navigation: EditEntryScreenNavigationProp
}) => {
    const [keyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true) // or some other action
            }
        )
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false) // or some other action
            }
        )

        return () => {
            keyboardDidHideListener.remove()
            keyboardDidShowListener.remove()
        }
    }, [])

    const [editorState, setEditorState] = useState<string | null>(null);
    const [plainText, setPlainText] = useState("");

    // useEffect(() => {
    //   console.log(editorState);
    //   console.log(plainText);
    // }, [plainText])
    

    const { theme } = useTheme()
    const styles = makeStyles(theme)

    return (
        <SafeArea style={styles.container}>
            <SubHeader title="Edit Entry" navigation={navigation} />

            <View
                style={{
                    backgroundColor:
                        theme.mode === 'light' ? '#FFFFFF' : '#484848',
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                }}
            >
                <Text style={{ fontSize: 18 }}>4th April 2022</Text>
                <Text h2 h2Style={{ fontSize: 32 }}>
                    Summer Vacation!
                </Text>
            </View>

            <TextEditor setPlainText={setPlainText} setEditorState={setEditorState} dom={{screen: {width: 500, height: 1500}}} />

            <View
                style={{
                    ...styles.mood,
                    display: keyboardVisible ? 'none' : 'flex',
                }}
            >
                <View
                    style={{
                        width: '30%',
                        justifyContent: 'center',
                    }}
                >
                    <Text h4 h4Style={{ fontSize: 20 }}>
                        Mood
                    </Text>
                </View>
                <View
                    style={{
                        width: '70%',
                        paddingVertical: 10,
                        flexDirection: 'row',
                    }}
                >
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            {emoji.map(({ image }, idx) => {
                                return (
                                    <Button
                                        key={idx}
                                        type="clear"
                                        TouchableComponent={
                                            TouchableWithoutFeedback
                                        }
                                        buttonStyle={
                                            idx === 0
                                                ? styles.activeBtnStyle
                                                : styles.btnStyle
                                        }
                                        containerStyle={{ width: 'auto' }}
                                        icon={
                                            <Image
                                                style={{
                                                    width: idx === 0 ? 42 : 32,
                                                    height: idx === 0 ? 42 : 32,
                                                    resizeMode: 'contain',
                                                }}
                                                // source={emoji === 'sad' ? veryhappy : verysad}
                                                source={image}
                                            />
                                        }
                                    />
                                )
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeArea>
    )
}

export default EditEntry

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        container: {
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: theme.colors['grey-100'],
        },
        btnStyle: {
            paddingHorizontal: 5,
            paddingVertical: 5,
            marginHorizontal: 5,
            borderWidth: 3,
            borderRadius: 50,
            borderColor: 'transparent',
        },
        activeBtnStyle: {
            paddingHorizontal: 5,
            paddingVertical: 5,
            marginHorizontal: 5,
            borderWidth: 3,
            borderRadius: 50,
            borderColor: '#EE3A46',
            backgroundColor: '#F69CA2',
        },
        richTextEditorStyle: {
            // borderBottomLeftRadius: 10,
            // borderBottomRightRadius: 10,
            // borderWidth: 1,
            // borderColor: '#ccaf9b',
            // shadowColor: '#000',
            // shadowOffset: {
            //     width: 0,
            //     height: 2,
            // },
            // shadowOpacity: 0.23,
            // shadowRadius: 2.62,
            elevation: 4,
            fontSize: 20,
        },
        richTextToolbarStyle: {
            width: '100%',
            // backgroundColor: '#c6c3b3',
            // padding: 0,
            // borderColor: '#c6c3b3',
            // borderTopLeftRadius: 10,
            // borderTopRightRadius: 10,
            // borderWidth: 1,
        },
        textContainer: {
            backgroundColor: theme.mode === 'light' ? '#FFFFFF' : '#484848',
            opacity: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingHorizontal: 20,
            paddingTop: 16,
            flex: 1,
        },
        mood: {
            paddingHorizontal: 20,
            flexDirection: 'row',
        },
    })
