import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.jpeg';
import qrCodeWhatsapp from './assets/qr-code.png';
import qrCodeInstagram from './assets/qr_instagram_racontrole.png';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import controlePombos from './assets/controle-pombos.png';
import controleRato from './assets/controle-rato.webp';
import limpezaCaixaDagua from './assets/limpeza-caixa-dagua.png';
import cupim from './assets/cupim.png';
import outrasPragas from './assets/outraspragas.png';
import img1 from './assets/carrossel/1.jpeg';
import img2 from './assets/carrossel/2.jpeg';
import img3 from './assets/carrossel/3.jpeg';
import img5 from './assets/carrossel/5.jpeg';
import img6 from './assets/carrossel/6.jpeg';
import img7 from './assets/carrossel/7.jpeg';
import img8 from './assets/carrossel/8.jpeg';
import img9 from './assets/carrossel/9.jpeg';
import img10 from './assets/carrossel/10.jpeg';
import img11 from './assets/carrossel/11.jpeg';
import img12 from './assets/carrossel/12.jpeg';
import apresentacao from './assets/apresentacao.mp4';
const carrosselImgs = [img1, img2, img3, img5, img6, img7, img8, img9, img10, img11, img12];

function Hero() {
  return (
    <section className="w-full px-2 sm:px-4 py-8 sm:py-12 bg-gradient-to-br from-green-700 via-green-600 to-green-200 flex flex-col items-center">
      <img src={logo} alt="Logo R/A Controle de Pragas" className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full shadow-lg bg-white mb-4 object-cover border-4 border-green-600" />
      <h1 className="text-2xl sm:text-4xl font-extrabold text-white mb-2 text-center font-inter drop-shadow">R/A Controle de Pragas</h1>
      <h2 className="text-base sm:text-lg font-medium text-green-100 mb-6 text-center font-inter drop-shadow">Orçamento rápido, atendimento profissional e preço que cabe no seu bolso!</h2>
      <div className="flex flex-col sm:flex-row w-full max-w-3xl gap-4 mb-2">
        <a href="https://wa.me/5511986608940" target="_blank" rel="noopener noreferrer" className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-base shadow-md transition-transform duration-200 transform hover:scale-105 text-center flex items-center justify-center gap-2">
          <FaWhatsapp className="text-2xl" />
          Pedir Orçamento no WhatsApp
        </a>
        <a href="https://www.instagram.com/racontroledpragas/?igsh=d29pNDBkNXhyMzk4#" target="_blank" rel="noopener noreferrer" className="flex-1 bg-white/20 hover:bg-blue-50/30 text-blue-100 hover:text-blue-700 px-6 py-3 rounded-lg font-bold text-base shadow-md border-2 border-blue-100 hover:border-blue-700 flex items-center justify-center gap-2 transition-transform duration-200 transform hover:scale-105 text-center" aria-label="Instagram">
          <FaInstagram className="text-2xl" />
          @racontroledpragas
        </a>
        <Link to="/sobre" className="flex-1 bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg font-bold text-base shadow-md transition-transform duration-200 transform hover:scale-105 text-center flex items-center justify-center gap-2" aria-label="Sobre Mim">
          Sobre Mim
        </Link>
      </div>
    </section>
  );
}

function Servicos() {
  const lista = [
    { nome: 'Limpa caixa d’água', emoji: <img src={limpezaCaixaDagua} alt="Limpeza de caixa d’água" className="w-12 h-12 object-contain mx-auto" />, descricao: 'Higienização completa para garantir água limpa e segura.' },
    { nome: 'Desratização', emoji: <img src={controleRato} alt="Rato" className="w-12 h-12 object-contain mx-auto" />, descricao: 'Eliminação de ratos e prevenção de infestações.' },
    { nome: 'Descupinização', emoji: <img src={cupim} alt="Cupim" className="w-12 h-12 object-contain mx-auto" />, descricao: 'Controle de cupins para proteger sua estrutura.' },
    { nome: 'Controle de pombo', emoji: <img src={controlePombos} alt="Pombo urbano" className="w-12 h-12 object-contain mx-auto" />, descricao: 'Soluções para afastar e evitar pombos.' },
    { nome: 'Dedetização', emoji: <img src={outrasPragas} alt="Outras pragas" className="w-12 h-12 object-contain mx-auto" />, descricao: 'Combate a baratas, formigas e outros insetos.' },
  ];
  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-green-100 text-gray-900 py-10 px-2 sm:px-4 text-center w-full">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-green-700 mb-8 font-inter">Serviços</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {lista.map((s, i) => (
            <li key={i} className="relative flex flex-col items-center bg-white/80 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-200 border border-green-100 hover:-translate-y-1 backdrop-blur-sm">
              <span className="text-4xl mb-2 drop-shadow-sm">{s.emoji}</span>
              <span className="font-semibold text-base sm:text-lg text-green-800 font-inter mb-1">{s.nome}</span>
              <span className="block text-green-700 text-sm mt-2 font-inter">{s.descricao}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Carrossel() {
  const visibleImages = 3;
  const [startIndex, setStartIndex] = useState(0);
  const [zoomedImg, setZoomedImg] = useState(null);
  const totalImages = carrosselImgs.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 2500);
    return () => clearInterval(interval);
  }, [totalImages]);

  const displayedImages = Array.from({ length: visibleImages }, (_, i) => {
    const imageIndex = (startIndex + i) % totalImages;
    return carrosselImgs[imageIndex];
  });

  return (
    <section className="w-full flex flex-col items-center py-8 bg-gradient-to-b from-green-100 to-green-200">
      <div className="w-full max-w-4xl flex items-center justify-center">
        <div className="flex gap-4 w-full justify-center">
          {displayedImages.map((src, i) => (
            <button
              key={i}
              type="button"
              className="group bg-transparent border-none p-0 focus:outline-none"
              onClick={() => setZoomedImg(src)}
            >
              <img
                src={src}
                alt={`Trabalho ${i + 1}`}
                className="rounded-xl object-cover shadow-lg transition-all duration-500 w-[110px] h-[110px] sm:w-[180px] sm:h-[180px] md:w-[220px] md:h-[220px] bg-white border border-green-200 cursor-pointer group-hover:scale-105"
                style={{ minWidth: 0 }}
              />
            </button>
          ))}
        </div>
      </div>
      {zoomedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-all"
          onClick={() => setZoomedImg(null)}
        >
          <div className="relative max-w-full max-h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black/40 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors z-10"
              onClick={() => setZoomedImg(null)}
              aria-label="Fechar"
              type="button"
            >
              &times;
            </button>
            <img
              src={zoomedImg}
              alt="Zoom"
              className="rounded-xl shadow-2xl transition-transform duration-300 scale-100 md:scale-110 max-h-[80vh] max-w-[90vw] bg-white border-4 border-green-200"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function Contato() {
  return (
    <section className="bg-gradient-to-b from-white via-green-50 to-green-100 text-gray-900 py-10 px-4 text-center w-full">
      <h3 className="text-xl font-bold text-green-800 mb-4 font-inter">Fale com a gente</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-4">
        <a href="https://wa.me/5511986608940" className="flex items-center gap-2 text-green-700 font-bold text-lg hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="text-2xl" />
          +55 11 98660-8940
        </a>
        <span className="hidden sm:inline text-gray-400">|</span>
        <a href="tel:+5511989510440" className="text-green-800 font-bold text-lg hover:underline transition-colors">+55 11 98951-0440</a>
      </div>
      <div className="flex items-center justify-center gap-2 text-base mb-4">
        <FaInstagram className="text-xl text-pink-600" />
        <b>Instagram:</b> <a href="https://www.instagram.com/racontroledpragas/?igsh=d29pNDBkNXhyMzk4#" target="_blank" rel="noopener noreferrer" className="text-blue-700 font-bold hover:underline">@racontroledpragas</a>
      </div>
      <div className="flex flex-col sm:flex-row justify-center gap-8 my-8">
        <div className="max-w-[140px] mx-auto text-center">
          <img src={qrCodeWhatsapp} alt="QR Code WhatsApp" className="w-full rounded-xl border-2 border-green-400 bg-white shadow-md hover:shadow-lg transition-shadow duration-200" />
          <div className="text-sm text-green-700 mt-3 font-semibold flex flex-col items-center justify-center font-inter leading-snug">
            <span className="flex items-center gap-1"><FaWhatsapp className="inline text-base" />Aponte a câmera</span>
            <span>para falar no WhatsApp</span>
          </div>
        </div>
        <div className="max-w-[140px] mx-auto text-center">
          <img src={qrCodeInstagram} alt="QR Code Instagram" className="w-full rounded-xl border-2 border-blue-700 bg-white shadow-md hover:shadow-lg transition-shadow duration-200" />
          <div className="text-sm text-blue-700 mt-3 font-semibold flex flex-col items-center justify-center font-inter leading-snug">
            <span className="flex items-center gap-1"><FaInstagram className="inline text-base" />Aponte a câmera</span>
            <span>para seguir no Instagram</span>
          </div>
        </div>
      </div>
      <div className="mt-6 font-bold text-green-700 font-inter">Atendimento rápido e sem compromisso!</div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 px-4 text-sm mt-auto font-inter w-full">
      R/A Controle de Pragas &copy; {new Date().getFullYear()}<br />
      <a href="https://www.instagram.com/racontroledpragas/?igsh=d29pNDBkNXhyMzk4#" target="_blank" rel="noopener noreferrer" className="text-green-400 font-bold hover:underline inline-block mt-1" aria-label="Instagram">Instagram: @racontroledpragas</a><br />
      <span className="text-gray-400">Desenvolvido por Elton Peixoto</span>
    </footer>
  );
}

function Sobre() {
  const [videoRef, setVideoRef] = useState(null);
  const navigate = useNavigate();

  const handlePlayPause = () => {
    if (videoRef) {
      if (videoRef.paused) videoRef.play();
      else videoRef.pause();
    }
  };
  const handleBack10 = () => {
    if (videoRef) videoRef.currentTime = Math.max(0, videoRef.currentTime - 10);
  };
  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = apresentacao;
    a.download = 'apresentacao.mp4';
    a.click();
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-green-200 py-8 px-2">
      <div className="w-full max-w-2xl bg-white/90 rounded-2xl shadow-2xl p-6 flex flex-col gap-6 items-center border border-green-200">
        <h1 className="text-2xl font-bold text-green-800 mb-2 font-inter">Sobre Mim</h1>
        <div className="w-full flex flex-col items-center gap-4">
          <video
            src={apresentacao}
            ref={setVideoRef}
            className="rounded-xl w-full max-h-[320px] bg-black border-2 border-green-400 shadow-lg focus:outline-none"
            controls={false}
            tabIndex={0}
            aria-label="Vídeo de apresentação"
          />
          <div className="flex gap-4 justify-center mt-2">
            <button onClick={handlePlayPause} className="bg-green-600 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="Play/Pause">▶️/⏸️</button>
            <button onClick={handleBack10} className="bg-green-200 text-green-900 px-4 py-2 rounded-lg font-bold shadow hover:bg-green-300 focus:outline-none focus:ring-2 focus:ring-green-400" aria-label="Voltar 10 segundos">⏪ 10s</button>
            <button onClick={handleDownload} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400" aria-label="Baixar vídeo">⬇️ Baixar</button>
          </div>
        </div>
        <div className="w-full bg-green-50 border-l-4 border-green-600 rounded-lg p-4 shadow-inner text-green-900 text-base font-inter leading-relaxed focus:outline-none" tabIndex={0} aria-label="Apresentação profissional">
          <h2 className="text-lg font-bold mb-2">Profissional com mais de 12 anos de experiência</h2>
          <p>
            Atuo há mais de 12 anos no segmento de controle de pragas urbanas, dedetização, descupinização, desratização, controle de pombos e higienização de caixas d’água. Tenho experiência em atendimento residencial, comercial e industrial, sempre prezando pela segurança, eficiência e respeito ao cliente.
          </p>
          <p className="mt-2">
            Utilizo produtos regularizados pela Anvisa, técnicas modernas e equipamentos de última geração para garantir resultados duradouros e seguros para sua família, empresa ou condomínio.
          </p>
          <p className="mt-2">
            <b>Certificações:</b> NR35 (Trabalho em Altura) e NR33 (Espaço Confinado), garantindo total segurança em serviços especiais como limpeza de caixas d’água e controle de pombos em locais elevados.
          </p>
          <p className="mt-2">
            Entre em contato para um orçamento sem compromisso e tenha a tranquilidade de contar com um profissional qualificado!
          </p>
        </div>
        <button onClick={() => navigate(-1)} className="mt-4 bg-gray-700 text-white px-6 py-2 rounded-lg font-bold shadow hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400" aria-label="Voltar">Voltar</button>
      </div>
    </div>
  );
}

function Menu() {
  return (
    <nav className="w-full flex justify-end p-4 bg-white/80 shadow-sm fixed top-0 left-0 z-50">
      <Link to="/sobre" className="bg-green-700 text-white px-4 py-2 rounded-lg font-bold shadow hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all" aria-label="Sobre Mim">Sobre Mim</Link>
    </nav>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <>
          <Hero />
          <Servicos />
          <Carrossel />
          <Contato />
          <Footer />
        </>
      } />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="pt-0">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
