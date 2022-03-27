import React from 'react'
import { Provider } from 'react-redux'
import { AppRouter } from './routers/AppRouter'
import { store } from './store/store'

export const AnimeApp = () => {
  return (
   <Provider store={store}>
       <AppRouter />
   </Provider>
  )
}
