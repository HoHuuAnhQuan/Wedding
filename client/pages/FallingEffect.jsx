import React, { useEffect, useState } from 'react';

const FallingEffect = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Các ký tự hoa và trái tim sẽ rơi
    const icons = ['🌸', '❤️', '💕', '💮', '💖'];
    
    // Tạo ngẫu nhiên 30 vật thể rơi ban đầu
    const initialItems = Array.from({ length: 30 }).map((_, index) => ({
      id: index,
      char: icons[Math.floor(Math.random() * icons.length)],
      left: Math.random() * 100, // Vị trí ngang (%)
      animationDelay: Math.random() * 10, // Độ trễ khi bắt đầu (s)
      animationDuration: 6 + Math.random() * 8, // Tốc độ rơi (s)
      fontSize: 12 + Math.random() * 16, // Kích thước (px)
      opacity: 0.4 + Math.random() * 0.5 // Độ mờ
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
      {/* Nhúng đoạn CSS animation vào */}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-5vh) rotate(0deg);
          }
          100% {
            transform: translateY(105vh) rotate(360deg);
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
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Không cản trở người dùng click trên web
    zIndex: 999, // Nổi lên trên cùng nền
    overflow: 'hidden',
  },
  item: {
    position: 'absolute',
    top: '-50px',
    willChange: 'transform',
  }
};

export default FallingEffect;