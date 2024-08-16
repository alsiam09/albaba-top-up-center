import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

export const docmentslice = createSlice({
  name: 'item',
  initialState: {
    userid: localStorage.getItem("login"), 
  },
  reducers: {
    signin: (state , action) => {
      let useridkey = action.payload
      if (useridkey === true) {
        state.userid = useridkey
      console.log(useridkey);
      
      localStorage.setItem("login" , JSON.stringify(state.userid))
      }else{
        state.userid = useridkey
        console.log(useridkey);
        
        localStorage.setItem("login" , JSON.stringify(state.userid))
      }
      
    }
}})
// Action creators are generated for each case reducer function
export const { signin } = docmentslice.actions

export default docmentslice.reducer