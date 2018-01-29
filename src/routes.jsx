import { Switch, Route } from 'react-router-dom'
import ProductDetail from './components/product/product-detail'
import LoadingSpinner from './components/shared/loading-spinner'

export default (
    <div>
        <Switch>
            <Route exact path="/" component={ProductDetail} />
        </Switch>
        <LoadingSpinner />
    </div>
)
