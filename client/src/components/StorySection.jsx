import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

// --- Icon Components (inline SVGs to avoid react-icons dependency) ---
const IconCrane = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 20h20M6 20V10l6-6 6 6v10M10 20v-6h4v6"/>
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconLeaf = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
  </svg>
);
const IconClock = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>
);

// --- Feature cards data ---
const features = [
  { icon: <IconCrane />, title: 'Premium Materials', sub: 'Finest sourced globally', accent: '#2563EB' },
  { icon: <IconShield />, title: 'Expert Engineers', sub: 'Certified & experienced', accent: '#3B82F6' },
  { icon: <IconLeaf />, title: 'Sustainable Build', sub: 'Eco-conscious methods', accent: '#10B981' },
  { icon: <IconClock />, title: 'Timely Delivery', sub: 'On-schedule always', accent: '#6366F1' },
];

// --- Animated counter ---
function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target);
    const duration = 1600;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

// --- Main Component ---
export default function StorySection() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => { if (inView) controls.start('visible'); }, [inView, controls]);

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay } },
  });

  const fadeRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 48 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay } },
  });

  return (
    <section
      ref={sectionRef}
      className="bg-white dark:bg-gray-900 py-20 md:py-24 overflow-hidden relative transition-colors duration-300"
    >
      {/* Subtle background orbs - adjusted for dark mode */}
      <div className="absolute top-[-120px] right-[-120px] w-[480px] h-[480px] rounded-full pointer-events-none opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
        }}
      />
      <div className="absolute bottom-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full pointer-events-none opacity-30 dark:opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              variants={fadeUp(0)}
              initial="hidden"
              animate={controls}
              className="text-blue-600 dark:text-blue-400 text-xs font-bold tracking-[0.2em] uppercase mb-4"
            >
              Our Story &amp; Vision
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp(0.08)}
              initial="hidden"
              animate={controls}
              className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
            >
              Where Vision<br />Meets Craft
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={fadeUp(0.16)}
              initial="hidden"
              animate={controls}
              className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 max-w-lg"
            >
              Since 2010, ChennaiRealty has been at the forefront of premium construction and architectural design.
              We merge traditional craftsmanship with cutting-edge technology — creating homes that are not just
              buildings, but <em className="not-italic text-blue-600 dark:text-blue-400 font-semibold">living legacies</em>.
            </motion.p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  variants={fadeUp(0.24 + i * 0.08)}
                  initial="hidden"
                  animate={controls}
                  whileHover={{ y: -4 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-100 dark:border-gray-700 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/20"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${f.accent}15`,
                      border: `1.5px solid ${f.accent}30`,
                      color: f.accent,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 dark:text-white text-sm">{f.title}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{f.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT COLUMN ── */}
          <motion.div
            variants={fadeRight(0.1)}
            initial="hidden"
            animate={controls}
            className="relative"
          >
            {/* Decorative animated border ring */}
            {/* <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-4 rounded-3xl border-2 border-dashed border-blue-200 dark:border-blue-800/50 pointer-events-none"
            />

            {/* Second static border for depth */}
            {/* <div className="absolute -inset-2 rounded-2xl border border-blue-100 dark:border-blue-900/30 pointer-events-none" /> */} 
            {/* Outer rotating dashed border */}
<motion.div
  animate={{ rotate: 360 }}
  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  className="absolute -inset-4 rounded-3xl border-2 border-dashed border-blue-400 dark:border-blue-600 pointer-events-none opacity-60"
/>

{/* Middle pulsing border */}
<motion.div
  animate={{ scale: [1, 1.015, 1], opacity: [0.4, 0.8, 0.4] }}
  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
  className="absolute -inset-2 rounded-2xl border-2 border-blue-300 dark:border-blue-700 pointer-events-none"
/>

{/* Inner glowing border */}
<motion.div
  animate={{ opacity: [0.3, 0.7, 0.3] }}
  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
  className="absolute -inset-1 rounded-2xl border border-blue-500 dark:border-blue-500 pointer-events-none shadow-[0_0_15px_rgba(59,130,246,0.3)]"
/>

{/* Shimmer sweep effect */}
<motion.div
  animate={{ x: ['-100%', '200%'] }}
  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.5 }}
  className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-20"
>
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 w-1/3 h-full" />
</motion.div>

{/* Corner dot accents */}
{/* {[
  'top-0 left-0',
  'top-0 right-0',
  'bottom-0 left-0',
  'bottom-0 right-0'
].map((pos, i) => (
  <motion.div
    key={i}
    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
    className={`absolute ${pos} w-3 h-3 bg-blue-500 rounded-full z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2`}
  />
))} */}

            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl dark:shadow-blue-900/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none z-10" />
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                src="https://res.cloudinary.com/dzgnkrxme/image/upload/v1779900703/agastya.png.bv_ip6uff.webp"
                alt="Luxury property"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            {/* ── Badge: Years of Excellence ── */}
            <motion.div
              variants={fadeUp(0.45)}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.06 }}
              className="absolute -bottom-5 left-6 z-10 bg-blue-600 dark:bg-blue-500 rounded-2xl py-4 px-5 shadow-xl flex items-center gap-3 min-w-[150px]"
            >
              <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-extrabold text-white leading-none">
                  <AnimatedCounter target="15" suffix="+" />
                </div>
                <div className="text-white/80 text-[10px] font-semibold tracking-wider uppercase mt-1">
                  Years of<br />Excellence
                </div>
              </div>
            </motion.div>

            {/* ── Badge: Properties Sold ── */}
            <motion.div
              variants={fadeUp(0.55)}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.06 }}
              className="absolute -top-5 right-5 z-10 bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl py-3 px-5 shadow-lg border border-gray-200 dark:border-gray-700 text-center"
            >
              <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 leading-none">
                <AnimatedCounter target="500" suffix="+" />
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-[10px] font-semibold tracking-wider uppercase mt-1">
                Properties Sold
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,600;0,700;0,800;1,400&display=swap');
        @media (max-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }
        }
      `}</style>
    </section>
  );
}