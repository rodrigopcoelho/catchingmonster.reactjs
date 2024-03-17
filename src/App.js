import React, { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, top: prev.top - 4 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, top: prev.top + 4 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, left: prev.left - 4 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, left: prev.left + 4 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  return (
    <div>

    <div class="center">
    <div
  className="player"
  style={{ position: 'relative', left: `${position.left}px`, top: `${position.top}px` }}
  tabIndex="0"
></div>
    </div>
    </div>
  );
}

export default App;
