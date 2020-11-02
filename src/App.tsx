import React from "react";
import "./App.css";
import Header from "./components/partials/site/Header";
import Home from "./components/pages/Home";
import { Provider } from 'react-redux'
import store from './redux/store';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<Home />
			</div>
		</Provider>
	);
}

export default App;
