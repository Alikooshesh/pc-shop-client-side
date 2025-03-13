import { createSlice } from "@reduxjs/toolkit";

interface Idata{
    id : string,
    count : number
}

const init:Idata[] = []

const cartReducer = createSlice({
    name : "cartReducer",
    initialState : init,
    reducers : {
        add : (state,action)=>{
            const temp = state
            const finder = temp.find(item=>item.id === action.payload.id)
            if(finder){
                finder.count +=1
            }else{
                temp.push({id :action.payload.id , count : 1})
            }

            return temp
        },
        remove : (state , action)=>{
            let temp = state
            const finder = temp.find(item=>item.id === action.payload.id)
            if(finder){
                if(finder.count > 1){
                    finder.count -=1
                }else{
                    temp = temp.filter(item => item.id !== action.payload.id)
                }
            }
            return temp
        }
    }
})

export const {add , remove} = cartReducer.actions
export default cartReducer.reducer