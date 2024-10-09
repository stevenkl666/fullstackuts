import Navbar from "../components/Navbar";
import "../style/Home.css";
import Footer from "../components/Footer";
import { homeSection } from "../data/HomeSection";
import parser from "html-react-parser";
import gambar1 from "../img/strwbry.jpg";
import { createItem } from "../service/getApi";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [post, setPost] = useState({
    name: "",
  });
  const [data, setData] = useState();

  async function getUser() {
    try {
      const response = await axios.get("http://localhost:3000/getUser");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProduk() {
    try {
      const response = await axios.get("ttp://localhost:3000/getItem");
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (!post.name) {
      alert("Isi form data dengan lengkap");
      return;
    }

    createItem(post)
      .then((res) => {
        console.log(res);
        if (post) {
          alert("Table successfully created, please refresh the page!");
        }
        closeModal();
        return res.data;
      })
      .catch((error) => {
        console.error("Error :", error);
        alert(
          "An error occurred while creating Table. Please try again later."
        );
      });
  };

  const handle = (e) => {
    const newPost = { ...post };
    newPost[e.target.id] = e.target.value;
    setPost(newPost);
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* home */}
        <section id="home">
          <div className="kolom">{parser(homeSection.content)}</div>
        </section>
        {/* card section */}
        <section id="produk">
          <h2 className="iwan">Produk Kami</h2>
          <div className="card-container">
            <div className="card">
              <img src={gambar1} alt="Course 1" />
              <h3>Tembakau Kering</h3>
              <p>Rp. 10.000 rasa strawberry</p>
              <a href="#" className="btn">
                Buy Now
              </a>
            </div>
            <div className="card">
              <img src={gambar1} alt="Course 2" />
              <h3>Tembakau Basah</h3>
              <p>Rp. 10.000 rasa coklat</p>
              <a href="#" className="btn">
                Buy Now
              </a>
            </div>
            <div className="card">
              <img src={gambar1} alt="Course 3" />
              <h3>Tembakau Kering</h3>
              <p>Rp. 10.000 rasa strawberry</p>
              <a href="#" className="btn">
                Buy Now
              </a>
            </div>
          </div>
        </section>
        {/* courses section */}
        <section id="courses">
          <div className="kolom">
            <p className="deskripsi">Tentang Kami</p>
            <h2>Tembakau Khas Nusantara</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              deserunt voluptatibus possimus blanditiis reiciendis. Qui,
              facilis! Delectus exercitationem dolores sapiente?
            </p>
            <p>
              <a href="" className="tbl-biru">
                Pelajari Lebih Lanjut
              </a>
            </p>
          </div>
          {/* <img src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?size=626&ext=jpg&ga=GA1.2.1769275626.1605867161" /> */}
        </section>
      </div>
      {/* Contact section */}
      <section id="contact">
        <div className="container">
          <h2>Hubungi Kami</h2>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Nama</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Pesan</label>
                <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit" className="btn">
                Kirim Pesan
              </button>
            </form>
          </div>
          <div className="contact-info">
            <h3>Informasi Kontak</h3>
            <p>Email: info@tembakaununsantara.com</p>
            <p>Telepon: +62 895 0826 5718</p>
            <p>Alamat: Jl. Tembakau No. 123, Kota Nusantara, Indonesia</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
