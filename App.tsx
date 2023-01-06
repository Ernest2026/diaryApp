import { ThemeProvider } from '@rneui/themed'
import Navigation from './src/navigation'
import theme from './src/theme'
import { store } from './src/store'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Navigation />
            </ThemeProvider>
        </Provider>
    )
}

export default App
