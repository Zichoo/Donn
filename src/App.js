
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';

const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('black');
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActiveLink(link);
    document.body.style.backgroundColor = link === 'black' ? '#7326ab' : '#968f9c';

    // Memilih semua elemen dengan kelas .btn-nav dan mengatur warna teksnya
    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = link === 'black' ? '#968f9c' : '#7326ab';
    });

    // Memilih elemen .App-header dan mengatur latar belakangnya
    const appHeader = document.querySelector(".App-header");

    if (appHeader) {
      appHeader.style.backgroundColor = link === 'black' ? '#7326ab' : '#fff';
      appHeader.style.transition = 'background-color 0.5s ease'; // Sesuaikan durasi dan jenis efek sesuai kebutuhan
      appHeader.style.backgroundColor = link === 'black' ? '#7326ab' : '#968f9c';
    }
    
  };

  // useEffect untuk memeriksa URL saat komponen dimuat
  useEffect(() => {
    const path = location.pathname;
    setActiveLink(path === '/' ? 'black' : 'white');
    document.body.style.backgroundColor = path === '/' ? '#7326ab#000' : '#968f9c';

    const navLinks = document.querySelectorAll(".btn-nav");
    navLinks.forEach((navLink) => {
      navLink.style.color = path === '/' ? '#fff' : '#000';
    });

    const appHeader = document.querySelector(".App-header");
    if (appHeader) {
      appHeader.style.backgroundColor = path === '/' ? '#7326ab' : '#968f9c';
    }
  }, [location.pathname]);

  return (
    <nav>
      <Link
        className={`btn-nav ${activeLink === 'black' ? 'active' : ''}`}
        to="/"
        onClick={() => handleLinkClick('black')}
      >
        About
      </Link>
      <Link
        className={`btn-nav ${activeLink === 'white' ? 'active' : ''}`}
        to="/white"
        onClick={() => handleLinkClick('white')}
      >
        Hobby
        
      </Link>
    </nav>
  );
};

const BlackPage = () => {
  return (
    <div className="container">
      <div className="black-page">
      <img src='https://miro.medium.com/v2/resize:fit:1400/0*AMU-TphmYKgcmBSV' className="App-logo" alt="logo" />
        <h2>Hai, Saya Dhony</h2>
        <p>Halo, nama saya Dhony Fajriyansyah, Saya seorang siswa di SMK Negeri 6 Jember dengan jurusan Rekayasa Perangkat Lunak (RPL), Dan saya adalah penggemar kucing.</p>
            <p> Saya suka menjelajahi dunia koding. Suka berkolaborasi dalam tim dan selalu mencari peluang baru untuk tumbuh.</p>
    </div>
    </div>
  );
};

const WhitePage = () => {
  return (
    <div className="container">
      <div className="white-page">
        <h2>Hobby Saya</h2>
        <i className="fas fa-image"></i>
        <p>Saya seorang penggemar cerita dan anime, Ketika saya sedang diam, Saya suka melarikan diri ke dunia imajinatif dengan menonton anime. menonton anime mungkin tidak menghasilkan apa",tetapi saya bisa senang/melepaskan rasa setres karena dunia koding.

Selain itu, hobi saya adalah memancing, Mungkin terdengar aneh di telinga kalian, Tapi menurut saya memancing adalah sebuah kegitan yang menguntungkan, Selain menguntungkan saya bisa berinteraksi langsung sengan alam, Mungkin banyak yang bertanya" kenapa hobinya mancing padahalan masih ada kegiatan" lain untuk di jadikan hobi, Menurut saya Hobi mancing dapat menjadi kegiatan yang memuaskan secara fisik dan mental. Selain itu, dapat menjadi peluang untuk bersosialisasi dengan teman-teman atau keluarga serta memberikan pengalaman mendalam dengan alam.

</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <NavigationBar />
          <Routes>
            <Route path="/" element={<BlackPage />} />
            <Route path="/white" element={<WhitePage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
