export default function Work(){
    return(
        <section className="work mt-6 pb-10 mb-6 hover:shadow-lg hover:shadow-black/35 transition-all rounded-lg hidden md:block ">
             <div className="text-center">
                <h3 className="text-primary ">
                How to Use

                </h3>
                <h2 className="text-secondary font-bold text-2xl">
                    Food is an important part of Balanced diet
                </h2>
            </div>
            < div className="flex gap-8 mt-8 ">
            <div className="">
                <img className= "bg-white w-40 ml-16  "src="/laptop.png" alt="laptop" />
                
                <h1 className="font-bold text-center ml-8 mt-4"> Register/Login </h1>
                
                
                
                <p className="text-xs mt-2 text-center ml-8">Do you want to lose weight, exercise,<br />
                adhere to a therapeutic diet? <br />Our
                dietitian will help you with choosing the<br />
                         right program!</p>
            </div>
            <div className="">
                
                <h1 className="font-bold  text-center ml-8"> Choose </h1>
                <p className="text-xs mt-2 ml-4 text-center ml-6">Do you want to lose weight, exercise,<br />
                adhere to a therapeutic diet? <br />Our
                dietitian will help you with choosing the<br />
                         right program!</p>
                <img className= "bg-white w-40 ml-16 mt-4 "src="/Chicken.png" alt="Chicken" />
            </div>
            <div className="">
                <img className= "bg-white w-40 ml-16  "src="/Delivery.png" alt="Delivery" />
                <h1 className="font-bold text-center ml-8 "> We Deliver </h1>
                
                <p className="text-xs mt-2 text-center ml-8">Do you want to lose weight, exercise,<br />
                adhere to a therapeutic diet? <br />Our
                dietitian will help you with choosing the<br />
                         right program!</p>
            </div>
            </div>
        </section>
    )
}