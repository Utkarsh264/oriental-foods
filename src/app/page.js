import Image from "next/image";

import Hero from "../components/layout/Hero";
import Product from "../components/layout/Product";
import Address1 from "../components/layout/Address1";
import Services from "../components/layout/Services";
import SubFooter from "../components/layout/SubFooter";
import Work from "../components/layout/Work"

export default function Home() {
  return (
    <>
    
    <Hero />
    <Address1 />
    <Product />
    <Services />
    <Work />
    <SubFooter />
    
        </>
  );
}
