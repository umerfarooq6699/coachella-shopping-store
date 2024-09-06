import { createSlice } from "@reduxjs/toolkit";

const shopping=createSlice({
    name:"example",
    initialState:{cartArray:[],cartCheck:false,quickcheck:false, modelObject: {}},
    reducers:{
        quickAddtocart:(state,action)=>{
            console.log(action.payload,"Action jlkkkkkkkkkkkkkk")
            const existingItem=state.cartArray.some((e)=> e.name===action.payload.name)
            if(existingItem){
                return state
            }else{
                return {...state,cartArray:[...state.cartArray,action.payload]}
            }
        },
        quickcartRemove:(state,action)=>{
            return {...state,cartArray:state.cartArray.filter((e,i)=>{
             return   action.payload != i
            })}
        },
        cartDecrement:(state,action)=>{
            console.log(action,"decrement action")
            return {...state,cartArray:state.cartArray.map((e,i)=>{
                if(e.quantity===1){
                    return {...e,quantity:1}
                }else{
                    if(e.name===action.payload.name){
                        return {...e,quantity:e.quantity-1}
                    }
                    else{
                        return e
                    }
                }
            })}
        },
        cartIncrement:(state,action)=>{
            console.log(action,"increment action")
            return {...state,cartArray:state.cartArray.map((e,i)=>{
                if(e.name===action.payload.name){
                    return {...e,quantity:e.quantity+1}
                }
                else{
                    return e
                }
            })}
        },
        cartDispatch:(state,action)=>{
            return {...state,cartCheck:true}
        },
        cartcrossDispatch:(state,action)=>{
            return {...state,cartCheck:false}
        },
        selectAdd:(state,action)=>{
            const existed=state.cartArray.some((e,i)=>{
                return e.name === action.payload.name
            })
            if(existed){
                return state
            }else{
                return {...state,cartArray:[...state.cartArray,action.payload]}
            }
        },
        quickAddtocart2:(state,action)=>{
            return {...state,quickcheck:false}
        },
        quickViewdis:(state,action)=>{
            return {...state,quickcheck:true}
        },
        quickViewcross:(state,action)=>{
            return {...state,quickcheck:false}
        },
        setModelObject: (state, action) => {
            return {...state, modelObject: action.payload}
        }

    }
})

export const {quickAddtocart,quickAddtocart2,quickcartRemove,cartDispatch,cartDecrement,cartIncrement,cartcrossDispatch,selectAdd,quickViewdis,quickViewcross, setModelObject}=shopping.actions

export default shopping.reducer