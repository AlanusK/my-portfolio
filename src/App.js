import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Contact } from "./pages/contact";

export default function App() {
  return (
    <div className='h-full flex flex-col relative min-h-screen'>
      <Router>
        <Header />
        <main className='flex grow pb-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}
