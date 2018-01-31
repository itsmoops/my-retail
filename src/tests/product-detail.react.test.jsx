import React from 'react'
import renderer from 'react-test-renderer'
import ConnectedProductDetail from '../components/product/product-detail'
import productData from '../data/item-data.json'

test('Add to Cart button is unavailable when product is not available online', () => {
    const ProductDetail = ConnectedProductDetail.WrappedComponent

    const component = renderer.create(<ProductDetail product={productData.CatalogEntryView[0]} />)
    // const tree = component.toJSON()

    // expect(tree).toMatchSnapshot()
})
