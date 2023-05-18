import './App.css';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './component/NavBar/NavBar';
import { MobileAppBar } from './component/NavBar/MobileAppBar';
import { Footer } from './component/Footer/Footer';
import { ChatBubble } from './component/ChatBubble/ChatBubble';
import EnquireNow from './component/EnquireNow/EnquireNow';
import { Contact } from './pages/Contact/Contact';
import { Services } from './pages/Services/Services';
import { ScrollToTop } from './component/ScrollToTop/ScrollToTop';

function App() {


  return (


    <div className='app'>


      <NavBar />

      <MobileAppBar />

      <ChatBubble />

      <Routes>

        <Route path='*' element={

          <ScrollToTop>

            <Home />

          </ScrollToTop>

        } />




        <Route path='/'

          element={

            <ScrollToTop>

              <Home />

            </ScrollToTop>

          } />


        <Route path='/services' element={

          <ScrollToTop>

            <Services />

          </ScrollToTop>

        } />



        <Route path='/contact'

          element={

            <ScrollToTop>

              <Contact />

            </ScrollToTop>

          } />

        <Route path='/about'

          element={

            <ScrollToTop>

              <About />

            </ScrollToTop>

          } />


      </Routes>

      <EnquireNow />

      <Footer />


    </div>
  );

}

export default App;
