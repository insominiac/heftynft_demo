import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Link from 'next/link'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Footer from '../components/footer'




export default function Artists(){
    return(
            <div className="artists_wrapper">
             <Layout >
             <Header/>
             <main className="main">
             <div className="artist_page">

             <section className="artist_detail_banner">
            </section>

            <section className="section featured_artists_sec pt-120">
            <div className="container mini-container">
              
              <div className="title_wrap d-flex">
                <h2 className="sec_title mb-0">Featured Artists</h2>
                <div className="dropdown sort_by ml-auto">
                  <h6>Sort by:</h6>
                  <div className="dropdown bootstrap-select">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                     Please Select
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Verified</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Most Recent</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Most Creations</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Most Followed</Dropdown.Item>

                    </Dropdown.Menu>
                </Dropdown>

                  </div>
                </div>
              </div>
  
              <div className="row grid carousal">
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img2.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar1.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Eddie Harris <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@eddie_harris</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img3.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar2.jpg" width={164} height={164}  alt=""/></div>
                      <h4 className="name"><span>Martin Kopal <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@marlin1991</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img4.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar3.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Payton Wall <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@pawall772</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img2.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar1.jpg" width={164} height={164}  alt=""/></div>
                      <h4 className="name"><span>Eddie Harris <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@eddie_harris</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img3.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar2.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Martin Kopal <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@marlin1991</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img4.jpg" width={345} height={180} alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar3.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Payton Wall <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@pawall772</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail.html" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img2.jpg" width={345} height={180}  alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar1.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Eddie Harris <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@eddie_harris</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img3.jpg" width={345} height={180}  alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar2.jpg" width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Martin Kopal <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@marlin1991</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 slide">
                  <div className="wrap">
                    <a href="artist-detail" className="box-link"></a>
                    <figure className="thumbnail">
                      <a href="artist-detail" className="box-link"></a>
                      <Image src="/images/img4.jpg" width={345} height={180}  alt=""/>
                    </figure>
                    <div className="content">
                      <div className="avtar"><Image src="/images/avtar3.jpg"  width={164} height={164} alt=""/></div>
                      <h4 className="name"><span>Payton Wall <i className="icon-verified"></i></span></h4>
                      <h5 className="id">@pawall772</h5>
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
                      <div className="cta">
                        <a href="artist-detail" className="btn btn-outline btn-white btn-follow">Follow</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          </div>
          <Footer/>
             </main>
             </Layout>
            </div>
    )
}