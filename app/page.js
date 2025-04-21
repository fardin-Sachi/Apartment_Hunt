import Homepage from './components/homepage'
import Header from './components/header'
import Service from './components/service'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Navbar />
      <Searchbar title={"FIND YOUR HOUSE RENT"} search={true}/>
      <Homepage />
      <Service />
      <Footer />
    </main>
  )
}
