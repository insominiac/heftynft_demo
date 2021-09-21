import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Hometabs from '../components/hometabs/tabs'
import Featuredgallery from '../components/homefeaturedgallery/featuredgallery'
import Link from 'next/link'
import Slider from "react-slick";


export default function Home() {

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
 
  };

  
  return (
    <div className="wrapper">
      <Head>
        <title>HEFTYNFT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
          <Header/>
      <main className="main">
        <section className="banner_sec">
          <div className="container d-flex align-items-center justify-content-center">
            <div className="banner_content text-center">
              <h1>Art is now IMMORTAL</h1>
              <p>Hefty NFT represents the rarest work of art from the most covetted and iconic artists from India<br/>
                and rest of the world which are the most desired and perceptively hardest to acquire items<br/>
                on any avid Collectors Wishlist.              
              </p>
              <div className="cta">
                <Link href="/">
                    <a className="btn btn-field btn-yellow">Read more</a>
                </Link>
              </div>
              </div>
            </div>
        </section>
        <section className="section top_drops_sec">
          <div className="container">
            <div className="row m-lr-65">
              <div className="col-md-7 pb-xs-30">
              <h2 className="sec_title">Top Drops</h2>
                 <Slider className="one_slide_carousal carousal" {...settings}>
                    <div className="slide">
                    <Image src="/images/img5.jpg"  height={680} width={680} alt="img1"/>
                    </div>
                    <div className="slide">
                    <Image src="/images/img6.jpeg"  height={680} width={680} alt="img2"/>
                    </div> 
                    <div className="slide">
                      <Image src="/images/profile.jpeg"  height={680} width={680} alt="img3"/>
                    </div>
                  </Slider>
                </div>
                <div className="col-md-5">
                    <Hometabs />
                  </div>
              </div>
            </div>
        </section>
        <section className="section featured_artists_sec">
          <div className="container">
            <h2 className="sec_title">Featured Artists</h2>
            <Featuredgallery/>
          </div>
        </section>
        <section className="section subscribe_sec">
          <div className="container">
            <article className="article">
              <div className="wrap">
                <div className="title_wrap text-center">
                  <h2 className="sec_title">Never miss a drop</h2>
                  <h4 className="sub_title">Subscribe for the latest news, drops & 
                  collectibles</h4>
                </div>
                <form className="subscribe_form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Email"></input>
                    <input type="submit" value="Subscribe" className="btn btn-field btn-blue"></input>
                  </div>
                </form>
                <div className="note">
                  <p>After reading the Privacy Notice, you may subscribe for our newsletter to get special offers and occasional surveys delivered to your inbox. Unsubscribe at any time by clicking on the link in the email.</p>
                </div>
                <div className="condition">
                  <input type="checkbox" id="subscribeCond"></input>
                  <label>By entering my email and subscribing I confirm and agree to the above.</label>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
      <Footer/>
      </Layout>
    </div>
  )
}
