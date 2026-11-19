import Header from "./components/Header";
import Footer from "./components/Footer";
import AnalyzerPage from "./pages/AnalyzerPage";
import "./App.css";

function App() {
	return (
		<div className="app-layout">
			<Header />
			<AnalyzerPage />
			<Footer />
		</div>
	);
}

export default App;