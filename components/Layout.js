import HeadContent from '../components/HeadContent'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Scripts from '../components/Scripts'

const Layout = (props) => (
    <div>
        <HeadContent pageTitle={props.pageTitle}/>
        <Header />
        <div className="container">
            {props.children}
        </div>
        <Footer />
        <Scripts />
    </div>
  )
  
export default Layout