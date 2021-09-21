
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Fade from "react-bootstrap";
import Slider from "react-slick";
import TabContainer from 'react-bootstrap/TabContainer'

export default function Drop(){

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
      <div className="drop wrapper">

        <Layout>
            <Header/>
            <main className="main">
            <section className="banner_sec pt-header background drop_page-banner">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="banner_content text-center">
              <div className="live_cta">
                <a href="#" className="btn btn-field btn-blue btn-icon">
                <i className="icon-broadcast"></i><span>Live Now</span></a>
              </div>
              <div className="date">Tue, Jul 10</div>
              <h1>Chase - Dark Times 2021</h1>
              <div className="cta">
                <a href="#" className="btn btn-field btn-white">View Drop</a>
              </div>
            </div>
          </div>
        </section>
        <section className="section upcoming_sec pb-90">
          <div className="container">
            <div className="title_wrap d-flex">
              <h3 className="sec_title">Upcoming</h3>
              <div className="ml-auto right">
                <a href="#" className="btn btn-outline btn-white">View All</a>
              </div>
              </div>
              <Slider className="three_slide_carousal carousal album_carousal" {...settings}>
                <Link href="/bid">
                    <a>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img8.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    </a>
                    </Link>
                    <Link href="/bid">
                    <a>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img9.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    </a>
                    </Link>
                    <Link href="/bid">
                    <a>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img10.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    </a>
                    </Link>
                    <Link href="/bid">
                    <a>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img5.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    </a>
                    </Link>
                </Slider>
            </div>
        </section>
        <section className="section past_sec">
          <div className="container">
            <div className="title_wrap d-flex">
              <h3 className="sec_title">Past</h3>
              <div className="ml-auto right">
                <a href="#" className="btn btn-outline btn-white">View All</a>
              </div>
              </div>
              <Slider className="three_slide_carousal carousal album_carousal" {...settings}>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img3.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img3.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img3.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="slide">
                      <div className="wrap">
                        <figure className="thumbnail">
                      <Image src="/images/img3.jpg"  height={445} width={398} alt="img1"/>
                      <div className="date">Mon, Jul 19</div>
                      </figure>
                      <div className="desc">
                      <h4 className="album_name">The Pixeled Girl</h4>
                      <div className="author d-flex align-items-center">
                        <div className="avtar">
                          <Image src="/images/avtar2.jpg" height={164} width={164} alt="" /> 
                          </div>
                          <h5 className="author_name">Martin Kopal</h5>
                        </div>
                      </div>
                    </div>
                    </div>
                </Slider>
            </div>
            </section>
            <Footer/>
            </main>
        </Layout>
        </div>
    )
}