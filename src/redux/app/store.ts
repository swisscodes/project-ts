import { configureStore } from '@reduxjs/toolkit'
import authReducer from 'redux/features/auth'

export const store = configureStore({
  reducer: {
    auth:authReducer,
  },

  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(
      [] //apis list
    )
})



export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch