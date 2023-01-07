import { Colors, FAB, Icon, Text, Theme, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, ScrollView, StyleSheet, TextInput, View } from 'react-native'
import { veryhappy } from '../../../assets/emoji'
import SubHeader from '../../components/Header/SubHeader'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RNETheme } from '../../theme'

type ViewEntryScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'viewentry'
>

const ViewEntry = ({
    navigation,
}: {
    navigation: ViewEntryScreenNavigationProp
}) => {
    const { theme } = useTheme()
    const styles = makeStyles(theme)

    return (
        <SafeArea style={styles.container}>
            <SubHeader title="View Entry" navigation={navigation} />

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
                        source={veryhappy}
                    />
                </View>
            </View>

            <View style={styles.textContainer}>
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

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        container: {
            paddingRight: 0,
            paddingLeft: 0,
            backgroundColor: theme.colors['grey-100'],
        },
        textContainer: {
            backgroundColor: theme.mode === 'light' ? '#FFFFFF' : '#484848',
            borderTopLeftRadius: 60,
            borderTopRightRadius: 60,
            paddingHorizontal: 32,
            paddingVertical: 16,
            flex: 1,
        },
    })
