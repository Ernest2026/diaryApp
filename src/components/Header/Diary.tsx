import { Header, Icon } from '@rneui/themed'
import { Image, StyleSheet } from 'react-native'
import { blackLogo } from '../../../assets'

const DiaryHeader = () => {
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
                <Icon
                    iconStyle={{ height: 32 }}
                    type="font-awesome-5"
                    name="pen"
                    color="black"
                />
            }
            centerComponent={<Image style={styles.logo} source={blackLogo} />}
            rightComponent={
                <Icon
                    iconStyle={{ height: 32 }}
                    type="antdesign"
                    name="setting"
                    color="black"
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
