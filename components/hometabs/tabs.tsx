import Image from 'next/image'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

export default function Hometabs(){

    return(
        <Tabs defaultActiveKey="live" id="nav-tab" className="theme1">
                     <Tab eventKey="live" title="Live Now" className="nav-link" id="nav-home-tab">
                    <h2>The Creator <br/>
                    Network</h2>
                  <div className="date">Tue, Jul 10</div>
                  <div className="people_status">
                    <div className="row border-right-columns">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                            <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Creator</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                          <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Owned by</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blockquote text-center">
                    <div className="current_bid">
                      <h5 className="title">Current Bid</h5>
                      <h5 className="eth">1.00 ETH</h5>
                      <h6 className="price">$3,618.36</h6>
                    </div>
                    <hr/>
                    <div className="auction_time">
                      <h5 className="title">Auction ending in</h5>
                      <div className="timer">
                        <div className="slot hrs">
                          <b className="value">07</b>
                          <span className="unit">hrs</span>
                        </div>
                        <div className="slot mins">
                          <b className="value">34</b>
                          <span className="unit">mins</span>
                        </div>
                        <div className="slot secs">
                          <b className="value">08</b>
                          <span className="unit">secs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-field btn-white full">Place a bid</a>
                    </Tab>
                    <Tab eventKey="upcoming" title="Upcoming" className="nav-link ">
                    <h2>The Creator <br/>
                    Network1</h2>
                  <div className="date">Tue, Jul 10</div>
                  <div className="people_status">
                    <div className="row border-right-columns">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                            <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Creator</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                          <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Owned by</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blockquote text-center">
                    <div className="current_bid">
                      <h5 className="title">Current Bid</h5>
                      <h5 className="eth">1.00 ETH</h5>
                      <h6 className="price">$3,618.36</h6>
                    </div>
                    <hr/>
                    <div className="auction_time">
                      <h5 className="title">Auction ending in</h5>
                      <div className="timer">
                        <div className="slot hrs">
                          <b className="value">07</b>
                          <span className="unit">hrs</span>
                        </div>
                        <div className="slot mins">
                          <b className="value">34</b>
                          <span className="unit">mins</span>
                        </div>
                        <div className="slot secs">
                          <b className="value">08</b>
                          <span className="unit">secs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-field btn-white full">Place a bid</a>
                    </Tab>
                    <Tab eventKey="previous" title="Previous"  className="nav-link "> 
                    <h2>The Creator <br/>
                    Network3</h2>
                  <div className="date">Tue, Jul 10</div>
                  <div className="people_status">
                    <div className="row border-right-columns">
                      <div className="col-6">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                            <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Creator</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                          <div className="avtar">
                          <Image src="/images/avtar3.jpg" width={46} height={46} alt="avatar"/>
                            <b className="active"></b>
                          </div>
                          <div className="avtar_detail">
                            <h5 className="pose">Owned by</h5>
                            <h6 className="name">Enrico Cole</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="blockquote text-center">
                    <div className="current_bid">
                      <h5 className="title">Current Bid</h5>
                      <h5 className="eth">1.00 ETH</h5>
                      <h6 className="price">$3,618.36</h6>
                    </div>
                    <hr/>
                    <div className="auction_time">
                      <h5 className="title">Auction ending in</h5>
                      <div className="timer">
                        <div className="slot hrs">
                          <b className="value">07</b>
                          <span className="unit">hrs</span>
                        </div>
                        <div className="slot mins">
                          <b className="value">34</b>
                          <span className="unit">mins</span>
                        </div>
                        <div className="slot secs">
                          <b className="value">08</b>
                          <span className="unit">secs</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn btn-field btn-white full">Place a bid</a>
                    </Tab>
                  </Tabs>
                
    )
}