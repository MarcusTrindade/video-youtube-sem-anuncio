import React, { useState } from 'react';
import './App.css';

function App() {
  const [videoURL, setVideoURL] = useState('');
  const [youtubeVideoID, setYoutubeVideoID] = useState('');
  const [showVideo, setShowVideo] = useState(false);

  const renderVideo = () => {
    if(videoURL !== "") {
      const id = getYouTubeID(videoURL);
      if (id) {
        setYoutubeVideoID(id);
        setShowVideo(true);
      }
    }
  };

  const getYouTubeID = (url) => {
    const videoID = url.split('v=')[1];
    const ampersandPosition = videoID.indexOf('&');
    return ampersandPosition !== -1 ? videoID.substring(0, ampersandPosition) : videoID;
  };

  return (
    <div>
      <div className="text-title">
        <h1>Assista seu vídeo do YouTube sem ANÚNCIO!</h1>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Cole o link do vídeo do YouTube aqui"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
        />
        <button onClick={renderVideo}>Renderizar vídeo</button>
      </div>

      {showVideo && (
        <div className="video-container">
          <iframe
            title='frameVideoYoutube'
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${youtubeVideoID}`}
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="qr-code-container">
        <div className="qr-code">
          <img src="qrcode_pix_valor_5_reais.jpeg" alt="QR Code PIX R$5,00" />
          <p className="qr-code-text blue-text">
            Ajude este serviço a ficar ONLINE um PIX de R$5,00
          </p>
        </div>
        <div className="qr-code">
          <img src="qrcode_pix_qualquer_valor.jpeg" alt="QR Code PIX Personalizado" />
          <p className="qr-code-text purple-text">
            Ajude este serviço a ficar ONLINE com outro valor!
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
