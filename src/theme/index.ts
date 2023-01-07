import { Colors, Theme, createTheme } from '@rneui/themed'
import { colors } from './colors'
import { components } from './components/index'

export type RNETheme = {
    colors: Colors
} & Theme

const theme = createTheme({
    ...colors,
    components,
    mode: 'light', // your light or dark mode value
})

export default theme
