import Image from "next/image";

export default function GridItem( props ) {
  return (
    <>
      <div className="grid-item">
        <div>
        <Image src={ props.imageSrc} alt={ props.imageAlt} width="300px" height="300px"/>

        </div>
        <div className="grid-text">
          <h1>{ props.title}</h1>
          <p>
              { props.body}
          </p>
          <h2>{ props.tags}</h2>
          <h3>{ props.date}</h3>
        </div>
      </div>
    </>
  );
}
