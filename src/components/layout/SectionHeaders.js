export default function SectionHeaders({subHeader,mainHeader}) {
    return (
      <>
        <h3 className="mt-6 text-center text-secondary">
          {subHeader}
        </h3>
        <h2 className="text-primary font-bold text-4xl ">
          {mainHeader}
        </h2>
      </>
    );
  }