import Layout from '../components/Layout'
import PostCard from '../components/PostCard'

import postData from '../data/postData'

const content = (
    <div>
        <section>
            <div className="row">
                {postData.map(post => (
                    <div className="col-12 col-sm-4 col-md-3">
                        <PostCard props={post} />
                    </div>
                ))}
            </div>
        </section>
    </div>
)
  
export default () => (<Layout children={content}/>)
