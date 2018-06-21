import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Heading, Text, Link } from 'rebass'
import { format } from 'date-fns'
import Divider from './divider'
import Stars from './stars'

const Container = styled.div`
    margin-top: 50px;
    @media screen and (min-width: 40em) {
        margin-top: 0px;
    }
`

const StyledDiv = styled.div`
    background: #efefef;
    width: 100%;
    padding: 10px;
    margin-top: 20px;

    @media screen and (min-width: 40em) {
        margin-top: 0px;
    }
`

const RightText = styled(Text)`
    float: right;
`

function Reviews(props) {
    return (
        <Container>
            <Box w={1} mb={5} pl={10} pr={10}>
                {<Stars stars={props.stars} />} overall
                <RightText>View all {props.totalReviews} reviews</RightText>
            </Box>
            <StyledDiv>
                <Flex>
                    <Box w={1 / 2} pl={5} pr={5}>
                        <Heading left f={25}>
                            PRO
                        </Heading>
                        <Text f={12}>most helpful 4-5 star review</Text>
                        <Divider />
                        <Stars stars={props.pro.overallRating} />
                        <Heading left mt={10} f={16}>
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
                        <Stars stars={props.con.overallRating} />
                        <Heading left mt={10} f={16}>
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
        </Container>
    )
}

export default Reviews
