import Header from "./components/Header"
import { Footer } from "./components/Footer"

export const AboutUs = () => {
    return (
        <div className="min-h-screen flex flex-col overflow-x-hidden bg-white font-gotham">
            <Header />
            <div className="relative w-full px-14 h-[90vh] overflow-hidden flex" style={{ backgroundImage: 'url("https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg")', backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                <div className="mt-auto z-20 text-white p-8 w-1/2 flex flex-col gap-6">
                    <div className="space-y-4">
                        <h1 className="text-7xl font-black text-primary-light drop-shadow-lg">
                            Nosotros
                        </h1>
                        <div className="w-24 h-1 bg-primary-light rounded-full"></div>
                    </div>
                    <p className="font-gotham text-lg leading-relaxed text-gray-100 max-w-lg">
                        No sé qué colocar
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}