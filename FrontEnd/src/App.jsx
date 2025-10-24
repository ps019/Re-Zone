import './global.css'
import './App.css'
import Footer from './pagesComponent/Footer'
import Header from './pagesComponent/Header'
import Pages from './pagesComponent/pages'

function App() {
  return (
    <div className="min-h-screen flex flex-col m-0">
      <header>
        <Header />
      </header>
      <main className="p-4 bg-gray-50 m-0">
        <Pages style={{ margin: 0 }}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
export default App
