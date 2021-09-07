export const GETPRODUCTSLIST = "GETPRODUCTSLIST"
export const GETPRODUCTDETAIL = "GETPRODUCTDETAIL"
export const AUTHENTICATED_USER ="AUTHENTICATED_USER"


export const dispatchProductList = (data)=> dispatch=>{
    return dispatch({
        type : GETPRODUCTSLIST,
        payload : data 
    })
}


export const dispatchProductDetail = (data) => dispatch =>{
    return dispatch({
        type : GETPRODUCTDETAIL,
        payload : data
    })
}

export const dispatchAuthenticatedUser =(data)=>dispatch=>{
    return dispatch({
        type:AUTHENTICATED_USER,
        payload:data
    })
}