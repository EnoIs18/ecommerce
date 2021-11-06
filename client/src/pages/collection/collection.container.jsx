import { connect } from "react-redux";

import { createStructuredSelector } from 'reselect'

import WithSpinner from '../../components/with-spinner/with-spinner.component'

import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

import CollectionPage from '../collection/collection.component';


const mapStateToProps = createStructuredSelector({
    isLoading: state =>  !selectIsCollectionsLoaded(state)
})

const CollectionsPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

export default CollectionsPageContainer