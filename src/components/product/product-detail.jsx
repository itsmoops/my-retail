import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styled from 'styled-components'
import { Box, Heading, Container, Text, Image } from 'rebass'
import Icon from 'react-icons-kit'
import { ic_local_offer } from 'react-icons-kit/md/ic_local_offer'
import * as productActions from '../../actions/product-actions'
import ImageCarousel from '../shared/image-carousel'
import Flex from '../shared/flex'
import Divider from '../shared/divider'

const PrimaryImage = styled(Image)`
    margin: auto;
`

const InlineText = styled(Text)`
    display: inline;
`

class ProductDetail extends React.Component {
    state = {
        primaryPhotoURL: undefined,
        carouselImages: undefined
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
    render() {
        const { product } = this.props

        if (Object.keys(product).length > 0) {
            // we have a valid product
            const priceInfo = product.Offers[0].OfferPrice[0]
            const promotions = product.Promotions
            return (
                <Flex wrap>
                    <Box w={[1, 1 / 2, 1 / 3]} ml="auto" mr="auto">
                        <Heading mb={20}>{product.title}</Heading>
                        <Container>
                            <PrimaryImage src={this.state.primaryPhotoURL} />
                            <ImageCarousel
                                images={this.state.carouselImages}
                                handleSelectPhoto={this.handleSelectPhoto}
                            />
                        </Container>
                    </Box>
                    <Box w={[1, 1 / 2, 1 / 3]} ml="auto" mr="auto">
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
                            {promotions.map(promotion => {
                                return (
                                    <div>
                                        <Icon icon={ic_local_offer} />{' '}
                                        <InlineText>
                                            {promotion.Description[0].shortDescription.toLowerCase()}
                                        </InlineText>
                                    </div>
                                )
                            })}
                        </Container>
                        <Divider />
                    </Box>
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
