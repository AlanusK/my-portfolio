import { Header } from './components/header';
import Main from './Main';

export default function App() {
  return (
    <section className='h-full flex flex-col'>
      <Header />
      <div className='flex-grow'>
        <Main />
      </div>
      {/* <Footer /> */}
    </section>
  )
}
