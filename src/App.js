import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Site from './component/Site';
import Blog from './component/Blog';
import Nav from './component/Nav';
import Youtube from './component/Youtube';
import Book from './component/Book';
import Mypage from './component/Mypage';
import EmptyPage from './component/EmptyPage';
import Footer from './component/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/site">
              <Site />
            </Route>
            <Route exact path="/blog">
              <Blog />
            </Route>
            <Route exact path="/youtube">
              <Youtube />
            </Route>
            <Route exact path="/book">
              <Book />
            </Route>
            <Route exact path="/mypage">
              <Mypage />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
