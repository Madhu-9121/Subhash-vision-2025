import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { ScrollToTop } from './components/scroll-to-top';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import EventsPage from './pages/events';
import UpcomingEventsPage from './pages/upcoming-events';
import ContactPage from './pages/contact';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/events" component={EventsPage} />
          <Route path="/upcoming-events" component={UpcomingEventsPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;