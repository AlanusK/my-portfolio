import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./pages/home";

export default function App() {
  return (
    <div className='h-full flex flex-col'>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </Router>
    </div>
  )
}
