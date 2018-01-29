import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Box, Heading, Container, Text, Image } from 'rebass'
import Icon from 'react-icons-kit'
import { thinDown } from 'react-icons-kit/entypo/thinDown'
import * as productActions from '../../actions/product-actions'
import Flex from '../shared/flex'

class ProductDetail extends React.Component {
    componentWillMount() {
        document.title = 'myRetail'
    }
    componentDidMount() {
        this.props.actions.getProductDetails()
    }
    componentWillReceiveProps(nextProps) {
        document.title = nextProps.product.title
    }
    render() {
        const { product } = this.props
        let primaryImageURL
        if (product && Object.keys(product).length > 0) {
            primaryImageURL = product.Images[0].PrimaryImage[0].image
        }
        return (
            <Flex>
                <Box w={[1, 3 / 4, 2 / 3, 1 / 2]} m="auto">
                    <Heading mb={20}>{product.title}</Heading>
                    <Container>
                        <Image src={primaryImageURL} />
                        <Text>{product.shortDescription}</Text>
                    </Container>
                </Box>
            </Flex>
        )
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
