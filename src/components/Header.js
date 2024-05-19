import { Link } from 'react-router-dom'

export function Header() {
    return (
        <header>
            <div className="squished">DSP_G6</div>

            <div className="pageLinks">
                <Link to={'/'}>Home</Link>
                <Link to={'/case-study'}>Case Study</Link>
                <Link to={'/team'}>Team</Link>
            </div>
        </header>
    )
}
