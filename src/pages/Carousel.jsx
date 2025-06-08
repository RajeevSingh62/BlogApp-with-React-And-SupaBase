import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'; 
const Carousel = () => {

    const blogData = [
  {
    id: 1,
    // title: "First Blog",
    image: "https://rlyytziyfqphemwnuxdm.supabase.co/storage/v1/object/public/blogs//XL6%20(1).webp",
    // description: "This is the first blog description"
  },
  {
    id: 2,
    // title: "Second Blog",
    image: "https://rlyytziyfqphemwnuxdm.supabase.co/storage/v1/object/public/blogs//XL6%20(1).webp",
    // description: "This is the second blog description"
  },
   {
    id: 3,
    // title: "Second Blog",
    image: "https://rlyytziyfqphemwnuxdm.supabase.co/storage/v1/object/public/blogs//XL6%20(1).webp",
    // description: "This is the second blog description"
  },
   {
    id: 3,
    // title: "Second Blog",
    image: "https://rlyytziyfqphemwnuxdm.supabase.co/storage/v1/object/public/blogs//XL6%20(1).webp",
    // description: "This is the second blog description"
  },
];
 const settings = {
  arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    prevArrow: <button className="custom-prev-arrow">Previous</button>,
  nextArrow: <button className="custom-next-arrow">Next</button>,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 }
    }
  ]
  };
  return (
  <div style={{ padding: '20px', position: 'relative', overflow: 'visible' }}>

      {/* <h2>Latest Blogs</h2> */}
       <Slider {...settings}>
 {blogData.map(blog => (
          <div key={blog.id} style={{ padding: '10px' }}>
            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}

       </Slider>
    </div>
  )
}

export default Carousel
