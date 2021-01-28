import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Layout from '../../components/Layout';

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <Carousel>
         <div className="legend1">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/9684c5bba6b14e7f.jpg?q=50" alt="" />
         </div>
         <div className="legend2">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/a61e29c24c8934dd.jpg?q=50" alt="" />
          </div>
          <div className="legend3">
            <img src="https://rukminim1.flixcart.com/flap/1688/280/image/90cdb794821102c8.jpg?q=50" alt="" />
          </div>
       </Carousel>
    </Layout>
   )

 }

export default HomePage
