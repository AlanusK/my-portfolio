import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Skills } from "./pages/skills";
import { AboutMe } from "./pages/aboutMe";
import { Contact } from "./pages/contact";
import { Thanks } from "./pages/thanks";

export default function App() {
  return (
    <div className='h-full flex flex-col relative min-h-screen'>
      <Router>
        <Header />
        <main className='flex grow pb-24'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/about-me' element={<AboutMe />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/thanks' element={<Thanks />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
