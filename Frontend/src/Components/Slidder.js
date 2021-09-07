import React, { Component } from 'react';

import Banner from "../Components/Search/Banner"
// ========
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import './Slider.css'
// ========

class Slidder extends Component {
  render() {
    return (


      //             <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel" >

      // <Banner/>

      //             <ol className="carousel-indicators">
      //               <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      //               <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      //               <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      //               <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      //             </ol>
      //             <div className="carousel-inner">
      //               <div className="carousel-item active">
      //                 <img className="d-block item  col-md-12 " style={{height:"600px"}}  data-interval="1000" src="https://images.squarespace-cdn.com/content/v1/5c806e5734c4e2faa1db54c9/1587246353234-80NM8NM4OGB44JGIVP9Y/Neutra%27s+Wilkins+House+in+Pasadena%2C+1949.png" alt="First slide" />
      //               </div>
      //              <div className="carousel-item">
      //                 <img className="d-block item  col-md-12"   data-interval="2000" src="https://www.jetsetter.com//uploads/sites/7/2018/04/9s9_ATCO-1380x690.jpeg" alt="Second slide" />
      //               </div>
      //               <div className="carousel-item">
      //                 <img className="d-block item  col-md-12"  data-interval="3000" src="https://www.jetsetter.com//uploads/sites/7/2018/04/DFpUWVd-1380x690.jpeg" alt="Third slide" />
      //               </div>

      //             </div>

      //             <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      //               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      //               <span className="sr-only">Previous</span>
      //             </a>
      //             <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      //               <span className="carousel-control-next-icon" aria-hidden="true"></span>
      //               <span className="sr-only">Next</span>
      //             </a>





      //           </div>

      // 

      <div style={{ display: 'block', width: 1400, padding: 30 }}>
        <Banner />
        <br/>
        <br/>
        <h4 className="text-danger text-center" >Best places to visit and stay at your comfort</h4>
        <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-75 "
              src="https://static.toiimg.com/thumb/49551643/Weekend-trips-from-Pondicherry.jpg?width=1200&height=900"
              alt="Image One"
            />
            <Carousel.Caption>
              <h3>Vigel villa, Manali</h3>
              <p>Best comfort and stay</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2500}>
            <img
             className="d-block w-75 "
              src="https://imgk.timesnownews.com/story/Goa_beach_istock_1200.jpg?tr=w-1200,h-900"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Blue rades,Goa</h3>
              <p>Wanna break? check out this amazing getaway in Goa</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item interval={2500}>
            <img
              className="d-block w-75 "
              
              src="https://static.toiimg.com/thumb/msid-35951814,width=1200,height=900/35951814.jpg"
              alt="Image three"
            />
            <Carousel.Caption>
              <h3>City heights, Manali</h3>
              <p>Pleasure time and storiesto create in one of our best stays</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>



      // 

    );
  }
}
export default Slidder