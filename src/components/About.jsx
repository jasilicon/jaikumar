import meAbout from '../assets/images/me-about.webp';

export default function About() {

    return (
        <section id="about" className="pt-0 pb-20 px-6 md:px-16 lg:px-24 bg-gray-900 text-white ">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center p-10">
                    About <span className="text-orange-500">Me</span>
                </h2>
                <div className="flex flex-col lg:flex-row gap-12 items-center">

                    <img
                        src={meAbout}
                        alt="Jaikumar"
                        className="w-full lg:w-1/2 rounded-2xl object-cover order-first lg:order-last"
                    />

                    <div className="w-full lg:w-1/2">
                        <h3 className="text-2xl font-bold mb-4">Full Stack Web Developer</h3>
                        <p className="text-gray-300 leading-relaxed mb-6 text-justify" >
                            I build fast, secure, and highly responsive web applications. By pairing the robust backend power of Django with dynamic, user-friendly frontends built in ReactJS and Tailwind CSS, I turn complex ideas into seamless digital experiences. From database architecture to modern UI design, I focus on writing clean, scalable code that solves real-world problems and is easy to maintain.
                        </p>
                        <p className="text-gray-300 leading-relaxed mb-8">
                            My goal is to build products that not only look great but also provide an exceptional 
                            user experience. I believe in clean code, thoughtful design, and continuous learning.
                        </p>



                        <a
                            href="#contact"
                            className="inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-orange-600 transition"
                        >
                            Let's Talk
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
