import { Dialog, Icon } from '@rneui/themed'
import { Dialog as DialogType } from '../../screens/diary/Home'

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
                containerStyle={{
                    alignItems: 'flex-start',
                }}
                buttonStyle={{
                    padding: 0,
                }}
            />
            <Dialog.Button
                title="Edit Entry"
                onPress={() => console.log('Primary Action Clicked!')}
                icon={
                    <Icon
                        name="pen"
                        type="font-awesome-5"
                        color="black"
                        style={{ marginRight: 18 }}
                    />
                }
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
