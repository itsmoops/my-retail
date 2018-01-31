import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled, { css } from 'styled-components'
import { Box, Heading, Container, Text, Image, Tabs, TabItem } from 'rebass'
import Icon from 'react-icons-kit'
import { ic_local_offer } from 'react-icons-kit/md/ic_local_offer'
import * as productActions from '../../actions/product-actions'
import ReactHtmlParser from 'react-html-parser'
import ImageCarousel from '../shared/image-carousel'
import Flex from '../shared/flex'
import Divider from '../shared/divider'
import QuantityCounter from '../shared/quantity-counter'
import Reviews from '../shared/reviews'
import Button from '../shared/button'

const PrimaryImage = styled(Image)`
    margin: auto;
`

const InlineText = styled(Text)`
    display: inline;
`

const StyledDiv = styled.div`
    margin-top: 15px;
    padding-left: 15px;
`

const StyledText = styled(Text)`
    max-width: 355px;
    margin-left: 65px;
    margin-top: -17px;
`

const StyledTabs = styled(Tabs)`
    border-bottom-width: 0px;
`

const StyledTabItem = styled(TabItem)`
    cursor: pointer;
    text-transform: uppercase;
    background: #efefef;
    min-width: 115px;
    font-size: 10px;
    margin-right: 2px;
    text-align: center;
    padding-bottom: 10px;
    padding-top: 10px;
    ${props => css`
        ${props.theme.screen.small} {
            min-width: 130px;
            font-size: 12px;
            margin-right: 12px;
        }
    `};
`

const StyledListItem = styled.li`
    list-style: inside;
    margin: 5px;
`

class ProductDetail extends React.Component {
    state = {
        primaryPhotoURL: undefined,
        carouselImages: undefined,
        quantity: 1
    }
    componentWillMount() {
        document.title = 'myRetail'
    }
    componentDidMount() {
        this.props.actions.getProductDetails()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.product) {
            document.title = nextProps.product.title
            this.setState({
                primaryPhotoURL: nextProps.product.Images[0].PrimaryImage[0].image,
                carouselImages: nextProps.product.Images[0].AlternateImages
            })
        }
    }
    handleSelectPhoto = src => {
        this.setState({
            primaryPhotoURL: src
        })
    }
    handleQuantityChange = e => {
        const target = e.target
        const plus =
            target.id === 'quantity-plus' ||
            target.parentNode.id === 'quantity-plus' ||
            target.parentNode.parentNode.id === 'quantity-plus'
        if (plus) {
            this.setState({
                quantity: this.state.quantity + 1
            })
        } else {
            this.state.quantity !== 1 &&
                this.setState({
                    quantity: this.state.quantity - 1
                })
        }
    }
    render() {
        const { product } = this.props

        if (Object.keys(product).length > 0) {
            // we have a valid product
            const purchasingChannelCode = product.purchasingChannelCode

            const priceInfo = product.Offers[0].OfferPrice[0]
            const promotions = product.Promotions
            const availableOnline = purchasingChannelCode === '0' || purchasingChannelCode === '1'
            const availableInStore = purchasingChannelCode === '0' || purchasingChannelCode === '2'
            const highlights = product.ItemDescription[0].features
            const reviews = product.CustomerReview[0]

            return (
                <Flex wrap>
                    <Box w={[0, 0, 0, 1 / 8]} />
                    <Box w={[1, 1 / 2, 1 / 2, 3 / 8]} ml="auto" mr="auto">
                        <Heading mb={20} center>
                            {product.title}
                        </Heading>
                        <Container>
                            <PrimaryImage src={this.state.primaryPhotoURL} />
                            <ImageCarousel
                                images={this.state.carouselImages}
                                handleSelectPhoto={this.handleSelectPhoto}
                            />
                        </Container>
                    </Box>
                    <Box w={[1, 1 / 2, 1 / 2, 3 / 8]} ml="auto" mr="auto">
                        <Container>
                            <InlineText f={24} bold>
                                {priceInfo.formattedPriceValue}{' '}
                            </InlineText>
                            <InlineText>
                                {priceInfo.priceQualifier && priceInfo.priceQualifier.toLowerCase()}
                            </InlineText>
                        </Container>
                        <Divider />
                        <Container style={{ color: '#c91300' }}>
                            {promotions.map((promotion, idx) => {
                                return (
                                    <div key={idx}>
                                        <Icon icon={ic_local_offer} />{' '}
                                        <InlineText>
                                            {promotion.Description[0].shortDescription.toLowerCase()}
                                        </InlineText>
                                    </div>
                                )
                            })}
                        </Container>
                        <Divider />
                        <StyledDiv>
                            <QuantityCounter onChangeQuantity={this.handleQuantityChange}>
                                {this.state.quantity}
                            </QuantityCounter>
                        </StyledDiv>
                        <StyledDiv>
                            {availableInStore && (
                                <Button background="#222222" color="#ffffff">
                                    Pick up in store
                                </Button>
                            )}
                            {availableOnline && (
                                <Button background="#c91300" color="#ffffff">
                                    Add to cart
                                </Button>
                            )}
                        </StyledDiv>
                        <StyledDiv>
                            <Text>returns | </Text>
                            <StyledText f="10px">
                                This item must be returned within 30 days of the ship date. See
                                return policy for details. Prices, promotions, styles and
                                availability may vary by store and online.
                            </StyledText>
                        </StyledDiv>
                        <StyledDiv>
                            <StyledTabs>
                                <StyledTabItem>Add to Registry</StyledTabItem>
                                <StyledTabItem>Add to List</StyledTabItem>
                                <StyledTabItem>Share</StyledTabItem>
                            </StyledTabs>
                        </StyledDiv>
                        <Container>
                            <Heading left mt={20}>
                                product highlights
                            </Heading>
                            <ul>
                                {highlights.map((highlight, idx) => {
                                    return (
                                        <StyledListItem key={idx}>
                                            {ReactHtmlParser(highlight)}
                                        </StyledListItem>
                                    )
                                })}
                            </ul>
                        </Container>
                    </Box>
                    <Box w={[0, 0, 0, 1 / 8]} />

                    <Box w={[0, 0, 0, 1 / 8]} />
                    <Box w={[1, 1 / 2, 1 / 2, 3 / 8]} ml="auto" mr="auto">
                        <Reviews pro={reviews.Pro[0]} con={reviews.Con[0]} />
                    </Box>
                    <Box w={[1, 1 / 2, 1 / 2, 3 / 8]} ml="auto" mr="auto" />
                    <Box w={[0, 0, 0, 1 / 8]} />
                </Flex>
            )
        }
        return null
    }
}

function mapStateToProps(state) {
    return {
        product: state.product
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(productActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)
