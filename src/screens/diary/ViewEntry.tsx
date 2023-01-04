import { FAB, Icon, Text } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, ScrollView, TextInput, View } from 'react-native'
import { veryhappy } from '../../../assets/emoji'
import { useState } from 'react'

const ViewEntry = ({ navigation }: any) => {
    const [text, setText] = useState('')
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
                <Text h4>View Entry</Text>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    paddingHorizontal: 32,
                    marginTop: 15,
                    marginBottom: 30,
                }}
            >
                <View style={{ width: '65%' }}>
                    <Text h2 h2Style={{ fontSize: 32 }}>
                        Summer Vacation!
                    </Text>
                    <Text style={{ fontSize: 18 }}>4th April 2022</Text>
                </View>
                <View
                    style={{
                        width: '35%',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            resizeMode: 'contain',
                        }}
                        // source={emoji === 'sad' ? veryhappy : verysad}
                        source={veryhappy}
                    />
                </View>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                    paddingHorizontal: 32,
                    paddingVertical: 16,
                    flex: 1,
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{ fontSize: 20 }}>
                        {`Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays.\n\nLast year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.\n\nLast year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.`}
                    </Text>
                </ScrollView>

                <FAB
                    // loading
                    color="#EE3A46"
                    visible={true}
                    placement="right"
                    icon={{
                        name: 'pen',
                        type: 'font-awesome-5',
                        color: 'white',
                    }}
                    onPress={() => navigation.navigate('editentry')}
                />
            </View>
        </SafeArea>
    )
}

export default ViewEntry
