import { Link, Element } from 'react-scroll'

export function Header() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <header>
            <div className="squished">DSP_G6</div>

            <div className="pageLinks">
                
                <a onClick={handleScrollToTop}>Home</a>
                <Link
                    className="clickable-link"
                    to={1}
                    spy={true}
                    smooth={true}
                >Case Study</Link>
                <Link
                    className="clickable-link"
                    to={2}
                    spy={true}
                    smooth={true}
                >Team</Link>
            </div>
        </header>
    )
}
