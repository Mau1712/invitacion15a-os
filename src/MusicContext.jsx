import { createContext, useState, useRef } from "react";
import music from "./assets/cancion.mp3"; // 👈 tu canción

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const audioRef = useRef(new Audio(music)); // 👈 crea el audio
  const [isPlaying, setIsPlaying] = useState(false);

  const playMusic = () => {
    audioRef.current.loop = true; // 🔁 para que se repita automáticamente
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopMusic = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return (
    <MusicContext.Provider value={{ playMusic, stopMusic, isPlaying }}>
      {children}
    </MusicContext.Provider>
  );
};
