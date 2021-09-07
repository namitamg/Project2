import { GETPRODUCTDETAIL , GETPRODUCTSLIST,AUTHENTICATED_USER } from "./action";


const initialState = {
    productsList : [],
    productDetail : {},
    authenticated:false,
    isProductsLoading : true,
    isProductDetailLoading : true
}


export const productsReducer = (state=initialState,action)=>{
    switch(action.type){
        case GETPRODUCTSLIST :
            return {
                ...state , 
                productsList : action.payload,
                isProductsLoading : false
            }
        case GETPRODUCTDETAIL :
                return {
                    ...state , 
                    productDetail : action.payload,
                    isProductDetailLoading : false
                }

                /* case AUTHENTICATED_USER:
                
                    return{
                        ...state
                            } */
                            
        default :
            return {...state}  
    }
}