import styled, { css } from 'styled-components'
import { Flex } from 'rebass'

export default styled(Flex)`
    ${props => css`
        padding-top: 25px;
        ${props.theme.screen.small} {
            padding-top: 50px;
            height: 100%;
        }
    `};
`
