import Header from './components/common/header';
import Footer from './components/common/Footer';
import Home from './pages/home';

export default function App() {
  return (
    <div className='bg-black'>
      <Header />
      <Home/>
      <Footer />
    </div>
  )
}