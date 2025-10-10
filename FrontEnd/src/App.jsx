import './global.css'
import Footer from './pagesComponent/Footer'
import Header from './pagesComponent/Header'
import Pages from './pagesComponent/pages'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <Header />
      </header>
      <main className="flex-grow p-4 bg-gray-50">
        <Pages />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App
