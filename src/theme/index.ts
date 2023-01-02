import { createTheme } from '@rneui/themed'
import { colors } from './colors'

const theme = createTheme({
    ...colors,
    mode: 'light', // your light or dark mode value
})

export default theme
