import { motion } from "framer-motion";

const cards = [
  // Cards data
  {
    id: 1,
    title: "Nature Inspired",
    image: "/Portfolio1.png", // Ensure images are in `public/` folder
    category: "Design",
    style: "tall",
  },
  {
    id: 2,
    title: "Digital Interface",
    image: "/Portfolio1.png",
    category: "Technology",
    style: "wide",
  },
  // Add additional cards
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const getCardClassName = (style) => {
  const baseClass =
    "relative group overflow-hidden rounded-2xl transition-transform duration-700";
  if (style === "tall") return `${baseClass} col-span-1 row-span-2 h-[600px]`;
  if (style === "wide") return `${baseClass} col-span-2 h-[400px] mb-8`;
  return `${baseClass} col-span-1 h-[200px] mt-20`;
};

export default function AnimatedGrid() {
  return (
    <div className="min-h-screen bg-black p-8">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto auto-rows-[300px]"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={getCardClassName(card.style)}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Card content */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex justify-center items-center text-white">
              <h3>{card.title}</h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
