import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../reducers/index'
import mySaga from '../sagas/sagas'

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware()
	const store = createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware) )
	sagaMiddleware.run(mySaga)
  	return store
}
  
