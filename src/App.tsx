import React from "react";
import "./App.css";
import Header from "./components/partials/site/Header";
import Home from "./components/pages/Home";
import Alert from '@material-ui/lab/Alert';

function App() {
	return (
		<div className="App">
			<div style={{marginBottom: "25px"}}>
				{ false && 
					<Alert>The settings is successfuly saved — check it out!</Alert>
				}
			</div>
			<Header />
			<Home />
		</div>
	);
}

export default App;
