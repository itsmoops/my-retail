import React from 'react'
import Icon from 'react-icons-kit'
import styled from 'styled-components'
import { starFull } from 'react-icons-kit/icomoon/starFull'

const Container = styled.div`
    display: inline;
    padding: 5 0 5 0;
`

function Stars(props) {
    const stars = []
    for (let i = 1; i <= 5; i++) {
        if (i <= props.stars) {
            stars.push(
                <span key={i} style={{ color: '#c91300' }}>
                    <Icon icon={starFull} />
                </span>
            )
        } else {
            stars.push(
                <span key={i} style={{ color: '#222222' }}>
                    <Icon icon={starFull} />
                </span>
            )
        }
    }
    return <Container>{stars}</Container>
}

export default Stars
