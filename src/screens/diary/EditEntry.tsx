import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native'
import { SafeArea } from '../../components/safearea'
import { Button, Icon, Image, Text } from '@rneui/themed'
import { useState } from 'react'
import {
    angry,
    depressed,
    happy,
    indifferent,
    laugh,
    sad,
    veryhappy,
    verysad,
} from '../../../assets/emoji'

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

const EditEntry = ({ navigation }: any) => {
    const [text, setText] = useState(
        'Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays.\n\nLast year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.\n\nLast year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.\n\njdjddjdj'
    )

    return (
        <SafeArea style={{ paddingRight: 0, paddingLeft: 0 }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                    paddingVertical: 16,
                    // backgroundColor: 'blue',
                }}
            >
                <Icon
                    type="font-awesome-5"
                    color="black"
                    name="arrow-left"
                    iconStyle={{
                        fontSize: 28,
                        marginRight: 18,
                    }}
                />
                <Text h4>Edit Entry</Text>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                }}
            >
                <Text style={{ fontSize: 18 }}>4th April 2022</Text>
                <Text h2 h2Style={{ fontSize: 32 }}>
                    Summer Vacation!
                </Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    margin: 20,
                }}
            >
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {[
                        'align-left',
                        'align-center',
                        'align-right',
                        'bold',
                        'italic',
                        'underline',
                        'strikethrough',
                    ].map((value, idx) => (
                        <Button
                            key={idx}
                            type="clear"
                            buttonStyle={{
                                paddingHorizontal: 0,
                                paddingVertical: 0,
                                marginLeft: idx === 0 ? 0 : 32,
                            }}
                            icon={
                                <Icon
                                    type="font-awesome-5"
                                    name={value}
                                    size={32}
                                    color="black"
                                />
                            }
                        />
                    ))}
                </ScrollView>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    paddingHorizontal: 20,
                    paddingTop: 16,
                    flex: 1,
                }}
            >
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    onContentSizeChange={(width, height) =>
                        console.log(
                            'width is: ',
                            width,
                            'and height is: ',
                            height
                        )
                    }
                >
                    <TextInput
                        multiline
                        onChangeText={(text) => setText(text)}
                        value={text}
                        style={{ height: '100%', fontSize: 20 }}
                    />
                </ScrollView>
            </View>

            <View style={styles.mood}>
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

const styles = StyleSheet.create({
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
    mood: {
        paddingHorizontal: 20,
        flexDirection: 'row',
    },
})
