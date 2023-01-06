import { Button, Header as RNEHeader, Icon } from '@rneui/themed'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { blackLogo } from '../../../assets'

const Header = ({ navigation }: any) => {
    return (
        <RNEHeader
            containerStyle={styles.containerStyle}
            leftContainerStyle={{
                justifyContent: 'flex-end',
            }}
            rightContainerStyle={{
                justifyContent: 'flex-end',
            }}
            leftComponent={
                <Button
                    type="clear"
                    buttonStyle={styles.buttonStyle}
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
                    buttonStyle={styles.buttonStyle}
                    TouchableComponent={TouchableWithoutFeedback}
                    onPress={() => navigation.navigate('setting')}
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

export default Header

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#efeef3s',
        borderBottomWidth: 0,
        paddingVertical: 15,
        paddingHorizontal: 20,
    },
    logo: {
        height: 49,
        resizeMode: 'contain',
    },
    buttonStyle: {
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
})
