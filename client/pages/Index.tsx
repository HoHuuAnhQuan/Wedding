import React, { useState, useEffect, useRef } from "react";
import FallingEffect from './FallingEffect'; // Đường dẫn tới file hiệu ứng rơi
import WeddingAlbum from './WeddingAlbum';   // Đường dẫn tới file album ảnh
import ScrollReveal from './ScrollReveal';
// --- COMPONENT TRỢ GIÚP HIỆU ỨNG ĐỘNG (SCROLL REVEAL) ---
function FadeIn({ children, delay = 0, direction = "up" }) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    document.title = "Thiệp Mời Đám Cưới - Trần Thị Hải Ngân & Hoàng Đức Tuấn";
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    }, { threshold: 0.05 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    none: "opacity-0",
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : `opacity-0 ${directionClasses[direction]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  // --- LOGIC COUNTDOWN ---
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-07-20T14:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <div className="min-h-screen overflow-x-hidden" style={{ backgroundColor: "#FFF8F3" }}>
      <FallingEffect />
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pb-0">
        <div className="absolute left-[40%] top-24 -translate-x-1/2 pointer-events-none z-0 transition-transform duration-1000 hover:scale-105">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/27f4287520c53e7f887236d692b0a71b4d9fe7ab?width=466"
            alt=""
            className="w-50 sm:w-56 opacity-90 animate-pulse duration-[4000ms]"
            style={{ transform: "rotate(1deg)" }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-0 text-center">
          <FadeIn delay={100}>
            <h1
              className="text-[28px] sm:text-[34px] tracking-widest mb-2"
              style={{ fontFamily: "'Cormorant Upright', serif", fontWeight: 400 }}
            >
              THƯ MỜI CƯỚI
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p
              className="text-[20px] sm:text-[23px] mb-6"
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontWeight: 400,
                color: "rgba(0,0,0,0.8)",
              }}
            >
              Trần Thị Hải Ngân &nbsp;&amp;&nbsp; Hoàng Đức Tuấn
            </p>
          </FadeIn>

          <FadeIn delay={500}>
            <div
              className="text-[64px] sm:text-[80px] leading-none mb-8"
              style={{ fontFamily: "'Inria Serif', serif", fontWeight: 400 }}
            >
              <span className="block">20.7</span>
              <span className="block">2026</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-4 sm:px-6 pb-0">
        <FadeIn delay={200}>
          <p
            className="text-center text-[22px] sm:text-[25px] leading-snug mb-6 mx-auto max-w-sm"
            style={{
              fontFamily: "'Cormorant Upright', serif",
              fontWeight: 300,
            }}
          >
            Sự hiện diện của quý vị là niềm vinh hạnh của gia đình chúng tôi.
            Rất hân hạnh được đón tiếp!
          </p>
        </FadeIn>

        {/* COUNTDOWN SECTION */}
        <section className="relative w-full max-w-5xl mx-auto my-12 px-4 sm:px-8">
          <FadeIn delay={300}>
            <div className="relative w-full rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px]">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.hhnBrMssebLY3IWlshHvfQHaDQ?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Wedding background for countdown"
                className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-[6000ms] hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>

              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-white/85 backdrop-blur-md rounded-2xl py-8 px-4 sm:px-12 text-center shadow-2xl w-full max-w-2xl border border-white/50">
                  <h3
                    className="text-[20px] sm:text-[28px] text-[#0b1f3f] mb-8 uppercase tracking-widest font-semibold"
                    style={{ fontFamily: "'Crimson Pro', serif" }}
                  >
                    Ngày Chung Đôi
                  </h3>

                  <div className="flex justify-center items-center gap-2 sm:gap-6 text-[#0b1f3f]">
                    <div className="flex flex-col items-center w-[70px] sm:w-[90px] transition-transform duration-300 hover:scale-110">
                      <span className="text-[36px] sm:text-[56px] leading-none mb-2" style={{ fontFamily: "'Inria Serif', serif" }}>
                        {timeLeft.days}
                      </span>
                      <span className="text-[12px] sm:text-[14px] uppercase tracking-widest font-bold" style={{ fontFamily: "'Crimson Pro', serif" }}>Ngày</span>
                    </div>

                    <span className="text-[30px] sm:text-[40px] font-light leading-none text-[#e09b9b] pb-6 animate-pulse">:</span>

                    <div className="flex flex-col items-center w-[70px] sm:w-[90px] transition-transform duration-300 hover:scale-110">
                      <span className="text-[36px] sm:text-[56px] leading-none mb-2" style={{ fontFamily: "'Inria Serif', serif" }}>
                        {timeLeft.hours.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[12px] sm:text-[14px] uppercase tracking-widest font-bold" style={{ fontFamily: "'Crimson Pro', serif" }}>Giờ</span>
                    </div>

                    <span className="text-[30px] sm:text-[40px] font-light leading-none text-[#e09b9b] pb-6 animate-pulse">:</span>

                    <div className="flex flex-col items-center w-[70px] sm:w-[90px] transition-transform duration-300 hover:scale-110">
                      <span className="text-[36px] sm:text-[56px] leading-none mb-2" style={{ fontFamily: "'Inria Serif', serif" }}>
                        {timeLeft.minutes.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[12px] sm:text-[14px] uppercase tracking-widest font-bold" style={{ fontFamily: "'Crimson Pro', serif" }}>Phút</span>
                    </div>

                    <span className="text-[30px] sm:text-[40px] font-light leading-none text-[#e09b9b] pb-6 animate-pulse">:</span>

                    <div className="flex flex-col items-center w-[70px] sm:w-[90px] transition-transform duration-300 hover:scale-110">
                      <span className="text-[36px] sm:text-[56px] leading-none mb-2" style={{ fontFamily: "'Inria Serif', serif", color: "#e09b9b" }}>
                        {timeLeft.seconds.toString().padStart(2, '0')}
                      </span>
                      <span className="text-[12px] sm:text-[14px] uppercase tracking-widest font-bold" style={{ fontFamily: "'Crimson Pro', serif" }}>Giây</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
        {/* First wedding poster */}
        <FadeIn>
          <div className="flex justify-center px-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5579c30411b83293c9d043165aa13ba2aafcc22a?width=536"
              alt="Wedding poster"
              className="w-full max-w-[550px] h-40"
              style={{ aspectRatio: "67/95" }}
            />
          </div>
        </FadeIn>
      </section>

      {/* LARGE WEDDING PHOTO WITH FRAME - ĐÃ FIX RESPONSIVE TẠI ĐÂY */}
      <section className="relative w-full max-w-3xl mx-auto my-12 px-2 sm:px-6">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/26f3be24eb76127af180d537d8409fa69a81f92e?width=860"
          alt="Wedding photo background frame"
          className="w-full h-auto object-cover"
          style={{ aspectRatio: "29/41" }}
        />

        {/* Fix 1: Giảm padding px-12 xuống px-6 trên mobile để nới rộng không gian hiển thị */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 sm:px-20 py-10 sm:py-24">
          
          {/* 1. FAMILY SECTION */}
          <div className="w-full mb-6 sm:mb-40 bg-transparent">
            {/* Fix 2: Giảm gap trên mobile xuống gap-2 để chữ không bị chẹt */}
            <div className="grid grid-cols-2 gap-2 sm:gap-10 w-full">
              {/* NHÀ TRAI */}
              <div className="flex flex-col items-center">
                <FadeIn delay={100}>
                  {/* Fix 3: Đồng bộ size chữ tiêu đề (16px Mobile / 22px PC) */}
                  <h3
                    className="text-[16px] sm:text-[22px] mb-2 sm:mb-4 tracking-wider uppercase text-[#000000]"
                    style={{ fontFamily: "Fahkwang, sans-serif", fontWeight: 400 }}
                  >
                    NHÀ TRAI
                  </h3>
                </FadeIn>
                <FadeIn delay={250}>
                  {/* Fix 4: Đồng bộ size chữ tên (14px Mobile / 20px PC) */}
                  <p
                    className="text-[14px] sm:text-[20px] text-center leading-relaxed mb-2 sm:mb-6 uppercase text-[#000000]"
                    style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}
                  >
                    ÔNG TRẦN VIẾT ĐÀO
                    <br />
                    BÀ HOÀNG THỊ NGHĨA
                  </p>
                </FadeIn>
                <FadeIn delay={400}>
                  {/* Fix 5: Thu nhỏ hoa văn trên mobile để không lấn viền */}
                  <div className="relative h-16 w-24 sm:h-36 sm:w-40 flex justify-center mt-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ceccbcfdae8a8c3a0ac58cf1773c5631ee91426e?width=138"
                      alt=""
                      className="absolute left-0 top-0 h-full object-contain"
                      style={{ width: "57%", aspectRatio: "69/98" }}
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f8125bf4f22f0a143081d43c6a406b78a55ca534?width=138"
                      alt=""
                      className="absolute right-0 top-0 h-full object-contain"
                      style={{ width: "57%", aspectRatio: "69/98" }}
                    />
                  </div>
                </FadeIn>
              </div>

              {/* NHÀ GÁI */}
              <div className="flex flex-col items-center">
                <FadeIn delay={150}>
                  <h3
                    className="text-[16px] sm:text-[22px] mb-2 sm:mb-4 tracking-wider uppercase text-[#000000]"
                    style={{ fontFamily: "Fahkwang, sans-serif", fontWeight: 400 }}
                  >
                    NHÀ GÁI
                  </h3>
                </FadeIn>
                <FadeIn delay={300}>
                  <p
                    className="text-[14px] sm:text-[20px] text-center leading-relaxed mb-2 sm:mb-6 uppercase text-[#000000]"
                    style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}
                  >
                    ÔNG HOÀNG ĐỨC CƯ
                    <br />
                    BÀ NGUYỄN THỊ BÉ
                  </p>
                </FadeIn>
                <FadeIn delay={450}>
                  <div className="relative h-16 w-24 sm:h-36 sm:w-40 flex justify-center mt-2">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/ceccbcfdae8a8c3a0ac58cf1773c5631ee91426e?width=138"
                      alt=""
                      className="absolute left-0 top-0 h-full object-contain"
                      style={{ width: "57%", aspectRatio: "69/98" }}
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/f8125bf4f22f0a143081d43c6a406b78a55ca534?width=138"
                      alt=""
                      className="absolute right-0 top-0 h-full object-contain"
                      style={{ width: "57%", aspectRatio: "69/98" }}
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>

          {/* 2. ANNOUNCEMENT SECTION */}
          <div className="flex flex-col items-center w-full bg-transparent">
            <FadeIn delay={200}>
              <p
                className="text-[14px] sm:text-[20px] text-center tracking-wide mb-4 sm:mb-8 text-[#000000] uppercase"
                style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}
              >
                TRÂN TRỌNG BÁO TIN LỄ THÀNH HÔN CỦA
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div 
                className="flex flex-col items-center text-[32px] sm:text-[48px] text-center text-[#333]"
                style={{ fontFamily: "'Dancing Script', 'Great Vibes', cursive", fontWeight: 400, lineHeight: 1.3 }}
              >
                <span>Trần Thị Hải Ngân</span>
                <span className="my-1 text-[24px] sm:text-[30px]">&</span>
                <span>Hoàng Đức Tuấn</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>
      {/* SECOND WEDDING POSTER */}
      <section className="px-4 sm:px-6 py-4">
        <FadeIn>
          <div className="flex justify-center px-4">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5579c30411b83293c9d043165aa13ba2aafcc22a?width=536"
              alt="Wedding poster"
              className="w-full max-w-[550px] h-40"
              style={{ aspectRatio: "67/95" }}
            />
          </div>
        </FadeIn>
      </section>
      
      {/* THIỆP MỜI CHI TIẾT */}
      <section className="w-full bg-white py-16 sm:py-24 lg:py-32 flex justify-center px-4 sm:px-8 md:px-16 overflow-hidden">
        <div className="w-full flex flex-col items-center text-center">
          
          <FadeIn>
            <h2 
              className="text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] text-[#000000] italic font-semibold mb-6 lg:mb-6"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              THƯ MỜI THAM DỰ LỄ CƯỚI
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <p 
              className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[90px] text-[#ff7777] mb-6 lg:mb-10"
              style={{ fontFamily: "'Great Vibes', cursive", lineHeight: 1 }}
            >
              Happy Wedding
            </p>
          </FadeIn>
          
          <FadeIn delay={250}>
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/ceccbcfdae8a8c3a0ac58cf1773c5631ee91426e?width=100" 
              alt="Wedding Bells" 
              className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain mb-10 lg:mb-16 opacity-70"
            />
          </FadeIn>

          <FadeIn>
            <h3 
              className="text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-bold tracking-widest mb-6 lg:mb-10 text-black uppercase"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              HÔN LỄ ĐƯỢC CỬ HÀNH TẠI TƯ GIA
            </h3>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12 my-2 lg:my-6" style={{ fontFamily: "'Crimson Pro', serif" }}>
              <div className="text-right">
                <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] uppercase tracking-wide">VÀO LÚC</p>
                <p className="text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-bold">14 GIỜ 30</p>
              </div>
              
              <div className="w-[1px] h-12 sm:h-20 md:h-24 lg:h-32 bg-black mx-1 lg:mx-4"></div>
              
              <div className="text-[50px] sm:text-[80px] md:text-[110px] lg:text-[140px] leading-none transition-transform duration-500 hover:scale-105">
                20
              </div>
              
              <div className="w-[1px] h-12 sm:h-20 md:h-24 lg:h-32 bg-black mx-1 lg:mx-4"></div>
              
              <div className="text-left">
                <p className="text-[12px] sm:text-[16px] md:text-[20px] lg:text-[24px] uppercase tracking-wide">THÁNG 7</p>
                <p className="text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px] font-bold">2026</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <p 
              className="text-[13px] sm:text-[18px] md:text-[22px] lg:text-[28px] tracking-widest mt-4 mb-10 lg:mb-16 uppercase"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              NHẰM NGÀY 07 THÁNG 06 NĂM BÍNH NGỌ
            </p>
          </FadeIn>

          <div className="w-[90%] sm:w-4/5 max-w-5xl h-[1px] bg-gray-200 my-8 lg:my-12"></div>

          <FadeIn>
            <h3 
              className="text-[18px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold tracking-widest mb-6 lg:mb-10 text-[#0b1f3f] uppercase px-4"
              style={{ fontFamily: "'Crimson Pro', serif", lineHeight: 1.4 }}
            >
              ĐẾN DỰ BUỔI TIỆC MỪNG THÀNH HÔN CÙNG GIA ĐÌNH
            </h3>
          </FadeIn>
          
          <FadeIn delay={150}>
            <p className="text-[20px] sm:text-[30px] md:text-[30px] lg:text-[32px] tracking-widest mb-2 lg:mb-4" style={{ fontFamily: "'Crimson Pro', serif" }}>
              15 GIỜ 30
            </p>
          </FadeIn>
          
          <FadeIn delay={250}>
            <p className="text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px] tracking-widest mb-6 lg:mb-10" style={{ fontFamily: "'Crimson Pro', serif" }}>
              NGÀY 20 THÁNG 7 NĂM 2026
            </p>
          </FadeIn>
          
          <FadeIn delay={350}>
            <p 
              className="text-[14px] sm:text-[20px] md:text-[26px] lg:text-[32px] px-2 sm:px-10 leading-relaxed uppercase"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              NHÀ VĂN HOÁ - TỔ DÂN PHỐ THẾ CHÍ ĐÔNG 4,<br className="hidden sm:block" /> PHƯỜNG PHONG QUẢNG, THÀNH PHỐ HUẾ
            </p>
          </FadeIn>

          <div className="w-[90%] sm:w-4/5 max-w-5xl h-[1px] bg-gray-200 my-10 lg:my-16"></div>

          <FadeIn>
            <p 
              className="text-[14px] sm:text-[18px] md:text-[24px] lg:text-[30px] text-gray-500 tracking-widest mb-8 lg:mb-12 uppercase"
              style={{ fontFamily: "'Crimson Pro', serif" }}
            >
              RẤT HÂN HẠNH ĐƯỢC ĐÓN TIẾP!
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div 
              className="flex flex-col items-center text-[42px] sm:text-[64px] md:text-[86px] lg:text-[110px] text-black"
              style={{ fontFamily: "'Great Vibes', cursive", lineHeight: 1.1 }}
            >
              <span>Trần Thị Hải Ngân</span>
              <span className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] my-2 lg:my-4">&</span>
              <span>Hoàng Đức Tuấn</span>
            </div>
          </FadeIn>

        </div>
      </section>
    <WeddingAlbum />
    </div>
  );
}