import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import ArticleList from './Pages/ArticleList';
import Article from './Pages/Article';
import Chat from './Pages/Chat';
import Registration from './Pages/Register';
import AboutUs from './Pages/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <div className="site-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/articles/:articleId">
            <Article />
          </Route>
          <Route path="/articles">
            <ArticleList />
          </Route>
          <Route path="/chat">
            <Chat />
          </Route>
          <Route path="/register">
            <Registration />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
