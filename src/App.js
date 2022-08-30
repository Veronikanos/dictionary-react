import './App.css';
import Dictionary from "./components/Dictionary";

export default function App() {
  return (
    <div className="App">
			<section>
				<header className="App-header">Dictionary</header>
				<Dictionary />
			</section>
			<footer className='text-center'>
				This project was coded by Veronika Tlostiuk and is <a href="https://github.com/Veronikanos/dictionary-react">open-sourced on GitHub</a>
			</footer>
    </div>
  );
}
