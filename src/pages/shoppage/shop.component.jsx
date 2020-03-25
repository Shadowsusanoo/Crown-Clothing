import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview'
import SHOP_DATA from './shop.data'



class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collections : SHOP_DATA
        };
    }


    
    render(){

        const {collections} = this.state;
        return(
         <div className='shop-page'>
             <div>SHOP PAGE</div>
           {
               collections.map(({id, ...otherCollectionProps}) => {
                   return(
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                   )
               })
           }
           
           
         </div>
        )
    }
}


export default ShopPage;