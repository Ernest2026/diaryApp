import { Dialog, Icon, useTheme } from '@rneui/themed'
import { Dialog as DialogType } from '../../screens/diary/Home'
import { TouchableWithoutFeedback } from 'react-native'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

type DiaryDialogNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'home'
>

const DiaryDialog = ({
    setDialog,
    navigation,
}: {
    setDialog: (data: DialogType) => void
    navigation: DiaryDialogNavigationProp
}) => {
    const { theme } = useTheme()

    return (
        <Dialog
            isVisible={true}
            onBackdropPress={() => setDialog({ show: false, index: null })}
            overlayStyle={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: 20,
                borderRadius: 25,
                backgroundColor: theme.mode === 'light' ? '#FFFFFF' : '#242424',
            }}
        >
            <Dialog.Button
                title="View Entry"
                TouchableComponent={TouchableWithoutFeedback}
                onPress={() => {
                    setDialog({ show: false, index: null })
                    navigation.navigate('viewentry')
                }}
                icon={
                    <Icon
                        name="eye"
                        type="font-awesome-5"
                        color={theme.colors.black}
                        style={{ marginRight: 18 }}
                    />
                }
                titleStyle={{
                    color: theme.colors.black,
                }}
                containerStyle={{
                    alignItems: 'flex-start',
                }}
                buttonStyle={{
                    padding: 0,
                }}
            />
            <Dialog.Button
                title="Edit Entry"
                TouchableComponent={TouchableWithoutFeedback}
                onPress={() => {
                    setDialog({ show: false, index: null })
                    navigation.navigate('editentry')
                }}
                icon={
                    <Icon
                        name="pen"
                        type="font-awesome-5"
                        color={theme.colors.black}
                        style={{ marginRight: 18 }}
                    />
                }
                titleStyle={{
                    color: theme.colors.black,
                }}
                containerStyle={{
                    alignItems: 'flex-start',
                    marginTop: 15,
                }}
                buttonStyle={{
                    padding: 0,
                }}
            />
            <Dialog.Button
                title="Delete Entry"
                TouchableComponent={TouchableWithoutFeedback}
                onPress={() => console.log('Primary Action Clicked!')}
                icon={
                    <Icon
                        name="trash"
                        type="font-awesome-5"
                        color="#EE3A46"
                        style={{ marginRight: 18 }}
                    />
                }
                titleStyle={{
                    color: '#EE3A46',
                }}
                containerStyle={{
                    alignItems: 'flex-start',
                    marginTop: 15,
                }}
                buttonStyle={{
                    padding: 0,
                }}
            />
        </Dialog>
    )
}

export default DiaryDialog
