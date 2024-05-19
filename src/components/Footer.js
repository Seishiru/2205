export function Footer() {
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    return (
        <footer>
            <a onClick={handleScrollToTop}>Back to Top</a>
            <p>© 2024 DSP_G6 SDG Case Study Portfolio. All rights reserved.</p>
        </footer>
    )
}
