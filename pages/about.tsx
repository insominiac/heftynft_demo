import Footer from "../components/footer";
import Header from "../components/header";
import Layout from "../components/layout";

export default function About(){
    return(
        <div className="about-wrapper">
            <Layout>
                <Header/>
            <main className="main">
                <section className="about_section">
                    <div className="container">      
                    <div className="text-center">
                        <h1>Art is now IMMORTAL</h1>
                        <p>Hefty NFT prides in helping major legendary artists from around the world to immortalize their art by converting into NFTs. <br/>
                        We also provide them a transparant platform to take their art to its most passionate connoisseur at the best value.</p>
                        <p>HeftyNFT, as a name suggests, aims to be the largest marketplace for user-owned, NFTized digital goods, which includes paintings, art, posters, music, videos, collectibles, gaming assets, to name a few. The authenticity of these assets is backed by a Blockchain.</p>
                    </div>
                    <div className="blockquote">
                        <ul className="list-type-tick">
                        <li>NFTs or Non-Fungible Tokens have exciting new properties: they are unique, with provable ownership, can be designed to be scarce, highly liquid, and usable across multiple applications.</li>
                        <li>NFTs can be traded on marketplace, bought, sold and re-sold. HeftyNFT aims to collate all the unique digital goods of India in one place and be one of the most authentic platform for creation, listing, transactions, and protection of digital assets owned by creators.</li>
                        </ul>
                    </div>
                    </div>
                 </section>
            </main>
                <Footer/>
            </Layout>
        </div>
    )
}