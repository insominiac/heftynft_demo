import Head from 'next/head'
import React, { useState } from 'react';
import Image from 'next/image'
import Layout from '../components/layout'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'next/link'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Popup from '../components/popup'

export default function Bid(){

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 

    return (
        <div className="bid wrapper">
             <Layout >
          <Header/>
          <main className="main">
          <section className="section bid_sec pt-header">
          <div className="container">
            <article className="bid_detail_sec">
              <div className="row">
                <div className="col-left">
                  <div className="img_view">
                    <Image src="/images/img11.jpg" width=
                    {603} height={647} alt=""></Image>
                  </div>
                </div>
                <div className="col-right">
                  <Link href="#">
                  <a className="btn-icon btn-close"><i className="icon-close"></i></a>
                  </Link>
                  <div className="detail_view">
                    <div className="people_status mt-0">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <div className="d-flex align-items-center">
                            <div className="avtar">
                              <Image src="/images/avtar3.jpg" width={46} height={46} alt=""></Image>
                              <b className="active"></b>
                            </div>
                            <div className="avtar_detail">
                              <h5 className="pose">Creator</h5>
                              <h6 className="name">Enrico Cole</h6>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 text-right">
                          <a href="#" className="link share_link"><span>Share</span><i className="icon-share"></i></a>
                        </div>
                      </div>
                    </div>
                    <h3 className="album_name">The Pixeled Girl</h3>
                    <div className="small_detail">
                      <div className="row border-right-columns">
                        <div className="col-sm-5 pb-xs-20">
                          <h5>Current Bid</h5>
                          <div className="value current_bid"><sup>$</sup>100</div>
                        </div>
                        <div className="col-sm-7">
                          <h5>Auction ends in</h5>
                          <div className="value auction_timer d-flex">
                            <div className="slot">
                              3<span>d</span>
                            </div>
                            <div className="slot">
                              5<span>h</span>
                            </div>
                            <div className="slot">
                              51<span>m</span>
                            </div>
                            <div className="slot">
                              55<span>s</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="desc">
                      <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used
                        to demonstrate the visual form of a document or a typeface without relying on
                        meaningful content. Lorem ipsum may be used as a placeholder before final copy is
                        available. It is also used to temporarily replace text in a process called greeking,
                        which allows designers to consider the form of a webpage or publication.</p>
                    </div>
                    <div className="edition d-flex">
                      <h6 className="edition_name">#1 Edition</h6>
                      <a href="#" className="select_edition ml-auto">Select Edition <i className="fa fa-angle-right" aria-hidden="true"></i></a>
                    </div>
                  
                    <Tabs defaultActiveKey="ownership" id="nav-tab" className="theme2 d-flex" role="tablist"  transition={true}>
                     <Tab eventKey="ownership" title="Ownership" className="nav-link" id="tab1" data-toggle="tab" role="tab">
                        <div className="people_status">
                              <div className="row align-items-center">
                                <div className="col-6">
                                  <div className="d-flex align-items-center">
                                    <div className="avtar">
                                      <Image src="/images/avtar3.jpg" width={46} height={46} alt=""></Image>
                                  <b className="active"></b>
                                    </div>
                                    <div className="avtar_detail">
                                      <h5 className="pose">Creator</h5>
                                      <h6 className="name">Enrico Cole</h6>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6 text-right">
                                  <a href="#" className="link copy_link"><span>Copy</span><i className="icon-copy"></i></a>
                                </div>
                              </div>
                            </div>
                     </Tab>
                     <Tab eventKey="history" title="History" className="nav-link" data-toggle="tab" id="tab2" role="tab">
                     <div className="people_status">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <div className="avtar">
                                  <Image src="/images/avtar3.jpg" width={46} height={46} alt=""></Image>
                               <b className="active"></b>
                                </div>
                                <div className="avtar_detail">
                                  <h5 className="pose">Creator</h5>
                                  <h6 className="name">Enrico Cole</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-6 text-right">
                              <a href="#" className="link copy_link"><span>Copy</span><i className="icon-copy"></i></a>
                            </div>
                          </div>
                        </div>
                     </Tab>
                     <Tab eventKey="bids" title="Bids" className="nav-link" data-toggle="tab" id="tab3" role="tab">
                     <div className="people_status">
                          <div className="row align-items-center">
                            <div className="col-6">
                              <div className="d-flex align-items-center">
                                <div className="avtar">
                                  <Image src="/images/avtar3.jpg" width={46} height={46} alt=""></Image>
                               <b className="active"></b>
                                </div>
                                <div className="avtar_detail">
                                  <h5 className="pose">Creator</h5>
                                  <h6 className="name">Enrico Cole</h6>
                                </div>
                              </div>
                            </div>
                            <div className="col-6 text-right">
                              <a href="#" className="link copy_link"><span>Copy</span><i className="icon-copy"></i></a>
                            </div>
                          </div>
                        </div>
                     </Tab>
                    </Tabs>
                    
                    <button onClick={togglePopup} className="btn btn-field btn-blue full uppercase" data-target="#popup">Place a Bid</button>
                          
                    
                    </div>
                </div>
              </div>
            </article>
          </div>
        </section>
            </main>
           
          </Layout>
        </div>
    )
}