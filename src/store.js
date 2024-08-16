import { configureStore } from '@reduxjs/toolkit'
import docmentslice from './componant/docmentslice'
export default configureStore({
  reducer: {docmentslice}
})