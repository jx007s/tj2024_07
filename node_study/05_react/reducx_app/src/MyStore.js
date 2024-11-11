import { createStore } from 'redux'
import MyReducer from './MyReducer'

const MyStore = createStore(MyReducer)

export default MyStore