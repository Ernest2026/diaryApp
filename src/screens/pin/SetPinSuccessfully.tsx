import { Button, Text, useTheme } from '@rneui/themed'
import { SafeArea } from '../../components/safearea'
import { Image, StyleSheet, View } from 'react-native'
import { clapping } from '../../../assets/auth'

const SetPinSuccessfully = ({ navigation }: any) => {
    const { theme } = useTheme()

    return (
        <SafeArea>
            <View style={styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        paddingBottom: 50,
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
