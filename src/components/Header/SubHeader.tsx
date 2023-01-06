import { Button, Icon, Text } from '@rneui/themed'
import { TouchableWithoutFeedback, View } from 'react-native'

const SubHeader = ({
    title,
    navigation,
}: {
    title: string
    navigation: any
}) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 16,
            }}
        >
            <Button
                type="clear"
                buttonStyle={{
                    paddingHorizontal: 0,
                    paddingVertical: 0,
                    marginRight: 18,
                }}
                onPress={() => navigation.goBack()}
                TouchableComponent={TouchableWithoutFeedback}
                icon={
                    <Icon
                        type="font-awesome-5"
                        name="arrow-left"
                        size={28}
                        color="black"
                    />
                }
            />
            <Text h4>{title}</Text>
        </View>
    )
}

export default SubHeader
