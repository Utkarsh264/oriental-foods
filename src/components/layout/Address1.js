import Clock from "../icons/Clock"
import Phone from "../icons/Phone"
import Location from "../icons/Location"


export default function Address1(){
    return(
        <section className="address hidden md:block">
            <div className="bg-gray-10  rounded-lg ">
                <div className=" flex gap-3 divide-x-2 divide-gray-300 hover:shadow-lg hover:shadow-black/35 transition-all rounded-xl  ">
                    
                    <div className=" text-black items-center px-14 py-4 font-bold mb-2 ">
                        <div className="px-14 mb-2">
                    
                        <Clock />
                        </div>
                         Mon-Sat(12.00-12.00) <br />
                        <div className=" text-sm px-6 text-gray-500">
                            Working timings
                        </div>
                    </div>
                    <div className=" text-black items-center px-20 py-4 font-bold   ">
                        <div className="px-14 mb-2">
                    
                        <Location />
                        </div>
                         MUJ, Jaipur, India<br />
                        <div className=" text-sm px-6 text-gray-500">
                            Our Location
                        </div>
                    </div>
                    <div className=" text-black items-center px-14 py-4 font-bold   ">
                        <div className="px-12 mb-2 ">
                    
                        <Phone />
                        </div>
                         +91 9876567841 <br />
                        <div className=" text-sm px-4 text-gray-500">
                            Phone Number
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}