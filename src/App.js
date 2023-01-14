import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home";
import { Projects } from "./pages/projects";

export default function App() {
  return (
    <div className='h-full flex flex-col'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}
