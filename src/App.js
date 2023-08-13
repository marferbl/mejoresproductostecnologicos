import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import GalleryProducts from './components/gallery-products';
import ArticleDetails from './components/product-details';
import ArticleList from './components/article-list';

function App() {
  return (
    <div className="App">
      <Hero />
      <GalleryProducts title={"Recomendaciones"} />
      <ArticleList />
    </div>
  );
}

export default App;
