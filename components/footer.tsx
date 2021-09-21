import Image from 'next/image'

export default function Footer(){

    return <footer className="footer">
    <div className="container text-center">
      <div className="logo">
          <Image src="/images/logo@3x.png" width={245} height={38} alt=""></Image>
      </div>
      <ul>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms &amp; Conditions</a></li>
        <li><a href="#">FAQs</a></li>
      </ul>
      <div className="copyright">
        Copyright © 2021 HiftyNFT. All rights reserved
      </div>
    </div>
</footer>
}