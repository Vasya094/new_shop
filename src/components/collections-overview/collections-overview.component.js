
import React from 'react'
import PreviewCollection from '../preview-collection/preview-collection.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors'
import { CollectionsOverviewContainer } from './collection-overview.styles'

const CollectionsOverview = ( { collections } ) => {
  debugger
  return (
    <CollectionsOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </CollectionsOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector( {
  collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview) 
