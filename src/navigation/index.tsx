import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnboardingScreen from '../screens/onboarding'
import WelcomeScreen from '../screens/onboarding/Welcome'
import SignUpScreen from '../screens/auth/SignUp'

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="onboarding"
                screenOptions={{ headerShown: false }}
            >
                {/* Onboarding screen */}
                <Stack.Screen name="onboarding" component={OnboardingScreen} />
                <Stack.Screen name="welcome" component={WelcomeScreen} />
                {/* Authentication screen */}
                <Stack.Screen name="signup" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
