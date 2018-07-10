import Link from 'next/link'
import NavBar from "./NavBar"

export default () => (
    <header>
        <div className="container">
            <div class="row">
                <div class="col-12 text-right">Advertorial</div>
            </div>
            <div class="row mb-2">
                <div class="col-12 col-sm-6">
                    <Link href="/">
                        <img src="/static/images/logo.jpg" class="img-fluid"/>
                    </Link>
                </div>
            </div>
        </div>
        <NavBar />
    </header>
)