import Image from "next/image";
import Right from "../icons/Right";
import Play from "../icons/Play";
export default function Hero() {
    return(
        <section className="hero">
            <div className="py-12">
            <h1 className="text-4xl font-semibold"> Discover the Flavors <br /> of the 
            <span className="text-primary"> orient</span> at the<br /> 
            <span className="text-primary">Oriental Foods</span></h1>
            <p className="my-4 text-gray-500 ">
            Welcome to Oriental Foods, where the rich tapestry of Asian cuisine awaits your palate. 
            Indulge in a culinary journey through the vibrant flavors and aromatic spices of the Orient. 
            From savory stir-fries to mouthwatering dumplings, each dish is crafted with passion and authenticity,
            promising a delightful dining experience that transports you to the heart of Asia. Join us and savor the essence of tradition,
            innovation, and culinary mastery in every bite
            </p>
            <div className="flex gap-8">
                <button className="bg-primary flex gap-1 text-white rounded-full px-4 py-2">Order Now <Right /></button>
                <button className=" bg-white text- black rounded full px-4 py-2 flex gap-1 font-bold"><Play /> Learn More </button>
            </div>
            </div>
            <div className="relative">
                <Image src={'/sushi.png'} layout={'fill'}
                objectFit = {'contain'} alt={'sushi'} />
                </div>
                
                        
                </section>
    );
}