import { FlatList, TouchableOpacity } from 'react-native'
import { FAB, Input, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import DiaryCard, { Data } from '../../components/Card/Diary'
import DiaryHeader from '../../components/Header/Diary'
import DiaryDialog from '../../components/Dialog/Diary'
import { useState } from 'react'

export type Dialog = {
    show: boolean
    index: null | number
}

const CardData: Data[] = [
    {
        id: 1,
        title: 'Summer Vacation!',
        text: 'Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '17th April 2022',
        emoji: 'veryhappy',
    },
    {
        id: 2,
        title: 'Eh?',
        text: 'Due to the inconspicuous nature of the Jacksons, I am unable to reac. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '11th April 2022',
        emoji: 'indifferent',
    },
    {
        id: 3,
        title: 'Feeling Down',
        text: 'Today wasn’t the best of days. First of all, my cat swallowed my AirPod. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '10th April 2022',
        emoji: 'verysad',
    },
    {
        id: 4,
        title: 'On The Road!',
        text: 'Took a little road trip with my friends to the museum in the next. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '7th April 2022',
        emoji: 'happy',
    },
    {
        id: 5,
        title: '* sign *',
        text: 'Got a rejection letter today. Not too happy about that, but I just have. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '4th April 2022',
        emoji: 'sad',
    },
    {
        id: 6,
        title: 'Summer Vacation!',
        text: 'Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '17th April 2022',
        emoji: 'veryhappy',
    },
    {
        id: 7,
        title: 'Eh?',
        text: 'Due to the inconspicuous nature of the Jacksons, I am unable to reac. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '11th April 2022',
        emoji: 'indifferent',
    },
    {
        id: 8,
        title: 'Feeling Down',
        text: 'Today wasn’t the best of days. First of all, my cat swallowed my AirPod. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '10th April 2022',
        emoji: 'verysad',
    },
    {
        id: 9,
        title: 'On The Road!',
        text: 'Took a little road trip with my friends to the museum in the next. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '7th April 2022',
        emoji: 'happy',
    },
    {
        id: 10,
        title: '* sign *',
        text: 'Got a rejection letter today. Not too happy about that, but I just have. Today, my summer holidays have begun. I have some plans for summer vacation. I’m planning to go to a wildlife sanctuary and for boating in a lake. I just don’t want to spend a single moment idly and definitely want to enjoy every bit of these holidays. Last year, I did not plan my vacations, but this year, I will do everything to make them interesting. I now need to go. I’m excited and eagerly looking forward to my holidays.',
        date: '4th April 2022',
        emoji: 'sad',
    },
]

const HomeScreen = ({ navigation }: any) => {
    const { theme } = useTheme()
    const [dialog, setDialog] = useState<Dialog>({ show: false, index: null })

    return (
        <>
            <DiaryHeader navigation={navigation} />

            <SafeArea style={{ marginTop: 16 }}>
                <Input
                    inputContainerStyle={{
                        backgroundColor: theme.colors.white,
                        paddingHorizontal: 17,
                        paddingVertical: 15,
                        borderRadius: 15,
                    }}
                    inputStyle={{
                        fontSize: 12,
                    }}
                    placeholder="Search Entries"
                    rightIcon={{
                        type: 'font-awesome',
                        name: 'search',
                        color: '#C9C9DC',
                    }}
                />

                <FlatList
                    style={{ marginTop: 15 }}
                    showsVerticalScrollIndicator={false}
                    data={CardData}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() =>
                                setDialog({ show: true, index: item.id })
                            }
                        >
                            <DiaryCard data={item} />
                        </TouchableOpacity>
                    )}
                />
            </SafeArea>

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

            {dialog.show && (
                <DiaryDialog setDialog={setDialog} navigation={navigation} />
            )}
        </>
    )
}

export default HomeScreen
