import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { clapping } from '../../../assets/auth'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RNETheme } from '../../theme'

type SetPinScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'setpinsuccessfully'
>

const SetPinSuccessfully = ({
    navigation,
}: {
    navigation: SetPinScreenNavigationProp
}) => {
    const { theme } = useTheme()
    const styles = makeStyles(theme)

    return (
        <SafeArea style={{ backgroundColor: theme.colors['grey-100'] }}>
            <View style={styles.screenContainer}>
                <Image style={styles.image} source={clapping} />

                <Text h3 style={{ textAlign: 'center' }}>
                    You’ve successfully set a new PIN!
                </Text>

                <Button
                    title="Go back to settings"
                    containerStyle={styles.btnContainerStyle}
                    buttonStyle={{
                        backgroundColor: theme.colors['red-100'],
                    }}
                    titleStyle={styles.btnTitleStyle}
                    onPress={() => navigation.navigate('setting')}
                />
            </View>
        </SafeArea>
    )
}

export default SetPinSuccessfully

const makeStyles = (theme: RNETheme) =>
    StyleSheet.create({
        screenContainer: {
            flex: 1,
            paddingVertical: 50,
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        image: {
            width: '90%',
            resizeMode: 'contain',
        },
        btnContainerStyle: {
            width: '80%',
            borderRadius: 10,
            marginRight: 'auto',
            marginLeft: 'auto',
        },
        btnTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        label: {
            marginTop: 12,
        },
        input: {
            backgroundColor: '#DCDBE7',
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 5,
        },
    })
