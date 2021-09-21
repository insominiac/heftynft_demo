import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";
import Image from 'next/image'

export default function ArtistDetail(){

    return(
        <div className="artistdetail_wrapper">

        <Layout>
            
            <Header/>
            <main className="main">
            <div className="artist_detail_page">

                <section className="artist_detail_banner">
                <div className="banner_actions">
                    <a href="#" className="btn btn-outline btn-white btn-follow">Follow</a>
                    <a href="#" className="btn btn-icon btn-share"></a>
                </div>
                </section>

                <section className="artist_detail_sec text-center">
                <div className="container">
                    <div className="wrap">
                    <div className="content">
                        <div className="avtar"><Image src="/images/avtar1.jpg" width={164} height={164} alt="" /></div>
                        <h4 className="name"><span>Eddie Harris <i className="icon-verified"></i></span></h4>
                        <h5 className="id">@eddie_harris</h5>
                        <div className="text">
                        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication.</p>
                        </div>
                        <ul className="follow_us">
                        <li>
                            <a href="#" target="_blank"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        </li>
                        <li>
                            <a href="#" target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                        </li>
                        </ul>
                        <div className="creations-followers">
                        <div className="row">
                            <div className="col-6 first">
                            <div className="count">4</div>
                            <h6>Creations</h6>
                            </div>
                            <div className="col-6">
                            <div className="count">6</div>
                            <h6>Followers</h6>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

                <section className="section upcoming_sec">
                <div className="container mini-container">
                    <div className="three_slide_carousal carousal album_carousal row">
                    <div className="col-sm-6 col-md-4 slide">
                        <div className="wrap">
                        <figure className="thumbnail">
                            <Image src="/images/img6.jpg" width={338} height={445} alt=""/>
                            <div className="date end-time">Ends in <b>07h 16m 07s</b></div>
                        </figure>
                        <div className="desc">
                            <h4 className="album_name">The Pixeled Girl</h4>
                            <div className="author d-flex align-items-center">
                            <div className="avtar">
                                <Image src="/images/avtar1.jpg" width={43} height={43} alt=""/>
                            </div>
                            <h5 className="author_name"><span className="title">Creator</span>Enrico Cole <i className="icon-verified"></i></h5>
                            </div>
                        </div>
                        <hr/>
                        <div className="bid">
                            <h6 className="title">Current bid</h6>
                            <h6 className="amt">$3,618.36</h6>
                            <a href="#" className="btn btn-field btn-live">Live</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 slide">
                        <div className="wrap">
                        <figure className="thumbnail">
                            <Image src="/images/img6.jpg" width={338} height={445} alt=""/>
                        </figure>
                        <div className="desc">
                            <h4 className="album_name">The Pixeled Girl</h4>
                            <div className="author d-flex align-items-center">
                            <div className="avtar">
                                <Image src="/images/avtar1.jpg" width={43} height={43} alt=""/>
                            </div>
                            <h5 className="author_name"><span className="title">Creator</span>Enrico Cole <i className="icon-verified"></i></h5>
                            </div>
                        </div>
                        <hr/>
                        <div className="bid">
                            <h6 className="title">Current bid</h6>
                            <h6 className="amt">$3,618.36</h6>
                            <a href="#" className="btn btn-field btn-live">Live</a>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-4 slide">
                        <div className="wrap">
                        <figure className="thumbnail">
                            <Image src="/images/img6.jpg" width={338} height={445}  alt=""/>
                        </figure>
                        <div className="desc">
                            <h4 className="album_name">The Pixeled Girl</h4>
                            <div className="author d-flex align-items-center">
                            <div className="avtar">
                                <Image src="/images/avtar1.jpg" width={43} height={43} alt="" />
                            </div>
                            <h5 className="author_name"><span className="title">Creator</span>Enrico Cole <i className="icon-verified"></i></h5>
                            </div>
                        </div>
                        <hr/>
                        <div className="bid">
                            <h6 className="title">Sold to <a href="#">@marlinK1991</a> for</h6>
                            <h6 className="amt">$3,618.36</h6>
                            <a href="#" className="btn btn-field btn-sold">Sold</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                </div>
           </main>
            <Footer/>
      </Layout>
      </div>
    )
}