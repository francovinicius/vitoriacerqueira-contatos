import styles from './Links.css'

export default function Links() {
    return (
        <section className='section-link' id='links'>
            <div className="d-flex flex-column align-items-center justify-content-center">
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://api.whatsapp.com/send?phone=5524999712261">Whatsapp</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://www.linkedin.com/in/vit%C3%B3ria-cerqueira-2a4960160">Linkedin</a>
                </div>
                <div className='div-link d-flex flex-column align-items-center justify-content-center'>
                    <a className="nav-link" aria-current="page" target='_blank' href="https://www.tiktok.com/@vitoriacerqueira.psi?_t=8dBo0mjfK4r&_r=1">TikTok</a>
                </div>
            </div>

        </section>
    )
}