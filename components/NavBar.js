import Link from 'next/link'

import PostData from '../data/postData'

const PostLink = (props) => (
    <li className="text-left">
        <Link href={props.link}>
        <a className="nav-link mx-lg-4 mx-md-2 mx-sm-1" style={{color:"#fff"}}>{props.title}</a>
        </Link>
    </li>
)

const NavBar = () => (
<nav class="navbar navbar-expand-sm navbar-light mb-2 mb-md-4" style={{backgroundColor:"#c10000"}}>
    <div className="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto">
                {PostData.map(post => (
                    <PostLink slug={`${post.slug}`} link={`${post.link}`} title={`${post.title}`}/>
                ))}
            </ul>
        </div>
    </div>
</nav>
)

export default NavBar