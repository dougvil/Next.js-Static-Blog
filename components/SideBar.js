import PostCard from '../components/PostCard'
import postData from '../data/postData'

export default () => (
    <div className="col-12 col-sm-4 col-md-3 offset-sm-1 d-none d-sm-block">
        {postData.map(post => (
            <PostCard props={post} />
        ))}
    </div>
)