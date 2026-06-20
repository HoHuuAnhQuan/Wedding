import React, { useEffect, useState } from 'react';

const FallingEffect = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const icons = ['🌸', '❤️', '💕', '💮', '💖'];
    
    // Tạo 30 vật thể rơi ngẫu nhiên
    const initialItems = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      char: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100, 
      animationDelay: Math.random() * 8, 
      animationDuration: 6 + Math.random() * 6, // Tốc độ rơi từ 6s - 12s cho tự nhiên
      fontSize: 14 + Math.random() * 14, 
      opacity: 0.4 + Math.random() * 0.5 
    }));
    
    setItems(initialItems);
  }, []);

  return (
    <div style={styles.container}>
      {items.map((item) => (
        <span
          key={item.id}
          className="falling-item"
          style={{
            ...styles.item,
            left: `${item.left}%`,
            animationDelay: `${item.animationDelay}s`,
            animationDuration: `${item.animationDuration}s`,
            fontSize: `${item.fontSize}px`,
            opacity: item.opacity,
          }}
        >
          {item.char}
        </span>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg);
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
          }
        }
        .falling-item {
          animation-name: fall;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed', // Giữ cố định theo góc nhìn màn hình
    top: 0,
    left: 0,
    width: '100vw',    // Tràn toàn bộ chiều rộng màn hình
    height: '100vh',   // Tràn toàn bộ chiều cao màn hình
    pointerEvents: 'none', 
    zIndex: 9999,      // Đảm bảo luôn nổi lên trên cùng các lớp nền khác
    overflow: 'hidden',
  },
  item: {
    position: 'absolute',
    top: '-50px',
    willChange: 'transform',
  }
};

export default FallingEffect;