import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

function Carousels() {
  return (
    <>
        <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                <div>
                    <img style={{width:"100%", height:"600px"}} src="https://cdn.outsideonline.com/wp-content/uploads/2024/08/portugal-hike-most-beautiful-places-h.jpg" />
                </div>
                <div>
                    <img style={{width:"100%", height:"600px"}} src="https://hips.hearstapps.com/hmg-prod/images/landscape-sunset-view-of-morain-lake-and-mountain-royalty-free-image-1658765829.jpg" />
                </div>
                <div>
                    <img style={{width:"100%", height:"600px"}} src="https://media.timeout.com/images/106032791/image.jpg" />
                </div>
            </Carousel>
    </>
  )
}

export default Carousels