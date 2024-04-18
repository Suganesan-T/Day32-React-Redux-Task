import { useSelector } from 'react-redux'
import './App.css'
import Card from './Card'
import Footer from './Footer'
import Navbar from './Navbar'
import 'bootstrap/dist/css/bootstrap.css'
 
function App() {

  const {product} = useSelector((state)=>state.app)

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {
              product.map((product,index) => {
                return <Card key={index} product={product}/>
              })
            }
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
