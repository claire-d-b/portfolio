import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import { Page } from './pages/home/index.tsx';

function App() {
	return (
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo" />
		// 		<p>
		// 			Edit <code>src/App.js</code> and save to reload.
		// 		</p>
		// 		<Link to="home">Home</Link>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer">
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
		<Page></Page>
	);
}

export default App;
