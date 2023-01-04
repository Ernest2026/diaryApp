import { Dialog, Icon } from '@rneui/themed'
import { Dialog as DialogType } from '../../screens/diary/Home'
import { TouchableWithoutFeedback } from 'react-native'

const DiaryDialog = ({
    setDialog,
    navigation,
}: {
    setDialog: (data: DialogType) => void
    navigation: any
}) => {
    return (
        <Dialog
            isVisible={true}
            onBackdropPress={() => setDialog({ show: false, index: null })}
            overlayStyle={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                padding: 20,
                borderRadius: 25,
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
                        color="black"
                        style={{ marginRight: 18 }}
                    />
                }
                titleStyle={{
                    color: 'black',
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
                        color="black"
                        style={{ marginRight: 18 }}
                    />
                }
                titleStyle={{
                    color: 'black',
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
