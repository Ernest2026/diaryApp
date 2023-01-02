import { useTheme } from '@rneui/themed'
import { StatusBar, SafeAreaView } from 'react-native'
import styled from 'styled-components'

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
    padding-right: 32px;
    padding-left: 32px;
    background-color: #efeef3;
    ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`
