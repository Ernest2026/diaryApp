import { Button, Header, Icon } from '@rneui/themed'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { blackLogo } from '../../../assets'

const DiaryHeader = ({ navigation }: any) => {
    return (
        <Header
            containerStyle={{
                backgroundColor: 'transparent',
                paddingVertical: 15,
            }}
            leftContainerStyle={{
                justifyContent: 'flex-end',
            }}
            rightContainerStyle={{
                justifyContent: 'flex-end',
            }}
            leftComponent={
                <Button
                    type="clear"
                    buttonStyle={{
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                    }}
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => navigation.navigate('editentry')}
                    icon={
                        <Icon
                            type="font-awesome-5"
                            name="pen"
                            size={32}
                            color="black"
                        />
                    }
                />
            }
            centerComponent={<Image style={styles.logo} source={blackLogo} />}
            rightComponent={
                <Button
                    type="clear"
                    buttonStyle={{
                        paddingHorizontal: 0,
                        paddingVertical: 0,
                    }}
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => navigation.navigate('editentry')}
                    icon={
                        <Icon
                            type="font-awesome-5"
                            name="cog"
                            size={32}
                            color="black"
                        />
                    }
                />
            }
        />
    )
}

export default DiaryHeader

const styles = StyleSheet.create({
    logo: {
        height: 49,
        resizeMode: 'contain',
    },
})
