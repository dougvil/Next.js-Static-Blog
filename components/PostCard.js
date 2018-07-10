import Link from 'next/link'

export default ({props}) => (
    <div className="card mb-2 mb-md-4">
        <Link href={props.link}>
            <img src={`/static/images${props.link}-thumb.jpg`} className="card-img-top"/>
        </Link>
        <div className="card-body">
            <h5>{props.title}</h5>
            <p>{props.resume}
                <Link href={props.link}>
                    <a>... [+] ler mais</a>
                </Link>
            </p>
        </div>
    </div>
) 