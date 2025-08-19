import Header from "./components/Header"
import { Footer } from "./components/Footer"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { FiTool } from "react-icons/fi";
import { FaMagnifyingGlass, FaScrewdriverWrench, FaLocationDot } from "react-icons/fa6";
import { GiCrane } from "react-icons/gi";
import { PiBlueprintLight } from "react-icons/pi";
import { MdEngineering } from "react-icons/md";
import { FaChevronRight, FaProjectDiagram } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { SiBookstack } from "react-icons/si";
import { GiLaurels } from "react-icons/gi";
import { LiaCertificateSolid } from "react-icons/lia";

gsap.registerPlugin(ScrollTrigger)

export const Home = () => {
    const titleRef = useRef(null)
    const textRef = useRef(null)
    const sectionOneRef = useRef(null)
    const sectionTwoRef = useRef(null)
    const sectionThreeRef = useRef(null)
    const serviciosRef = useRef(null)
    const slidesRef = useRef(null)
    const projectsSectionRef = useRef(null)
    const finalSectionRef = useRef(null)
    const firstImgRef = useRef(null)
    const secondImgRef = useRef(null)
    const thirdImgRef = useRef(null)
    const slides = [
        {
            bg: "/images/services1.webp",
            title: "Estudios",
            text: "Estudios de pre factibilidad, factibilidad y desarrollo de proyectos (técnico, económico, ambiental, social, predial, jurídico) en el sector de infraestructura vial.",
            icon: <PiBlueprintLight />,
        },
        {
            bg: "/images/services2.webp",
            title: "Estructuración",
            text: "Estructuración técnica de proyectos con metodologías innovadoras y tecnología de vanguardia.",
            icon: <GiCrane />,
        },
        {
            bg: "/images/services3.webp",
            title: "Ingeniería",
            text: "Ingeniería de detalle con precisión técnica y cumplimiento de los más altos estándares de calidad.",
            icon: <MdEngineering />,
        },
        {
            bg: "/images/services4.webp",
            title: "Exploración",
            text: "Exploración Geotécnica y soluciones geotécnicas de alta complejidad para proyectos desafiantes.",
            icon: <FaMagnifyingGlass />,
        },
    ]
    const projects = [
        { bg: "/images/services1.webp", type: "Estudios y diseños", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis velit finibus, imperdiet ipsum at, maximus magna. Morbi ac aliquet nisi, sit amet rutrum orci. Vestibulum gravida lacus sit amet sem viverra, ut maximus urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque tristique tellus. Ut faucibus nulla vel quam sodales aliquet. Vivamus sollicitudin blandit nibh et ornare. Aenean facilisis mattis mi quis laoreet. Quisque quis mi ac lorem consectetur tincidunt quis ac ante. In eu lectus vitae nunc euismod consequat.", location: "Bogotá D.C." },
        { bg: "/images/services2.webp", type: "Interventoría técnica, financiera y operativa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis velit finibus, imperdiet ipsum at, maximus magna. Morbi ac aliquet nisi, sit amet rutrum orci. Vestibulum gravida lacus sit amet sem viverra, ut maximus urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque tristique tellus. Ut faucibus nulla vel quam sodales aliquet. Vivamus sollicitudin blandit nibh et ornare. Aenean facilisis mattis mi quis laoreet. Quisque quis mi ac lorem consectetur tincidunt quis ac ante. In eu lectus vitae nunc euismod consequat.", location: "Bogotá D.C." },
        { bg: "/images/services3.webp", type: "Interventoría técnica, financiera y operativa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis velit finibus, imperdiet ipsum at, maximus magna. Morbi ac aliquet nisi, sit amet rutrum orci. Vestibulum gravida lacus sit amet sem viverra, ut maximus urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque tristique tellus. Ut faucibus nulla vel quam sodales aliquet. Vivamus sollicitudin blandit nibh et ornare. Aenean facilisis mattis mi quis laoreet. Quisque quis mi ac lorem consectetur tincidunt quis ac ante. In eu lectus vitae nunc euismod consequat.", location: "Bogotá D.C." },
        { bg: "/images/services4.webp", type: "Interventoría técnica, financiera y operativa", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis velit finibus, imperdiet ipsum at, maximus magna. Morbi ac aliquet nisi, sit amet rutrum orci. Vestibulum gravida lacus sit amet sem viverra, ut maximus urna dignissim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse pellentesque tristique tellus. Ut faucibus nulla vel quam sodales aliquet. Vivamus sollicitudin blandit nibh et ornare. Aenean facilisis mattis mi quis laoreet. Quisque quis mi ac lorem consectetur tincidunt quis ac ante. In eu lectus vitae nunc euismod consequat.", location: "Bogotá D.C." },
    ]
    const awards = [
        {
            year: "1994",
            icon: <GiLaurels className="w-16 h-16 text-secondary" />,
            title: "Premios Excelencia en Concreto",
            category: "OBRAS CIVILES - FINALISTA",
            description: (<><b>EDL S.A.S.</b> recibió la mención <b>FINALISTA</b> correspondiente a la <span className="text-primary font-bold bg-primary/10 px-1 py-1 rounded">ESTABILIZACIÓN CON CEMENTO DE LA CARRETERA MANAURE - URIBIA</span>, mediante el uso del agua y arena de mar.</>)
        },
        {
            year: "2008",
            icon: <GiLaurels className="w-16 h-16 text-secondary" />,
            title: "Sociedad Colombiana de Ingenieros",
            category: "MENCIÓN DE HONOR",
            description: (<><b>EDL S.A.S.</b> junto a <b>DIS S.A.S.</b> lograron MENCIÓN DE HONOR gracias al <span className="text-primary font-bold bg-primary/10 px-1 py-1 rounded">ESTUDIO Y DISEÑO DE LA DOBLE CALZADA DEL SECTOR CISNEROS – LOBOGUERRERO</span>, donde se diseñaron 14 túneles y 40 puentes.</>)
        },
        {
            year: "2010",
            icon: <LiaCertificateSolid className="w-16 h-16 text-secondary" />,
            title: "Premio Nacional de Ingeniería",
            category: "SOCIEDAD COLOMBIANA DE INGENIEROS",
            description: (<><b>EDL SAS</b> recibió el galardón gracias a su participación en el<span className="text-primary font-bold bg-primary/10 px-1 py-1 rounded">ESTUDIO Y DISEÑO DE LA DOBLE CALZADA DE LA VÍA BOGOTÁ – VILLAVICENCIO, SECTOR TERCIO MEDIO: EL TABLÓN - CHIRAJARA</span>.</>),
        }
    ]
    const clients = [
        "/images/client1.png",
        "/images/client2.png",
        "/images/client3.jpg",
        "/images/client4.png",
        "/images/client5.png",
        "/images/client6.png",
        "/images/client8.png",
        "/images/client9.png",
        "/images/client10.png",
        "/images/client11.png",
        "/images/client12.png",
        "/images/client13.png",
        "/images/client14.png",
        "/images/client15.png",
        "/images/client16.png",
        "/images/client17.png",
        "/images/client18.png",
        "/images/client19.png",
        "/images/client20.png",
        "/images/client21.png",
        "/images/client22.png",
    ]
    const logos = [...clients, ...clients];
    useEffect(() => {
        const tl = gsap.timeline()
        tl.fromTo(
            titleRef.current,
            { x: -200, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
        )
            .fromTo(
                textRef.current,
                { x: 1000, opacity: 0 },
                { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
                ,
                "-=0.7",
            )
            .fromTo(
                ".hero-cta",
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
            )
    }, [])
    useEffect(() => {
        if (!serviciosRef.current || !slidesRef.current) return
        const slides = slidesRef.current
        const container = serviciosRef.current
        gsap.to(slides, {
            xPercent: -300,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => "+=" + container.offsetWidth * 3,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
                snap: {
                    snapTo: 1 / 3,
                    duration: 0.5,
                    ease: "power2.inOut",
                },
            },
        })
        gsap.from(".service-card", {
            scale: 0.8,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
            },
        })
    }, [])
    useEffect(() => {
        if (!sectionTwoRef.current) return
        gsap.fromTo(
            sectionTwoRef.current,
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionTwoRef.current,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
            },
        )
        gsap.to(".helmet-float", {
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 2.5,
        })
        gsap.to(".bg-element", {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
        })
    }, [])
    useEffect(() => {
        const container = projectsSectionRef.current;
        const cards = gsap.utils.toArray(".project-card");
        const sectionPerCard = 1 / cards.length;
        let lastValue = 0;
        ScrollTrigger.create({
            trigger: container,
            start: "top 20%",
            end: () => "+=" + (container.offsetWidth * cards.length),
            pin: true,
            scrub: 0.1,
            onUpdate: self => {
                const progress = self.progress;
                cards.forEach((card, i) => {
                    const cardProgress = (progress - sectionPerCard * i) / sectionPerCard;
                    const clamped = gsap.utils.clamp(0, 1, cardProgress);
                    gsap.set(card, {
                        xPercent: -300 * clamped,
                        rotate: -100 * clamped
                    });
                });
            },
            snap: {
                snapTo: (value) => {
                    const index = Math.floor(value / sectionPerCard);
                    const offset = (value % sectionPerCard) / sectionPerCard;

                    const goingForward = value > lastValue;
                    lastValue = value;

                    if (goingForward) {
                        return (index + (offset > 0.05 ? 1 : 0)) * sectionPerCard;
                    } else {
                        return (index + (offset < 0.95 ? 0 : 1)) * sectionPerCard;
                    }
                },
                duration: 0.2,
                ease: "power1.inOut"
            }
        });
    }, []);
    useEffect(() => {
        const container = finalSectionRef.current;
        const firstImg = firstImgRef.current;
        const secondImg = secondImgRef.current;
        const thirdImg = thirdImgRef.current;
        if (!container) return;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top top",
                end: () => "+=" + window.innerHeight * 2,
                pin: true,
                scrub: 1,
            }
        });
        tl.fromTo(firstImg,
            { opacity: 0, scale: 0.5, x: 0 },
            { opacity: 1, scale: 1, x: 0, ease: "power2.out" },
            0
        )
            .fromTo(secondImg,
                { opacity: 0, x: 50, display: "none" },
                { opacity: 1, x: 0, ease: "power2.out", display: "block" },
                "+=0.5"
            )
            .fromTo(thirdImg,
                { opacity: 0, x: 50, display: "none" },
                { opacity: 1, x: 0, ease: "power2.out", display: "block" },
                "+=0.5"
            );
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div>
            <div className="min-h-screen flex flex-col overflow-x-hidden bg-white font-gotham">
                <Header />
                <div className="relative w-full h-[105vh] overflow-hidden flex">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="https://videos.pexels.com/video-files/1436812/1436812-uhd_2732_1440_24fps.mp4"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/30 to-transparent z-10" />
                    <div className="mt-auto ml-12 mb-28 relative z-20 text-white p-8 w-1/2 flex flex-col gap-6">
                        <div className="space-y-4">
                            <h1 className="text-7xl font-black text-primary-light drop-shadow-lg" ref={titleRef}>
                                EDL Ingenieros
                            </h1>
                            <div className="w-24 h-1 bg-primary-light rounded-full"></div>
                        </div>
                        <p className="font-gotham text-lg leading-relaxed text-gray-100 max-w-lg" ref={textRef}>
                            Transformamos ideas en realidades de infraestructura. Somos líderes en ingeniería vial con más de 25 años de
                            experiencia creando soluciones innovadoras y sostenibles.
                        </p>
                        <div className="hero-cta flex gap-4 mt-6">
                            <button className="bg-primary hover:bg-primary-light transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                Nuestros Proyectos
                            </button>
                            <button className="border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold">
                                Contactar
                            </button>
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-0 left-0 w-full h-[100px] z-10"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z"
                        />
                    </svg>
                </div>
                <div className="min-h-screen relative" ref={sectionOneRef}>
                    <section ref={serviciosRef} className="grid grid-cols-2 w-full min-h-screen overflow-hidden relative">
                        <svg
                            className="absolute top-0 left-0 w-full h-[120px] z-10 rotate-180"
                            viewBox="0 0 1440 150"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                        >
                            <path fill="#ffffff" d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z" />
                        </svg>

                        <div className="flex items-center justify-center px-10 bg-gradient-to-br from-gray-50 to-white relative">
                            <div className="text-center space-y-6">
                                <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                                    <FiTool className="text-6xl text-primary" />
                                </div>
                                <h1 className="font-gotham text-primary text-5xl font-bold leading-tight">
                                    Nuestros
                                    <br />
                                    <span className="text-secondary">Servicios</span>
                                </h1>
                                <div className="w-16 h-1 bg-primary mx-auto rounded-full"></div>
                                <p className="text-gray-600 text-lg max-w-md">
                                    Soluciones integrales en ingeniería vial con tecnología de vanguardia
                                </p>
                            </div>
                        </div>
                        <div className="relative h-full overflow-hidden">
                            <div className="relative h-[100vh] overflow-hidden">
                                <div ref={slidesRef} className="absolute top-0 left-0 h-full flex w-full">
                                    {slides.map((slide, index) => (
                                        <div
                                            key={index}
                                            className="relative w-full flex-shrink-0 flex items-end justify-center bg-center bg-cover group"
                                            style={{ backgroundImage: `url(${slide.bg})` }}
                                        >
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>
                                            <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                                            <div className="relative z-10 text-white font-gotham flex flex-col gap-4 justify-end w-full h-full p-8 mb-10 transform group-hover:translate-y-[-10px] transition-transform duration-500">
                                                <div className="flex flex-col mr-auto items-center gap-4 mb-2">
                                                    <div className="text-3xl">{slide.icon}</div>
                                                    <div className="w-12 h-0.5 bg-primary-light"></div>
                                                </div>
                                                <h1 className="text-5xl font-bold mb-4 group-hover:text-primary-light transition-colors duration-300">
                                                    {slide.title}
                                                </h1>
                                                <p className="font-gotham text-gray-200 text-lg leading-relaxed max-w-md">{slide.text}</p>
                                                <button className="mt-4 bg-primary hover:bg-primary-light transition-all duration-300 text-white px-6 py-3 rounded-full font-semibold w-fit shadow-lg hover:shadow-xl flex items-center gap-3">
                                                    Ver más <FaChevronRight />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="w-full min-h-screen bg-primary-light1 overflow-hidden relative">
                    <svg
                        className="top-0 left-0 w-full h-[120px] z-10 rotate-180"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path fill="#ffffff" d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z" />
                    </svg>
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="bg-element absolute top-20 left-20 w-64 h-64 border-2 border-primary/20 rounded-full"></div>
                        <div
                            className="bg-element absolute bottom-20 right-20 w-48 h-48 border-2 border-secondary/20 rounded-full"
                            style={{ animationDelay: "10s" }}
                        ></div>
                        <div className="absolute top-1/2 left-10 w-4 h-4 bg-primary/30 rounded-full animate-ping"></div>
                        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-secondary/30 rounded-full animate-pulse"></div>
                    </div>

                    <div className="grid grid-cols-2 w-full h-full px-10 pb-30 relative z-10" ref={sectionTwoRef}>
                        <div className="span-cols-1 flex flex-col gap-8 pr-10">
                            <div className="space-y-4">
                                <div className="inline-block p-3 bg-primary/10 rounded-full">
                                    <HiUserGroup className="text-5xl text-primary" />
                                </div>
                                <h1 className="text-5xl font-bold text-primary leading-tight">Nuestro Equipo</h1>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                            </div>

                            <p className="text-xl leading-relaxed text-gray-700">
                                Contamos con personal{" "}
                                <span className="text-primary italic font-bold bg-primary/10 px-2 py-1 rounded">
                                    altamente calificado
                                </span>{" "}
                                en las diferentes áreas de la ingeniería que le permiten desarrollar los proyectos de manera oportuna y
                                con una alta generación de valor.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-5 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                                    <FaScrewdriverWrench className="text-2xl text-primary ml-2" />
                                    <div>
                                        <h3 className="font-semibold text-primary">Herramientas Tecnológicas</h3>
                                        <p className="text-gray-600">Tecnología de punta actualizada constantemente</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-5 p-4 bg-white/50 rounded-lg backdrop-blur-sm">
                                    <SiBookstack className="text-2xl text-primary ml-2" />
                                    <div>
                                        <h3 className="font-semibold text-primary">Capacitación Continua</h3>
                                        <p className="text-gray-600">Personal capacitado en las últimas metodologías</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-1 relative flex items-center justify-center helmet-section">
                            <div className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl rounded-full left-16 top-10 -z-10 animate-pulse"></div>
                            <div
                                className="absolute w-40 h-40 bg-secondary/30 blur-2xl rounded-full bottom-32 right-32 animate-ping"
                                style={{ animationDuration: "3s" }}
                            ></div>
                            <div
                                className="absolute w-24 h-24 bg-primary/40 blur-xl rounded-full top-20 right-20 animate-bounce"
                                style={{ animationDuration: "4s" }}
                            ></div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-full blur-xl scale-110"></div>
                                <img
                                    src="/images/helmet.png"
                                    alt="Casco de seguridad"
                                    className="helmet-float w-96 mx-auto z-20 relative drop-shadow-2xl"
                                />
                                <div className="absolute top-10 left-10 w-3 h-3 bg-primary rounded-full animate-ping"></div>
                                <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                                <div
                                    className="absolute top-1/2 right-20 w-4 h-4 bg-primary/50 rounded-full animate-bounce"
                                    style={{ animationDelay: "1s" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-0 left-0 w-full h-[100px] z-10"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z"
                        />
                    </svg>
                </div>
                <div className="w-full min-h-screen overflow-hidden relative" ref={sectionThreeRef}>
                    <svg
                        className="top-0 left-0 w-full h-[120px] z-10 rotate-180"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            stroke="#FE7F22"
                            strokeWidth="1"
                            strokeDasharray="10,6"
                            d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z"
                        />
                    </svg>
                    <div className="grid grid-cols-2 w-full overflow-hidden h-[32rem] px-10 gap-5 relative z-10" ref={projectsSectionRef}>
                        <div className="col-span-1 relative flex projects-wrapper justify-center items-center">
                            {projects.map((project, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`project-card bg-white border-gray-200 border-2 flex flex-col w-11/12 h-11/12 rounded-xl absolute transition-all duration-300 p-2 overflow-hidden opacity-100 scale-100`}
                                        style={{
                                            zIndex: projects.length - index,
                                        }}
                                    >
                                        <div className="w-full h-full relative">
                                            <img
                                                src={project.bg}
                                                className="w-full h-full object-cover rounded-xl brightness-50"
                                                alt=""
                                            />
                                            <div className="absolute inset-0 flex flex-col items-end justify-end p-3 text-xl">
                                                <h1 className="font-bold text-white">{project.type}</h1>
                                                <h1 className="font-bold text-white flex items-center gap-2"><FaLocationDot color="#205A65" /> {project.location}</h1>
                                                <div className="bg-primary w-5/12 h-1"></div>
                                                <h1 className="line-clamp-3 text-white text-sm text-end pr-2 max-w-10/12">{project.description}</h1>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="col-span-1 flex flex-col gap-8 pr-10">
                            <div className="space-y-4">
                                <div className="inline-block p-3 bg-primary/10 rounded-full">
                                    <FaProjectDiagram className="text-3xl text-primary" />
                                </div>
                                <h1 className="text-5xl font-bold text-primary leading-tight">Proyectos destacados</h1>
                                <div className="w-16 h-1 bg-primary rounded-full"></div>
                            </div>
                            <p className="text-xl leading-relaxed text-gray-700">
                                Hacen parte de la {" "}
                                <span className="text-primary italic font-bold bg-primary/10 px-2 py-1 rounded">
                                    experiencia
                                </span>{" "}
                                que nos acompaña.
                            </p>
                        </div>
                    </div>
                    <svg
                        className="absolute bottom-0 left-0 w-full h-[100px] z-10"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="#ffffff"
                            d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z"
                        />
                    </svg>
                </div>
                {/*<div ref={ctaRef} className="bg-gradient-to-r from-primary to-primary-light relative overflow-hidden">
                    <svg
                        className="top-0 left-0 w-full h-[120px] z-10 rotate-180"
                        viewBox="0 0 1440 150"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                    >
                        <path fill="#ffffff" d="M0,32 C360,150 1080,0 1440,96 L1440,160 L0,160 Z" />
                    </svg>
                    <div className="container mx-auto px-8 pb-10 text-center relative z-10">
                        <div className="max-w-4xl mx-auto space-y-8">
                            <h2 className="text-5xl font-bold text-white mb-6">¿Listo para tu próximo proyecto?</h2>
                            <p className="text-xl text-white/90 mb-8">
                                Contacta con nosotros y descubre cómo podemos transformar tus ideas en realidad
                            </p>
                            <div className="flex gap-6 justify-center">
                                <button className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                    Solicitar Cotización
                                </button>
                                <button className="border-2 border-white hover:bg-white hover:text-primary transition-all duration-300 text-white px-8 py-4 rounded-full font-semibold">
                                    Ver Portfolio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>*/}
            </div>
            <div className="w-full min-h-screen overflow-hidden flex flex-col px-12">
                <h1 className="w-full flex justify-center text-primary text-5xl mt-10 font-bold">
                    Reconocimientos
                </h1>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10 font-gotham">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-primary-light1/50 overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 bg-gradient-to-r from-primary to-primary-light text-white px-4 py-2 rounded-full font-gotham font-bold text-sm shadow-lg">
                                {award.year}
                            </div>
                            <div className="p-8">
                                <div className="flex justify-center mb-6">
                                    <div className="p-4 bg-gradient-to-br from-primary-light1 to-primary-light2/50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                        {award.icon}
                                    </div>
                                </div>
                                <div className="text-center mb-6">
                                    <h3 className="font-gotham font-bold text-xl text-primary mb-2">
                                        {award.title}
                                    </h3>
                                    <span className="inline-block bg-primary-light1 text-primary-dark px-4 py-1 rounded-full text-sm font-gotham font-semibold">
                                        {award.category}
                                    </span>
                                </div>
                                <p className="font-gotham text-primary-dark text-sm leading-relaxed text-center">
                                    {award.description}
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className="w-full flex justify-center text-primary text-5xl mt-20 font-gotham font-bold">
                        Ellos confían en nosotros
                    </h1>
                    <div className="marquee-container py-12">
                        <div className="marquee-track">
                            {logos.map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt={`Cliente ${index + 1}`}
                                    className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition marquee-item"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary min-h-screen flex justify-center items-center" ref={finalSectionRef}>
                <img className="transition-all" src="/images/iconwhite.png" alt="" ref={firstImgRef} />
                <img src="/images/logotextwhite.png" alt="" ref={secondImgRef} />
                <img src="/images/saswhite.png" alt="" ref={thirdImgRef} />
            </div>
            <Footer />
        </div>
    )
}
