import Layout from '../components/Layout'
import data from '../data/maxtv'

const content = (
    <div className="row">
        <section className="col-12 col-sm-8">
            {data}
        </section>
        <div className="col-12 col-sm-4 col-md-3 offset-sm-1 d-none d-sm-block d-none d-sm-block">
            <a href="https://maxtv.dicasdetv.com/?utm_source=gdn&utm_campaign=maxtvoficial">
                <img src="/static/images/maxtv-sb01.jpg" className="img-fluid d-block mx-auto mb-2 mb-md-4" />
                <img src="/static/images/maxtv-sb02.jpg" className="img-fluid d-block mx-auto mb-2 mb-md-4" />
            </a>
        </div>
    </div>
)
  
export default () => (<Layout children={content} pageTitle="MaxTV"/>)