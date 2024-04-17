
import MenuItem from "./Menu/MenuItem";
export default function Product(){
    return(
        <section className="mt-6">
            <div className="text-center">
                <h3 className="text-primary ">
                Product

                </h3>
                <h2 className="text-secondary font-bold text-2xl">
                    Most Popular Items
                </h2>
            </div>
            <div className=" grid grid-cols-3 gap-4 py-6 ">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />

            </div>

        </section>

    );
}