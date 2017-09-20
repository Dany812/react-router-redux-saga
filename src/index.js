import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App' 
import Departments from './containers/Departments'
import Employees from './containers/Employees'
import NotFound from './components/NotFound'
import configureStore from './store/configureStore' 
import { Router, Route,IndexRoute, browserHistory } from 'react-router'
import './styles/index.css' 

const store = configureStore()
const routes = [
	{ path: '/', component: App,
	    childRoutes: [
	        { path: '/departments', component: Departments },
	        { path: '/employees', component: Employees },
	    ]
	},
	{ path: '*', component: NotFound }
]

render(
  <Provider store={store}>
    <Router history={browserHistory}  routes={routes} /> 
  </Provider>,
  document.getElementById('root')
)