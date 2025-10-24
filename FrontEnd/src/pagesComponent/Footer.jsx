
function Footer(){

    return(
        <footer className="bg-gray-900 text-white p-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                <section>
                    <h3 className="text-xl font-semibold mb-4">Connect with us❤️</h3>

                    <ul className="space-y-2">
                        <li className="">
                            <img src="communication.png" className="w-4 md:w-7 h-4 md:h-7 relative z-10 filter brightness-110" alt="Communication" />
                            Email: 
                            <a className="m-1 underline hover:text-gray-300 text-blue-500" href="mailto:rezonelife@gmail.com">rezonelife@gmail.com</a>, 
                            <a className="m-3 underline hover:text-gray-300 text-blue-500" href="mailto:its.ps019@gmail.com">its.ps019@gmail.com</a>
                        </li>

                        <li>
                            <img src="instagram.png" className="w-4 md:w-7 h-4 md:h-7" alt="" />Instagram: <a className="underline text-blue-500 hover:text-gray-300" href="https://www.instagram.com/rezonelife" target="_blank" rel="noreferrer">Profile</a>
                        </li>

                        <li>
                            <img src="social.png" className="w-4 md:w-7 h-4 md:h-7" alt="" />WhatsApp: <a className="underline hover:text-gray-300 text-blue-500" href="https://whatsapp.com/channel/0029VbBkrERGE56sAjDpd027" target="_blank" rel="noreferrer">Channel</a>
                        </li>

                        <li>
                            <img src="threads.png" className="w-4 md:w-7 h-4 md:h-7" alt="" />Threads: <a className="underline hover:text-gray-300 text-blue-500" href="https://www.threads.com/@rezonelife" target="_blank" rel="noreferrer">Profile</a>
                        </li>
                    </ul>
                </section>

                <section>
                    <h3 className="text-xl font-semibold mb-4">About Us</h3>
                    <p className="text-gray-300 text-right">Re-Zone has quietly helped people find clarity, build gentle habits, and reconnect with what matters. We are deeply grateful to everyone who trusted us with their time, feedback, and stories. Thank you — your trust humbles and inspires us every day.</p>
                </section>
            </div>
            <div className="text-center text-gray-500 mt-8">© 2025 Re-Zone. All rights reserved under local <a className="underline hover:text-gray-300" href="">terms & conditions</a>.</div>
        </footer>
    )
}
export default Footer;
