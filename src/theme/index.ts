import { createTheme } from '@rneui/themed'
import { colors } from './colors'
import { components } from './components/index'

const theme = createTheme({
    ...colors,
    components,
    mode: 'light', // your light or dark mode value
})

export default theme
