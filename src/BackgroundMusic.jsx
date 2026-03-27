import { useState, useRef, useEffect } from "react";
import MusicFile from "./Assets/Images/Musica.mp3"; 

export default function BackgroundMusic() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().catch(() => {
          console.log("Autoplay bloqueado por el navegador");
        });
        setIsPlaying(true);
      }
      document.removeEventListener("click", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    return () => document.removeEventListener("click", handleUserInteraction);
  }, [isPlaying]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        console.log("No se pudo reproducir");
      });
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={MusicFile} loop />
      
      {/* Botón chistoso */}
      <button
        onClick={togglePlay}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 18px",
          backgroundColor: "#CE5368",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0,0,0,0.3)"
        }}
      >
        {isPlaying ? " Silenciar" : " Reproducir Música"}
      </button>

    </>
  );
}
