import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    title: "Home is Where the Heart is – A Voora testimonial",
    channel: "Voora group",
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Home is Where the Heart is – A Voora testimonial",
    channel: "Voora group",
    thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Home is Where the Heart is – A Voora testimonial",
    channel: "Voora group",
    thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Home is Where the Heart is – A Voora testimonial",
    channel: "Voora group",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 68 48" width="56" height="40" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C0 13.05 0 24 0 24s0 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C68 34.95 68 24 68 24s0-10.95-1.48-16.26z"
      fill="#ff0000"
    />
    <path d="M45 24 27 14v20" fill="white" />
  </svg>
);

const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function VideoCard({ testimonial, position, onClick }) {
  const isCenter = position === "center";
  const isLeft = position === "left";
  const isRight = position === "right";

  const cardStyle = {
    position: "absolute",
    top: "50%",
    background: "#ffffff",
    borderRadius: "20px",
    overflow: "hidden",
    cursor: "pointer",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: isCenter
      ? "0 20px 60px rgba(37, 99, 235, 0.2), 0 8px 24px rgba(0,0,0,0.08)"
      : "0 8px 24px rgba(0,0,0,0.06)",
    ...(isCenter && {
      width: "380px",
      transform: "translateX(-50%) translateY(-50%) scale(1)",
      left: "50%",
      zIndex: 3,
      opacity: 1,
    }),
    ...(isLeft && {
      width: "320px",
      transform: "translateX(-70%) translateY(-50%) scale(0.88)",
      left: "20%",
      zIndex: 2,
      opacity: 0.85,
    }),
    ...(isRight && {
      width: "320px",
      transform: "translateX(-30%) translateY(-50%) scale(0.88)",
      left: "80%",
      zIndex: 2,
      opacity: 0.85,
    }),
  };

  return (
    <div style={cardStyle} onClick={onClick}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "14px 16px 12px",
          background: isCenter ? "#2563eb" : "#3b82f6",
        }}
      >
        <div
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "50%",
            background: "#1e40af",
            flexShrink: 0,
            border: "2px solid rgba(255,255,255,0.7)",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {testimonial.avatar ? (
            <img
              src={testimonial.avatar}
              alt="avatar"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ) : (
            <svg viewBox="0 0 24 24" width="28" height="28" fill="rgba(255,255,255,0.9)">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
            </svg>
          )}
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              margin: 0,
              fontWeight: 600,
              fontSize: isCenter ? "13.5px" : "12px",
              color: "#ffffff",
              lineHeight: 1.3,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {testimonial.title}
          </p>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "12px",
              color: "#bfdbfe",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            {testimonial.channel}
          </p>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          paddingBottom: isCenter ? "56%" : "54%",
          background: "#dbeafe",
          overflow: "hidden",
        }}
      >
        {testimonial.thumbnail ? (
          <img
            src={testimonial.thumbnail}
            alt={testimonial.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => { e.currentTarget.style.display = "none"; }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "#bfdbfe",
            }}
          />
        )}

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.18)",
              backdropFilter: "blur(2px)",
              borderRadius: "50%",
              padding: "10px",
            }}
          >
            <PlayIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VoicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [animating, setAnimating] = useState(false);
  const total = testimonials.length;

  const getPosition = (idx) => {
    const diff = (idx - activeIndex + total) % total;
    if (diff === 0) return "center";
    if (diff === total - 1) return "left";
    if (diff === 1) return "right";
    return "hidden";
  };

  const navigate = (dir) => {
    if (animating) return;
    setAnimating(true);
    setActiveIndex((prev) => (prev + dir + total) % total);
    setTimeout(() => setAnimating(false), 520);
  };

  return (
    <div
      style={{
        background: "#f0f9ff",
        fontFamily: "'DM Sans', sans-serif",
        borderRadius: "24px",
        padding: "40px 24px",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ width: "100%", maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
        <div style={{ marginBottom: "4px", textAlign: "center" }}>
          <span
            style={{
              fontSize: "13px",
              color: "#2563eb",
              fontWeight: 500,
              letterSpacing: "0.02em",
              borderBottom: "1.5px solid #3b82f6",
              paddingBottom: "2px",
              display: "inline-block",
            }}
          >
            Trusted by customers
          </span>
        </div>

        <h1
          style={{
            margin: "10px 0 48px",
            fontSize: "clamp(28px, 5vw, 42px)",
            fontWeight: 700,
            color: "#2563eb",
            letterSpacing: "-0.5px",
            textAlign: "center",
          }}
        >
          Voices of Our Customers
        </h1>

        <div style={{ position: "relative", height: "320px", width: "100%" }}>
          {testimonials.map((t, i) => {
            const pos = getPosition(i);
            if (pos === "hidden") return null;
            return (
              <VideoCard
                key={t.id}
                testimonial={t}
                position={pos}
                onClick={() => {
                  if (pos === "left") navigate(-1);
                  if (pos === "right") navigate(1);
                }}
              />
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
            marginTop: "32px",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            aria-label="Previous"
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              border: "none", background: "#eff6ff", color: "#2563eb",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#eff6ff")}
          >
            <ChevronLeft />
          </button>

          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === activeIndex ? "24px" : "10px",
                  height: "10px", borderRadius: "5px", border: "none",
                  background: i === activeIndex ? "#2563eb" : "#bfdbfe",
                  cursor: "pointer", padding: 0,
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => navigate(1)}
            aria-label="Next"
            style={{
              width: "34px", height: "34px", borderRadius: "50%",
              border: "none", background: "#eff6ff", color: "#2563eb",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", transition: "all 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#dbeafe")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#eff6ff")}
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}