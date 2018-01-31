import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Text, Link } from 'rebass'
import { format } from 'date-fns'
import Divider from './divider'

const StyledDiv = styled.div`
    background: #efefef;
    width: 100%;
    padding: 10px;
    margin-top: 20px;

    @media screen and (min-width: 40em) {
        margin-top: 0px;
    }
`

function Reviews(props) {
    return (
        <StyledDiv>
            <Flex>
                <Box w={1 / 2} pl={5} pr={5}>
                    <Heading left f={25}>
                        PRO
                    </Heading>
                    <Text f={12}>most helpful 4-5 star review</Text>
                    <Divider />
                    <Heading left f={14}>
                        {props.pro.title}
                    </Heading>
                    <Text mb={10}>{props.pro.review}</Text>
                    <span>
                        <Link>{props.pro.screenName} </Link>
                        {format(props.pro.datePosted, 'MMMM D, YYYY')}
                    </span>
                </Box>
                <Box w={1 / 2} pl={5} pr={5}>
                    <Heading left f={25}>
                        CON
                    </Heading>
                    <Text f={12}>most helpful 1-2 star review</Text>
                    <Divider />
                    <Heading left f={14}>
                        {props.con.title}
                    </Heading>
                    <Text mb={10}>{props.con.review}</Text>
                    <span>
                        <Link>{props.con.screenName} </Link>
                        {format(props.con.datePosted, 'MMMM D, YYYY')}
                    </span>
                </Box>
            </Flex>
        </StyledDiv>
    )
}

export default Reviews
