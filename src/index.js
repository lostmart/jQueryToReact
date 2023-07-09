import ReactDOM from 'react-dom/client'
import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

import './assets/css/index.css'
import reportWebVitals from './reportWebVitals'

import { Provider } from 'react-redux'
import store from './app/store'

/* Pages  */
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import Empleyees from './pages/Empleyees'

/* layout   */
const Layout = () => {
	return <Outlet />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/empleyees" element={<Empleyees />} />
						<Route path="*" element={<NotFound />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
