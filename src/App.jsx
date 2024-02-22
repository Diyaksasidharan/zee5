
import './App.css';
import requests from './Requests';
import Banner from './components/Banner';
import Nav from './components/Nav';
import Row from './components/Row';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row isPoster={true}  title = "Best and Latest on ZEE5" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title = "Trending Trailers" fetchUrl={requests.fetchTrending} />
      <Row isPoster={true} title = "Top 10 in India" fetchUrl={requests.fetchTopRated} />
      <Row isPoster={true} title = "Trending Movies on ZEE5 | Action" fetchUrl={requests.fetchActionMovies} />
      <Row title = "Experience Comedy Movies in 4K" fetchUrl={requests.fetchComedyMovies} />
      <Row title = "Must Watch Horror Thrillers on ZEE5" fetchUrl={requests.fetchHorrorMovies} />
      <Row isPoster={true} title = "Biopics of All Time" fetchUrl={requests.fetchDocumentaries} />
      <Row title = "Wedding and Romance Special Movies" fetchUrl={requests.fetchRomanceMovies} />

    </div>
  );
}

export default App;
