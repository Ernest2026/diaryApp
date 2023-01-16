import { useTheme } from '@rneui/themed'
import { StatusBar, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    padding-right: 20px;
    padding-left: 20px;
    ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`
