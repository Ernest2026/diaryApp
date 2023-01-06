import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Onboarding from '../screens/onboarding'
import Welcome from '../screens/onboarding/Welcome'
import SignUp from '../screens/auth/SignUp'
import SignIn from '../screens/auth/SignIn'
import SignUpConfirmed from '../screens/auth/SignUpConfirmed'
import Home from '../screens/diary/Home'
import ViewEntry from '../screens/diary/ViewEntry'
import EditEntry from '../screens/diary/EditEntry'
import Setting from '../screens/setting'
import CreatePin from '../screens/pin/CreatePin'
import ConfirmPin from '../screens/pin/ConfirmPin'
import SetPinSuccessfully from '../screens/pin/SetPinSuccessfully'
import EnterPin from '../screens/pin/EnterPin'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export type RootStackParamList = {
    home: undefined
    viewentry: undefined
    editentry: undefined
    setting: undefined
    enterpin: undefined
    createpin: undefined
    confirmpin: undefined
    setpinsuccessfully: undefined
    onboarding: undefined
    welcome: undefined
    signup: undefined
    signin: undefined
    signupconfirmed: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

const Navigation = () => {
    const isLoggedIn = useSelector((state: RootState) => state.ui.isLoggedIn)

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="onboarding"
                screenOptions={{ headerShown: false }}
            >
                {isLoggedIn ? (
                    <Stack.Group>
                        {/* Diary Screen */}
                        <Stack.Screen name="home" component={Home} />
                        <Stack.Screen name="viewentry" component={ViewEntry} />
                        <Stack.Screen name="editentry" component={EditEntry} />
                        {/* Settings Screen */}
                        <Stack.Screen name="setting" component={Setting} />
                        {/* PIN screen */}
                        <Stack.Screen name="enterpin" component={EnterPin} />
                        <Stack.Screen name="createpin" component={CreatePin} />
                        <Stack.Screen
                            name="confirmpin"
                            component={ConfirmPin}
                        />
                        <Stack.Screen
                            name="setpinsuccessfully"
                            component={SetPinSuccessfully}
                        />
                    </Stack.Group>
                ) : (
                    <Stack.Group>
                        {/* Onboarding screen */}
                        <Stack.Screen
                            name="onboarding"
                            component={Onboarding}
                        />
                        <Stack.Screen name="welcome" component={Welcome} />
                        {/* Authentication screen */}
                        <Stack.Screen name="signup" component={SignUp} />
                        <Stack.Screen name="signin" component={SignIn} />
                        <Stack.Screen
                            name="signupconfirmed"
                            component={SignUpConfirmed}
                        />
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
