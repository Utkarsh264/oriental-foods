import Truck from "../icons/Truck"
import Smile from "../icons/Smile"
export default function Services(){
    return(
        <section className="mt-6">
            <div className="text-center">
                <h3 className="text-primary ">
                Services

                </h3>
                <h2 className="text-secondary font-bold text-2xl">
                    Why Choose Our Favourite Food
                </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4 py-6 ">
                <div className="min-h-[100px] rounded-lg bg-white shadow border-2 
                hover:shadow-lg hover:shadow-black/35 transition-all">
                <div className="px-52 py-12 md:px-28 ">
                        <Smile />
                        
                    </div>
                    <h1 className="text-secondary font-bold text-xl text-center ">Quality Food</h1>
                    <p className="text-center px-4 mt-3 text-sm text-gray-500 mb-5">
                    Our commitment to sourcing the freshest ingredients ensures each dish is a masterpiece of flavor and satisfaction. 
                    Experience the difference that quality makes with every bite.</p>
                    
                </div>
                <div className="min-h-[100px] rounded-lg
                 bg-white shadow border-2 hover:shadow-lg hover:shadow-black/35 transition-all">
                <div className="px-52 py-12 md:px-28">
                        <Truck />
                        
                    </div>
                    <h1 className="text-secondary font-bold text-xl text-center ">Healthy Food</h1>
                    <p className="text-center px-4 mt-3 text-sm text-gray-500 mb-5">
                    Savor the goodness of wholesome ingredients carefully crafted into delicious and nourishing dishes.
                    Our dedication to offering healthy options ensures you can enjoy flavorful meals that support your well-being.</p>
                    
                </div>
                <div className="min-h-[100px] rounded-lg bg-white shadow border-2
                 hover:shadow-lg hover:shadow-black/35 transition-all ">
                    <div className="px-52 py-12 md:px-28">
                        <Truck />
                        
                    </div>
                    <h1 className="text-secondary font-bold text-xl text-center  ">Fast Delivery</h1>
                    <p className="text-center px-4 mt-3 text-sm text-gray-500 mb-5">
                    Experience swift and efficient delivery services that bring your favorite dishes straight
                     to your doorstep. Our commitment to timely service ensures you enjoy your meals without delay.</p>
                    
                </div>

            </div>
        </section>

    );
}