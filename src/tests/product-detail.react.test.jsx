import React from 'react'
import Enzyme, { mount, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import ConnectedProductDetail from '../components/product/product-detail'
import Button from '../components/shared/button'
import QuantityCounter from '../components/shared/quantity-counter'
import productData from '../data/item-data.json'

Enzyme.configure({ adapter: new Adapter() })

const actions = {
    getProductDetails: () => {}
}

let product

const ProductDetail = ConnectedProductDetail.WrappedComponent

describe('ProductDetail test suite', () => {
    beforeEach(() => {
        // reset product prop
        product = Object.assign({}, productData.CatalogEntryView[0])
    })

    test('Add to Cart button is unavailable when product is not available online', () => {
        const wrapper = mount(<ProductDetail product={product} actions={actions} />)

        expect(wrapper.find(Button).length).toBe(2)
        expect(wrapper.text()).toContain('ADD TO CART')

        // unavailable online
        product.purchasingChannelCode = '2'

        const wrapper2 = mount(<ProductDetail product={product} actions={actions} />)

        expect(wrapper2.find(Button).length).toBe(1)
        expect(wrapper2.text()).not.toContain('ADD TO CART')
    })

    test('Pick up in store button is unavailable when product is not available online', () => {
        const wrapper = mount(<ProductDetail product={product} actions={actions} />)

        expect(wrapper.find(Button).length).toBe(2)
        expect(wrapper.text()).toContain('PICK UP IN STORE')

        // unavailable in store
        product.purchasingChannelCode = '1'

        const wrapper2 = mount(<ProductDetail product={product} actions={actions} />)

        expect(wrapper2.find(Button).length).toBe(1)
        expect(wrapper2.text()).not.toContain('PICK UP IN STORE')
    })

    test('Quantity state increments when plus button is clicked', () => {
        const quantityWrapper = shallow(<QuantityCounter />)

        expect(quantityWrapper.state().quantity).toBe(1)

        quantityWrapper.find('#quantity-plus').simulate('click')

        expect(quantityWrapper.state().quantity).toBe(2)
    })

    test('Quantity state decrements when minus button is clicked', () => {
        const quantityWrapper = shallow(<QuantityCounter />)

        expect(quantityWrapper.state().quantity).toBe(1)

        quantityWrapper.find('#quantity-plus').simulate('click')

        expect(quantityWrapper.state().quantity).toBe(2)

        quantityWrapper.find('#quantity-minus').simulate('click')

        expect(quantityWrapper.state().quantity).toBe(1)
    })

    test('Quantity state should never go below 1', () => {
        const quantityWrapper = shallow(<QuantityCounter />)

        expect(quantityWrapper.state().quantity).toBe(1)

        quantityWrapper.find('#quantity-minus').simulate('click')

        expect(quantityWrapper.state().quantity).toBe(1)
    })
})
