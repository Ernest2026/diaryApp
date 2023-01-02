import { createTheme, ThemeProvider } from '@rneui/themed'
import Navigation from './src/navigation'
import theme from './src/theme'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Navigation />
        </ThemeProvider>
    )
}

export default App
