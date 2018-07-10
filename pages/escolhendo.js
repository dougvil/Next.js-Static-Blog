import Layout from '../components/Layout'
import SideBar from '../components/SideBar'
import data from '../data/escolhendo'

const content = (
    <div className="row">
        <section className="col-12 col-sm-8">
            {data}
        </section>
        <SideBar />
    </div>
)
  
export default () => (<Layout children={content} pageTitle="Escolhendo"/>)