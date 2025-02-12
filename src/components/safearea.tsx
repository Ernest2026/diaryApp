import { useTheme } from '@rneui/themed'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    padding-right: 20px;
    padding-left: 20px;
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`
