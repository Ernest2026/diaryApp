import { Card, Text } from '@rneui/themed'
import { Image, View } from 'react-native'
import { happy, indifferent, veryhappy, verysad } from '../../../assets/emoji'
import { RNETheme } from '../../theme'

export type Data = {
    id: number
    title: string
    text: string
    date: string
    emoji: 'veryhappy' | 'verysad' | 'happy' | 'sad' | 'indifferent'
}

const DiaryCard = ({
    data: { title, text, emoji, date },
    theme,
}: {
    data: Data
    theme: RNETheme
}) => {
    let image

    switch (emoji) {
        case 'veryhappy':
            image = veryhappy
            break

        case 'verysad':
            image = verysad
            break

        case 'happy':
            image = happy
            break

        case 'sad':
            image = verysad
            break

        case 'indifferent':
            image = indifferent
            break

        default:
            image = indifferent
            break
    }

    return (
        <View style={{ marginBottom: 15 }}>
            <Card
                containerStyle={{
                    marginVertical: 0,
                    marginHorizontal: 0,
                    padding: 13,
                    borderRadius: 15,
                    borderWidth: 0,
                    backgroundColor:
                        theme.mode === 'light' ? 'white' : '#242424',
                }}
                wrapperStyle={{
                    flexDirection: 'row',
                }}
            >
                <View
                    style={{
                        width: '70%',
                    }}
                >
                    <Card.Title
                        h4
                        h4Style={{ fontSize: 20, color: theme.colors.black }}
                        style={{
                            textAlign: 'left',
                            marginBottom: 0,
                        }}
                    >
                        {title}
                    </Card.Title>

                    {/* <Text style={{ fontSize: 12 }}>{text.slice(0, 55)}...</Text> */}
                    <Text
                        numberOfLines={2}
                        style={{
                            fontSize: 12,
                        }}
                    >
                        {text}
                    </Text>

                    <Text style={{ fontSize: 9 }}>{date}</Text>
                </View>

                <View
                    style={{
                        width: '30%',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        style={{
                            width: '100%',
                            resizeMode: 'contain',
                        }}
                        // source={emoji === 'sad' ? veryhappy : verysad}
                        source={image}
                    />
                </View>
            </Card>
        </View>
    )
}

export default DiaryCard
