import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHome, FaBuilding, FaUsers, FaTrophy } from 'react-icons/fa';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = React.useRef();
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}+</span>;
};

const StatsCounter = () => {
  const stats = [
    { icon: <FaHome />, value: 500, label: 'Properties Sold' },
    { icon: <FaBuilding />, value: 50, label: 'Active Projects' },
    { icon: <FaUsers />, value: 1000, label: 'Happy Clients' },
    { icon: <FaTrophy />, value: 25, label: 'Awards Won' }
  ];

  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <div className="text-5xl mb-4 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <Counter end={stat.value} />
              </div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;