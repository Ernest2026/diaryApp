import { Button, Header as RNEHeader, Icon, useTheme } from '@rneui/themed'
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { blackLogo } from '../../../assets'
import { RootStackParamList } from '../../navigation'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import Svg, { Path } from 'react-native-svg'

type HeaderNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'home'
>

const Header = ({ navigation }: { navigation: HeaderNavigationProp }) => {
    const { theme, updateTheme } = useTheme()
    return (
        <RNEHeader
            statusBarProps={{
                backgroundColor: 'transparent',
            }}
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
                            color={theme.colors.black}
                        />
                    }
                />
            }
            // centerComponent={<Image style={styles.logo} source={blackLogo} />}
            centerComponent={
                <Svg
                    width={71}
                    height={49}
                    fill="none"
                    // xmlns="http://www.w3.org/2000/svg"
                >
                    <Path
                        d="M.845 2.941a1.942 1.942 0 0 1 1.77-2.1L11.682.07c7.462-.636 12.96 3.168 13.548 10.09.588 6.921-4.183 11.6-11.646 12.237l-9.066.772a1.94 1.94 0 0 1-2.1-1.77s-.22-7.142-.423-9.523C1.806 9.64.846 2.94.846 2.94Zm11.92 13.613c3.157-.269 5.166-2.335 4.875-5.748-.29-3.414-2.62-5.11-5.776-4.841l-2.211.188a.948.948 0 0 0-.867 1.027l.74 8.697a.95.95 0 0 0 1.027.867l2.213-.19ZM31.988.81l3.655.342a1.941 1.941 0 0 1 1.75 2.115s-.335 6.692-.54 8.869c-.227 2.434-1.192 9.575-1.192 9.575a1.942 1.942 0 0 1-2.114 1.75l-3.655-.342a1.941 1.941 0 0 1-1.751-2.115s.495-7.276.72-9.672c.207-2.215 1.014-8.772 1.014-8.772A1.94 1.94 0 0 1 31.988.81ZM55.82 18.285l-8.478.776-.778 2.744a1.942 1.942 0 0 1-1.689 1.404l-3.367.308a1.941 1.941 0 0 1-2.019-2.546l3.528-9.49 2.843-9.696a1.941 1.941 0 0 1 1.665-1.32l4.867-.446a1.941 1.941 0 0 1 1.877.996l4.22 8.725 5.533 8.985a1.942 1.942 0 0 1-1.524 2.87l-3.495.32a1.941 1.941 0 0 1-1.916-1.073l-1.267-2.557ZM52.93 12.4l-1.78-3.597a.502.502 0 0 0-.93.086l-1.099 3.86a.503.503 0 0 0 .528.635l2.88-.264a.503.503 0 0 0 .4-.72ZM9.355 42.218l-.645-.076a.699.699 0 0 0-.776.613l-.421 3.583a1.327 1.327 0 0 1-1.473 1.163l-4.868-.574a1.327 1.327 0 0 1-1.163-1.473s1.369-7.865 1.68-10.517c.266-2.253.629-9.104.629-9.104a1.327 1.327 0 0 1 1.473-1.162l9.394 1.107c6.198.73 9.758 4.437 9.151 9.587-.377 3.211-2.187 5.448-5.02 6.5l2.706 5.194c.493.944-.273 2.053-1.331 1.93l-4.819-.567a1.327 1.327 0 0 1-1.023-.708l-2.478-4.792a1.32 1.32 0 0 0-1.016-.704ZM12.03 31.51l-2.178-.257a.56.56 0 0 0-.622.491l-.482 4.101a.561.561 0 0 0 .488.622l2.177.256c2.067.244 3.168-.626 3.358-2.247.191-1.621-.678-2.724-2.744-2.967h.003ZM42.033 44.455l-.169 3.039a1.327 1.327 0 0 1-1.398 1.25l-15.949-.886a1.326 1.326 0 0 1-1.25-1.395s.712-7.275.846-9.699c.14-2.506.249-10.025.249-10.025a1.327 1.327 0 0 1 1.398-1.251l15.534.863a1.327 1.327 0 0 1 1.25 1.399l-.168 3.04a1.327 1.327 0 0 1-1.398 1.25l-8.781-.49a.664.664 0 0 0-.7.627l-.073 1.293a.666.666 0 0 0 .627.701l7.47.415a1.327 1.327 0 0 1 1.252 1.398l-.155 2.785a1.33 1.33 0 0 1-.886 1.178 1.325 1.325 0 0 1-.512.073l-7.47-.415a.665.665 0 0 0-.701.627l-.092 1.612a.666.666 0 0 0 .627.701l9.196.512a1.327 1.327 0 0 1 1.253 1.398ZM64.758 41.97l.387 3.02a1.326 1.326 0 0 1-1.147 1.485l-15.843 2.032a1.326 1.326 0 0 1-1.485-1.147s-.767-8.216-1.119-10.954c-.276-2.16-1.393-8.639-1.393-8.639a1.328 1.328 0 0 1 1.147-1.485l15.431-1.98a1.327 1.327 0 0 1 1.485 1.148l.387 3.019a1.326 1.326 0 0 1-1.147 1.485l-8.723 1.119a.665.665 0 0 0-.575.744l.165 1.284a.663.663 0 0 0 .744.575l7.421-.951a1.325 1.325 0 0 1 1.485 1.147l.355 2.766a1.328 1.328 0 0 1-1.148 1.485l-7.42.951a.665.665 0 0 0-.576.744l.206 1.602a.665.665 0 0 0 .743.575l9.136-1.171a1.326 1.326 0 0 1 1.484 1.147ZM68.557 46.08a1.896 1.896 0 1 0 0-3.792 1.896 1.896 0 0 0 0 3.792Z"
                        fill={theme.colors.black}
                    />
                </Svg>
            }
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
                            color={theme.colors.black}
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
