import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export const Footer = () => {
    return (
        <footer className="relative h-52 w-full overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src="https://videos.pexels.com/video-files/2053855/2053855-uhd_2560_1440_30fps.mp4" type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-primary/40 backdrop-blur-[.2rem]"></div>
            <div className="relative z-10 flex text-white items-center">
                <div className="w-1/3 flex justify-center items-center">
                    <img src="/images/logowhite1.png" className="w-58"/>
                </div>
                <div className="w-1/3 h-52 flex flex-col justify-center">
                    <p className="font-gotham text-2xl font-bold">Contáctanos</p>
                    <div className="flex gap-3 items-center mt-3">
                        <BsTelephone size={22}/> +57 313 424 4113
                    </div>
                    <div className="flex gap-3 items-center mt-3">
                        <MdOutlineEmail size={22}/> jhonatan.munoz@edlingenieros.com
                    </div>
                    <div className="flex gap-3 items-center mt-3">
                        <IoLocationOutline size={22}/> Carrera 4 # 69 - 42, Bogotá, Colombia
                    </div>
                </div>
                <div className="w-1/3 h-52 flex flex-col justify-center items-center">
                    <p className="font-gotham text-2xl font-bold">Trabaja con nosotros</p>
                    <div className="flex gap-3 items-center mt-3">
                        <h1 className="mt-auto ml-auto text-nowrap">EDL Ingenieros SAS © 2025</h1>
                    </div>
                </div>
            </div>
        </footer>
    );
};