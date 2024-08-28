export const initialState = {
    basket : [],
}

export const getBasketTotal = (basket)=>{
    return basket.reduce((action,item)=>action + item.price,0)
}
const reducer = (state,action) =>{
        switch(action.type){
            case "Add_To_Basket" : {
                return {
                    ...state,
                    basket : [...state.basket,action.item]
                }
            }
            default : 
            return state;

            case "Remove_From_Basket" : {
                const index = state.basket.findIndex(
                    (basketItem)=>basketItem.id===action.id);

                let newBasket = [...state.basket]

                if(index>=0){
                    newBasket.splice(index,1)
                }
                else{
                   console.log(`Cant remove product (id: ${action.id}) as its not in basket!`)
                }
                return{
                    ...state,
                    basket : newBasket
                }
            }
           
        } 
}
export default reducer;





























