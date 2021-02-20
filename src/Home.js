import React from "react";
import Product from "./Product";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> */}

// </link>
// import "bootstrap/dist/css/bootstrap.min.css";


function Home() {
  return (
    <div className="home">
      <div className="home_container">
        
        
        <img
          className="home_image"
          src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a"
        />

        <div className="home_row">
          <Product
            id="3456"
            title="these is very good book  read"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
          <Product
            id="34576"
            title="these is very good book  read"
            price={300}
            image="https://n4.sdlcdn.com/imgs/j/k/n/large/UrbanMark-Brown-Daily-Use-Slippers-SDL722366055-1-0be02.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="34563"
            title="these is very good book  read"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
          <Product
            id="34563"
            title="these is very good book  read"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
          <Product
            id="34564"
            title="these is very good book  read"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            id="34565"
            title="these is very good book  read"
            price={300}
            image="https://n2.sdlcdn.com/imgs/j/o/r/large/Veirdo-100-Percent-Cotton-Green-SDL302182620-1-1ba35.jpeg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
