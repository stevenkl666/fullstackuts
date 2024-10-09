import '../style/Navbar.css'
function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>Tobacco Store.</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Beranda</a></li>
                    <li><a href="#produk">Produk</a></li>
                    <li><a href="#courses">Tentang Kami</a></li>
                    <li><a href="#contact">Kontak</a></li>
                    <li><a href="#chart">Keranjang</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar