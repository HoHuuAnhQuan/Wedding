import React, { useState } from 'react';

// Hãy đảm bảo đường dẫn ảnh chính xác với thư mục dự án của bạn (ví dụ đặt trong thư mục public hoặc src/assets)
const weddingImages = [
  { id: 1, src: '../asset/wedding1.jpg', title: 'Khoảnh khắc ngọt ngào' },
  { id: 2, src: '../asset/wedding2.jpg', title: 'Bên nhau bình yên' },
  { id: 3, src: '../asset/wedding3.jpg', title: 'Nụ cười hạnh phúc' },
  { id: 4, src: '../asset/wedding4.jpg', title: 'Chung lối bước đi' },
  { id: 5, src: '../asset/wedding5.jpg', title: 'Hạnh phúc trọn vẹn' },
];

const WeddingAlbum = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section style={styles.section}>
      <div style={styles.header}>
        <h2 style={styles.title}>Album Ảnh Cưới</h2>
        <p style={styles.subtitle}>Lưu giữ những khoảnh khắc hạnh phúc nhất của chúng mình</p>
        <div style={styles.divider}>✨ ❤ ✨</div>
      </div>

      {/* Lưới hiển thị ảnh cưới */}
      <div style={styles.grid}>
        {weddingImages.map((img) => (
          <div 
            key={img.id} 
            style={styles.imageWrapper}
            onClick={() => setSelectedImg(img)}
          >
            <img src={img.src} alt={img.title} style={styles.image} />
            <div style={styles.overlay}>
              <span style={styles.overlayText}>{img.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox xem ảnh toàn màn hình khi click vào */}
      {selectedImg && (
        <div style={styles.lightbox} onClick={() => setSelectedImg(null)}>
          <span style={styles.closeBtn}>&times;</span>
          <img src={selectedImg.src} alt={selectedImg.title} style={styles.lightboxImg} />
          <p style={styles.lightboxTitle}>{selectedImg.title}</p>
        </div>
      )}
    </section>
  );
};

const styles = {
  section: {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: '"Playfair Display", "Segoe UI", serif',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '2.5rem',
    color: '#333',
    margin: '0 0 10px 0',
  },
  subtitle: {
    fontSize: '1rem',
    color: '#666',
    fontStyle: 'italic',
  },
  divider: {
    color: '#d4af37',
    fontSize: '1.2rem',
    marginTop: '10px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },
  imageWrapper: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    cursor: 'pointer',
    aspectRatio: '3/4', // Định hình khung dọc chuẩn ảnh cưới
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  // Thêm hover giả lập trực tiếp hoặc bạn có thể chuyển hiệu ứng vào CSS nếu muốn
  overlayText: {
    color: '#fff',
    fontSize: '1.2rem',
    border: '1px solid #fff',
    padding: '8px 16px',
    borderRadius: '4px',
    backdropFilter: 'blur(3px)',
  },
  // CSS Lightbox phóng to
  lightbox: {
    position: 'fixed',
    top: 0, left: 0, width: '100%', height: '100%',
    background: 'rgba(0,0,0,0.9)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  lightboxImg: {
    maxWidth: '90%',
    maxHeight: '80vh',
    borderRadius: '8px',
    boxShadow: '0 0 20px rgba(255,255,255,0.2)',
  },
  lightboxTitle: {
    color: '#fff',
    marginTop: '15px',
    fontSize: '1.2rem',
    letterSpacing: '1px',
  },
  closeBtn: {
    position: 'absolute',
    top: '20px',
    right: '30px',
    color: '#fff',
    fontSize: '40px',
    cursor: 'pointer',
  }
};

// Mẹo nhỏ CSS: Để hiệu ứng hover mượt mà cho lưới ảnh, bạn thêm đoạn script này lồng dưới file:
export default WeddingAlbum;