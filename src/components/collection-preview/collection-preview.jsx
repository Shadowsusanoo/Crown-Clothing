import React from 'react'
import './collection-preview.styles.scss'
import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({title,items,routeName}) => {
return(
    <div className='collection-preview'>
     <h1 className='title'>{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter((item,index)=>index<4).map(({id, ...otherItemProps}) => {
                return(
               
                    <CollectionItem key={id}  {...otherItemProps} id={id}/>
                )
            })
        }

    </div>
    </div>
)
}

export default CollectionPreview;

