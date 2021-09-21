
import Image from 'next/image'
import Slider from "react-slick";

export default function Featuredgallery(){
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
          {
            breakpoint: 991,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
      };
    return(
      <>
        <Slider className="three_slide_carousal carousal" {...settings}>
        <div className="slide">
          <div className="wrap">
            <figure className="thumbnail">
          <Image src="/images/img3.jpg"  height={409} width={180} alt="img1"/>
          </figure>
          <div className="content">
            <div className="avtar">
              <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
              </div>
              <h4 className="name">Martin Kopal</h4>
              <h5 className="id">@marlin1991</h5>
              <hr/>
              <p>Eddie is an electronic producer &amp; artist that
                 merges timeless electronic sounds with
                 modern production elements</p>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="wrap">
            <figure className="thumbnail">
          <Image src="/images/img4.jpg"  height={409} width={180} alt="img1"/>
          </figure>
          <div className="content">
            <div className="avtar">
              <Image src="/images/avtar3.jpg" height={164} width={164} alt="" /> 
              </div>
              <h4 className="name">Payton Wall</h4>
              <h5 className="id">@pawall772</h5>
              <hr/>
              <p>Eddie is an electronic producer &amp; artist that
                 merges timeless electronic sounds with
                 modern production elements</p>
            </div>
          </div>
        </div> 
        <div className="slide">
        <div className="wrap">
            <figure className="thumbnail">
          <Image src="/images/img2.jpg"  height={409} width={180} alt="img1"/>
          </figure>
          <div className="content">
            <div className="avtar">
              <Image src="/images/avtar1.jpg" height={164} width={164} alt="" /> 
              </div>
              <h4 className="name">Eddie Harris</h4>
              <h5 className="id">@eddie_harris</h5>
              <hr/>
              <p>Eddie is an electronic producer &amp; artist that
                 merges timeless electronic sounds with
                 modern production elements</p>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="wrap">
            <figure className="thumbnail">
          <Image src="/images/img2.jpg"  height={409} width={180} alt="img1"/>
          </figure>
          <div className="content">
            <div className="avtar">
              <Image src="/images/avtar1.jpg" height={164} width={164} alt="" /> 
              </div>
              <h4 className="name">Eddie Harris</h4>
              <h5 className="id">@eddie_harris</h5>
              <hr/>
              <p>Eddie is an electronic producer &amp; artist that
                 merges timeless electronic sounds with
                 modern production elements</p>
            </div>
          </div>
        </div>
        <div className="slide">
        <div className="wrap">
            <figure className="thumbnail">
          <Image src="/images/img2.jpg"  height={409} width={180} alt="img1"/>
          </figure>
          <div className="content">
            <div className="avtar">
              <Image src="/images/avtar1.jpg" height={164} width={164} alt="" /> 
              </div>
              <h4 className="name">Eddie Harris</h4>
              <h5 className="id">@eddie_harris</h5>
              <hr/>
              <p>Eddie is an electronic producer &amp; artist that
                 merges timeless electronic sounds with
                 modern production elements</p>
            </div>
          </div>
        </div>
  </Slider>
  <div className="btn-row text-center mt-50">
  <a href="#" className="btn btn-outline btn-white">View More</a>
</div>
</>
    )
}