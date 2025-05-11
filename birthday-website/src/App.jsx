import { useState, useEffect } from 'react';
import { Heart, Gift, Cake, ChevronLeft, ChevronRight, Flower } from 'lucide-react';

export default function App() {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showRoses, setShowRoses] = useState(false);

  const photos = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
  ];

  useEffect(() => {
    // Show initial confetti
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const nextPhoto = () => {
    setActivePhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const prevPhoto = () => {
    setActivePhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const toggleMessage = () => {
    setShowMessage(!showMessage);
    if (!showMessage) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const [showHearts, setShowHearts] = useState(false);
  const [birthdayMode, setBirthdayMode] = useState(true);
  const [loveCount, setLoveCount] = useState(0);
  
  const triggerHearts = () => {
    setShowHearts(true);
    setLoveCount(prev => prev + 1);
    setTimeout(() => setShowHearts(false), 2000);
  };
  
  const triggerRoses = () => {
    setShowRoses(true);
    setTimeout(() => setShowRoses(false), 2500);
  };
  
  const toggleMode = () => {
    setBirthdayMode(!birthdayMode);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2000);
  };

  return (
    <div className={`min-h-screen ${birthdayMode ? 'bg-pink-50' : 'bg-blue-50'} flex flex-col items-center relative overflow-hidden transition-colors duration-700`}>
      {/* Confetti effect */}
      {showConfetti && <Confetti />}
      
      {/* Floating icons */}
      <FloatingIcons />
      
      {/* Heart overlay */}
      {showHearts && <HeartBurst />}
      
      {/* Rose overlay */}
      {showRoses && <RoseBurst />}
      
      {/* Header */}
      <header className={`w-full ${birthdayMode ? 'bg-pink-500' : 'bg-blue-500'} text-white py-4 px-6 shadow-md flex items-center justify-center transition-colors duration-700`}>
        <div className="flex items-center gap-3">
          <div className="text-rose-200 cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>
            🌹
          </div>
          <Heart 
            className="animate-pulse text-red-200 cursor-pointer hover:scale-125 transition-transform" 
            size={32} 
            onClick={triggerHearts}
          />
          <h1 className="text-3xl font-bold">Happy Birthday!</h1>
          <Heart 
            className="animate-pulse text-red-200 cursor-pointer hover:scale-125 transition-transform" 
            size={32}
            onClick={triggerHearts}
          />
          <div className="text-rose-200 cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>
            🌹
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-3xl w-full mx-auto p-6 flex flex-col items-center gap-8 mt-4">
        {/* Title with nurse theme and roses */}
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div 
              className="text-3xl cursor-pointer hover:scale-125 transition-transform" 
              onClick={triggerRoses}
            >
              🌹
            </div>
            <h2 className="text-4xl font-bold text-center text-pink-600">
              Happy 21<sup>st</sup> Birthday!
            </h2>
            <div 
              className="text-3xl cursor-pointer hover:scale-125 transition-transform" 
              onClick={triggerRoses}
            >
              🌹
            </div>
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
            <div className="text-blue-600 text-4xl">💉</div>
            <div className="h-1 w-16 bg-blue-500 rounded-full"></div>
          </div>
        </div>

        {/* Toggle theme button */}
        <button 
          className={`px-4 py-2 rounded-full shadow-md font-bold transition-all transform hover:scale-105 ${birthdayMode ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-pink-500 text-white hover:bg-pink-600'}`}
          onClick={toggleMode}
        >
          Switch to {birthdayMode ? 'Nurse' : 'Birthday'} Theme
        </button>

        {/* Rose border photo album with polaroid style */}
        <div className={`relative w-full max-w-md bg-white rounded-lg shadow-xl p-6 border-4 ${birthdayMode ? 'border-pink-300' : 'border-blue-300'} transition-colors duration-700`}>
          {/* Rose corners */}
          <div className="absolute -top-3 -left-3 text-2xl transform -rotate-45 cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>
            🌹
          </div>
          <div className={`absolute -top-3 -right-3 ${birthdayMode ? 'bg-red-500' : 'bg-blue-500'} text-white rounded-full p-2 shadow-md z-10 transition-colors duration-700`}>
            <Cake size={24} onClick={triggerHearts} className="cursor-pointer hover:rotate-12 transition-transform" />
          </div>
          <div className="absolute -bottom-3 -left-3 text-2xl transform rotate-45 cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>
            🌹
          </div>
          <div className="absolute -bottom-3 -right-3 text-2xl transform rotate-135 cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>
            🌹
          </div>
          
          <h3 className={`text-2xl font-semibold text-center mb-4 ${birthdayMode ? 'text-pink-700' : 'text-blue-700'} transition-colors duration-700`}>Our Photos</h3>
          
          <div className="relative h-72 w-full bg-gray-100 mb-6 rounded overflow-hidden group shadow-md">
            <img 
              src={photos[activePhotoIndex]} 
              alt={`Photo ${activePhotoIndex + 1}`} 
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            
            {/* Photo overlay with interaction */}
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center pb-4 transition-opacity cursor-pointer"
              onClick={triggerHearts}
            >
              <span className="text-white font-bold text-lg">💝 Love this memory 💝</span>
            </div>
            
            {/* Navigation buttons */}
            <button 
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full opacity-70 hover:opacity-100 transition-opacity"
              onClick={prevPhoto}
            >
              <ChevronLeft size={24} />
            </button>
            
            <button 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-1 rounded-full opacity-70 hover:opacity-100 transition-opacity"
              onClick={nextPhoto}
            >
              <ChevronRight size={24} />
            </button>
            
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {photos.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`h-2 w-2 rounded-full transition-all ${idx === activePhotoIndex ? (birthdayMode ? 'bg-pink-500 w-6' : 'bg-blue-500 w-6') : 'bg-gray-300'}`}
                  onClick={() => setActivePhotoIndex(idx)}
                />
              ))}
            </div>
          </div>
          
          {/* Thumbnail gallery */}
          <div className="grid grid-cols-6 gap-1 mb-4">
            {photos.map((photo, idx) => (
              <div 
                key={idx}
                className={`h-12 cursor-pointer rounded overflow-hidden border-2 transition-all ${activePhotoIndex === idx ? (birthdayMode ? 'border-pink-500 scale-110' : 'border-blue-500 scale-110') : 'border-transparent'}`}
                onClick={() => setActivePhotoIndex(idx)}
              >
                <img 
                  src={photo} 
                  alt={`Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <p className={`text-gray-600 font-medium`}>
              {activePhotoIndex + 1} / {photos.length}
            </p>
            <div className="flex items-center gap-2">
              <span 
                className="text-red-500 cursor-pointer hover:scale-125 transition-transform" 
                onClick={triggerHearts}
              >
                ❤️
              </span>
              <span 
                className="text-rose-500 cursor-pointer hover:scale-125 transition-transform" 
                onClick={triggerRoses}
              >
                🌹
              </span>
              <span className={`font-bold ${birthdayMode ? 'text-pink-600' : 'text-blue-600'}`}>{loveCount}</span>
            </div>
          </div>
        </div>
        
        {/* Message button */}
        <button 
          className={`${birthdayMode ? 'bg-pink-600 hover:bg-pink-700' : 'bg-blue-600 hover:bg-blue-700'} text-white py-3 px-6 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center gap-2`}
          onClick={toggleMessage}
        >
          <Gift size={24} className={showMessage ? 'animate-spin' : ''} />
          <span className="font-bold">{showMessage ? "Hide Message" : "View Birthday Message"}</span>
        </button>
        
        {/* Birthday message with rose decoration */}
        {showMessage && (
          <div className={`w-full max-w-md bg-white rounded-lg shadow-lg p-6 border-2 ${birthdayMode ? 'border-pink-300' : 'border-blue-300'} animate-fadeIn transition-colors duration-700 relative`}>
            {/* Rose decoration around message */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-2xl">🌹</div>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <div className="text-3xl animate-bounce">💌</div>
                <div className="text-3xl animate-pulse">💝</div>
              </div>
              
              <div className={`${birthdayMode ? 'bg-pink-50 border-pink-200' : 'bg-blue-50 border-blue-200'} p-4 rounded-lg border transition-colors duration-700`}>
                <p className="text-gray-800 leading-relaxed font-medium">
                  Hellooo loveee HAPPY HAPPY BDAYYY WOOOO, actually this message is like 2 days before ng bday mo, HAHHAHAHAHH and sinusulat ko sha ngayon sa notes, anyways i just want to say na YOuve done great!! 21 na naks naman, ur one of the most hard working people na kilala ko, seeing u work hard always motivate me to work hard also, I hope all ur dreams may come true especially of u becoming a nurse one day, HAPPY HAPPY BDAY roaaar
                </p>
              </div>
              
              <div className="flex justify-between">
                <div className="text-3xl cursor-pointer hover:scale-125 transition-transform" onClick={triggerHearts}>❤️</div>
                <div className="text-3xl cursor-pointer hover:scale-125 transition-transform" onClick={triggerRoses}>🌹</div>
                <div className="text-3xl cursor-pointer hover:scale-125 transition-transform" onClick={() => {setShowConfetti(true); setTimeout(() => setShowConfetti(false), 2000);}}>🎉</div>
              </div>
            </div>
            
            {/* Rose-themed interactive elements */}
            <div className="mt-4 flex flex-col items-center">
              <p className="text-gray-500 text-sm mb-2">Click to see some birthday magic!</p>
              <div className="flex gap-3 justify-center mt-2">
                {["🎂", "🎁", "🌹", "🌟", "💫"].map((emoji, idx) => (
                  <button 
                    key={idx}
                    className="text-2xl bg-white rounded-full p-2 shadow hover:shadow-lg transition-all hover:scale-110 focus:outline-none"
                    onClick={() => {
                      if (emoji === "🌹") {
                        triggerRoses();
                      } else {
                        setShowConfetti(true); 
                        setTimeout(() => setShowConfetti(false), 2000);
                      }
                    }}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
        
        {/* New Rose Garden Section */}
        <div className={`w-full max-w-md ${birthdayMode ? 'bg-rose-50 border-rose-200' : 'bg-blue-50 border-blue-200'} rounded-lg shadow-md p-6 border-2 transition-colors duration-700`}>
          <h3 className={`text-xl font-bold ${birthdayMode ? 'text-rose-700' : 'text-blue-700'} mb-3 flex items-center gap-2 justify-center transition-colors duration-700`}>
            <div className="text-2xl">🌹</div>
            <span>Rose Garden of Wishes</span>
            <div className="text-2xl">🌹</div>
          </h3>
          
          {/* Rose varieties */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { color: "bg-rose-300", name: "Pink Rose", wish: "Love" },
              { color: "bg-red-400", name: "Red Rose", wish: "Passion" },
              { color: "bg-rose-200", name: "Soft Rose", wish: "Grace" },
              { color: "bg-red-600", name: "Deep Red", wish: "Affection" },
              { color: "bg-rose-100", name: "Blush", wish: "Joy" },
              { color: "bg-amber-300", name: "Yellow Rose", wish: "Friendship" }
            ].map((rose, idx) => (
              <div 
                key={idx}
                className={`${rose.color} rounded-lg p-3 flex flex-col items-center shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:scale-105`}
                onClick={triggerRoses}
              >
                <div className="text-3xl mb-1">🌹</div>
                <p className="text-white font-medium text-center text-sm">{rose.name}</p>
                <p className="text-white text-xs text-center mt-1">"{rose.wish}"</p>
              </div>
            ))}
          </div>
          
          <p className="text-center mt-4 text-gray-600 italic">
            Click on a rose to send your wish! 🌹✨
          </p>
          
          <button 
            className={`w-full mt-4 py-2 rounded-full ${birthdayMode ? 'bg-rose-500 hover:bg-rose-600' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium transition-colors duration-700 flex items-center justify-center gap-2`}
            onClick={triggerRoses}
          >
            <span>Bloom All Roses</span>
            <span className="text-xl">🌹</span>
          </button>
        </div>
        
        {/* Nurse theme elements */}
        <div className={`w-full max-w-md ${birthdayMode ? 'bg-blue-50 border-blue-200' : 'bg-pink-50 border-pink-200'} rounded-lg shadow-md p-6 border-2 transition-colors duration-700`}>
          <h3 className={`text-xl font-bold ${birthdayMode ? 'text-blue-700' : 'text-pink-700'} mb-3 flex items-center gap-2 transition-colors duration-700`}>
            <div className="text-2xl animate-pulse">👩‍⚕️</div>
            <span>Future Nurse</span>
          </h3>
          
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { icon: "💉", text: "Caring" },
              { icon: "🩺", text: "Skilled" },
              { icon: "🏥", text: "Dedicated" },
              { icon: "❤️", text: "Compassionate" },
              { icon: "📚", text: "Studious" },
              { icon: "🌹", text: "Rosey" },
              { icon: "🔬", text: "Detail-oriented" }
            ].map((badge, idx) => (
              <NurseBadge 
                key={idx} 
                icon={badge.icon} 
                text={badge.text} 
                birthdayMode={birthdayMode}
                onClick={badge.icon === "🌹" ? triggerRoses : triggerHearts}
              />
            ))}
          </div>
          
          <div className={`mt-4 text-center ${birthdayMode ? 'text-blue-600' : 'text-pink-600'} font-medium transition-colors duration-700`}>
            Celebrating your journey to becoming an amazing nurse!
          </div>
          
          {/* Interactive nursing quiz */}
          <div className="mt-6 bg-white p-4 rounded-lg shadow-sm">
            <h4 className={`text-lg font-semibold ${birthdayMode ? 'text-blue-600' : 'text-pink-600'} mb-2 transition-colors duration-700`}>
              Birthday Bonus: Nursing Fun Fact
            </h4>
            <p className="text-gray-700 mb-3">
              Did you know? The modern nursing profession was founded by Florence Nightingale, known as "The Lady with the Lamp."
            </p>
            <button 
              className={`w-full py-2 rounded ${birthdayMode ? 'bg-blue-500 hover:bg-blue-600' : 'bg-pink-500 hover:bg-pink-600'} text-white font-medium transition-colors duration-700`}
              onClick={() => {
                triggerRoses();
                alert("You're going to be an amazing nurse! Happy Birthday! 💖🌹");
              }}
            >
              Click for your birthday wish!
            </button>
          </div>
        </div>
        
        {/* Memory collection with rose frame */}
        <div className={`w-full max-w-md bg-white rounded-lg shadow-xl p-6 border-2 ${birthdayMode ? 'border-pink-300' : 'border-blue-300'} transition-colors duration-700 relative`}>
          {/* Rose corner decorations */}
          <div className="absolute top-0 left-0 transform -translate-x-1/3 -translate-y-1/3 text-2xl">🌹</div>
          <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 text-2xl">🌹</div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 text-2xl">🌹</div>
          <div className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/3 text-2xl">🌹</div>
          
          <h3 className={`text-xl font-bold ${birthdayMode ? 'text-pink-700' : 'text-blue-700'} mb-4 text-center transition-colors duration-700`}>
            Photo Memories
          </h3>
          
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, idx) => (
              <div 
                key={idx} 
                className="aspect-square bg-gray-100 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer relative group"
                onClick={idx % 3 === 0 ? triggerRoses : triggerHearts}
              >
                <img 
                  src={`/images/photo${(idx % 6) + 1}.jpg`} 
                  alt={`Memory ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-center p-1 transition-opacity">
                  <span className="text-white text-xs font-medium">Memory {idx + 1}</span>
                </div>
                {idx % 3 === 0 && (
                  <div className="absolute bottom-1 right-1 text-lg opacity-70">🌹</div>
                )}
              </div>
            ))}
          </div>
          
          <p className="text-center mt-4 text-gray-600 text-sm">
            Click on any photo to send love or roses! 💕🌹
          </p>
        </div>
      </main>
      
      {/* Footer */}
      <footer className={`w-full ${birthdayMode ? 'bg-pink-500' : 'bg-blue-500'} text-white py-3 px-6 mt-8 text-center transition-colors duration-700`}>
        <div className="flex items-center justify-center gap-3">
          <span className="animate-pulse cursor-pointer" onClick={triggerRoses}>🌹</span>
          <p>Created with <span className="animate-pulse cursor-pointer" onClick={triggerHearts}>❤️</span> for your special day!</p>
          <span className="animate-pulse cursor-pointer" onClick={triggerRoses}>🌹</span>
        </div>
        <p className="text-sm mt-1 text-pink-100">Love count: {loveCount}</p>
      </footer>
    </div>
  );
}

// Nurse-themed badge component
function NurseBadge({ icon, text, birthdayMode, onClick }) {
  return (
    <div 
      className={`bg-white px-3 py-2 rounded-full shadow flex items-center gap-2 border ${birthdayMode ? 'border-blue-200 hover:border-blue-400' : 'border-pink-200 hover:border-pink-400'} cursor-pointer hover:shadow-md transition-all transform hover:scale-105`}
      onClick={onClick}
    >
      <span className="animate-pulse">{icon}</span>
      <span className={`font-medium ${birthdayMode ? 'text-blue-700' : 'text-pink-700'} transition-colors duration-700`}>{text}</span>
    </div>
  );
}

// Floating decorative icons with roses added
function FloatingIcons() {
  return (
    <>
      {[...Array(20)].map((_, i) => {
        const icons = ["💉", "💊", "🩺", "🏥", "❤️", "🎂", "🎁", "🌹", "🌹", "🌹"];
        const randomIcon = icons[Math.floor(Math.random() * icons.length)];
        const size = Math.random() * 1 + 0.5;
        const left = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * 15 + 10}s`;
        const animationDelay = `${Math.random() * 5}s`;
        
        return (
          <div 
            key={i} 
            className="absolute text-2xl opacity-20 pointer-events-none animate-float"
            style={{
              left,
              top: "-5%",
              fontSize: `${size}rem`,
              animationDuration,
              animationDelay,
            }}
          >
            {randomIcon}
          </div>
        );
      })}
    </>
  );
}

// Heart Burst component 
function HeartBurst() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 20 + 10;
        const left = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * 2 + 1}s`;
        const animationDelay = `${Math.random() * 0.3}s`;
        const opacity = Math.random() * 0.5 + 0.5;
        
        return (
          <div 
            key={i} 
            className="absolute animate-heartBurst text-pink-500"
            style={{
              left,
              top: "50%",
              fontSize: `${size}px`,
              animationDuration,
              animationDelay,
              opacity,
            }}
          >
            ❤️
          </div>
        );
      })}
    </div>
  );
}

// New Rose Burst Component
function RoseBurst() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(25)].map((_, i) => {
        const size = Math.random() * 24 + 16;
        const left = `${Math.random() * 100}%`;
        const animationDuration = `${Math.random() * 2.5 + 1.5}s`;
        const animationDelay = `${Math.random() * 0.3}s`;
        const opacity = Math.random() * 0.5 + 0.5;
        const rotation = Math.random() * 360;
        
        return (
          <div 
            key={i} 
            className="absolute animate-roseBurst"
            style={{
              left,
              top: "50%",
              fontSize: `${size}px`,
              animationDuration,
              animationDelay,
              opacity,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            🌹
          </div>
        );
      })}
    </div>
  );
}

// Confetti component with rose petals
function Confetti() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(50)].map((_, i) => {
        const size = Math.random() * 10 + 5;
        const left = `${Math.random() * 100}%`;
        const backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
        const animationDuration = `${Math.random() * 3 + 2}s`;
        const animationDelay = `${Math.random() * 0.5}s`;
        const shape = Math.random() > 0.6 ? (Math.random() > 0.5 ? '❤️' : '🌹') : '';
        
        return shape ? (
          <div 
            key={i} 
            className="absolute animate-confetti"
            style={{
              left,
              top: "-5%",
              fontSize: `${size}px`,
              animationDuration,
              animationDelay,
            }}
          >
            {shape}
          </div>
        ) : (
          <div 
            key={i} 
            className="absolute animate-confetti"
            style={{
              left,
              top: "-5%",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: Math.random() > 0.7 ? '#f43f5e' : backgroundColor, // Mix in some rose colors
              animationDuration,
              animationDelay,
              borderRadius: Math.random() > 0.5 ? '50%' : '0',
            }}
          />
        );
      })}
    </div>
  );
}
