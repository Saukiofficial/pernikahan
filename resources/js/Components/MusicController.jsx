import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Volume1 } from 'lucide-react';


let globalAudioInstance = null;
let globalIsPlaying = false;
let globalIsMuted = false;
let globalVolume = 0.5;

export default function MusicController({ src }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);


  useEffect(() => {

    if (!globalAudioInstance) {
      const audio = new Audio(src);
      audio.loop = true;
      audio.volume = 0.5;

      globalAudioInstance = audio;
      audioRef.current = audio;


      const shouldPlayOnLoad = sessionStorage.getItem('playMusicOnLoad');

      if (shouldPlayOnLoad === 'true') {
        setTimeout(() => {
          audio.play()
            .then(() => {
              setIsPlaying(true);
              globalIsPlaying = true;
            })
            .catch((error) => {
              console.warn("Autoplay ditolak oleh browser.", error);
            });
        }, 500);


        sessionStorage.removeItem('playMusicOnLoad');
      }
    } else {

      audioRef.current = globalAudioInstance;
      setIsPlaying(globalIsPlaying);
      setIsMuted(globalIsMuted);
      setVolume(globalVolume);
    }

    setIsInitialized(true);


    return () => {

    };
  }, [src]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      globalIsPlaying = false;
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
          globalIsPlaying = true;
        })
        .catch((error) => {
          console.warn("Pemutaran audio gagal.", error);
          alert("Tidak dapat memutar musik. Silakan coba lagi.");
        });
    }
  };


  const toggleMute = () => {
    if (!audioRef.current) return;

    const newMutedState = !isMuted;
    audioRef.current.muted = newMutedState;
    setIsMuted(newMutedState);
    globalIsMuted = newMutedState;
  };


  const handleVolumeChange = (e) => {
    if (!audioRef.current) return;

    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    globalVolume = newVolume;


    if (newVolume > 0 && isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      globalIsMuted = false;
    }
  };


  const getVolumeIcon = () => {
    if (isMuted || volume === 0) {
      return <VolumeX size={24} />;
    } else if (volume < 0.5) {
      return <Volume1 size={24} />;
    } else {
      return <Volume2 size={24} />;
    }
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <div
      className="fixed bottom-24 right-4 z-50 flex flex-col items-end space-y-2"
      onMouseEnter={() => setShowVolumeSlider(true)}
      onMouseLeave={() => setShowVolumeSlider(false)}
    >

      {showVolumeSlider && (
        <div className="bg-gray-800 bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-xl mb-2 animate-fadeIn">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-32 h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-blue-500"
            style={{
              background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume * 100}%, #4b5563 ${volume * 100}%, #4b5563 100%)`
            }}
          />
          <div className="text-white text-xs text-center mt-1">
            {Math.round(volume * 100)}%
          </div>
        </div>
      )}


      <button
        onClick={toggleMute}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isMuted || volume === 0
            ? 'bg-gray-600 text-gray-300'
            : 'bg-gradient-to-br from-blue-500 to-blue-600 text-white'
        }`}
        aria-label={isMuted ? "Unmute music" : "Mute music"}
      >
        {getVolumeIcon()}
      </button>

 
      <button
        onClick={togglePlay}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
          isPlaying
            ? 'bg-gradient-to-br from-pink-500 to-purple-600 text-white animate-pulse'
            : 'bg-gray-700 text-white hover:bg-gray-800'
        }`}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
    </div>
  );
}
