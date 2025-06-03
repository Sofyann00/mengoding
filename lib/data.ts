import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Full Stack Web Development",
    description: "Wujudkan aplikasi web yang powerful dengan layanan Full Stack Development kami. Kami membangun solusi end-to-end yang scalable menggunakan teknologi modern seperti Next.js dan React, didukung dengan backend yang handal.",
    price: 8500000,
    image: "https://images.unsplash.com/photo-1603468620905-8de7d86b781e",
    category: "Web Development",
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Kembangkan aplikasi mobile yang powerful dengan layanan Mobile Development kami. Kami ahli dalam membangun aplikasi native untuk iOS dan Android yang memberikan pengalaman pengguna yang optimal dan performa tinggi.",
    price: 9500000,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
    category: "Mobile Development",
  },
  {
    id: 3,
    name: "E-commerce Solution",
    description: "Tingkatkan bisnis online Anda dengan solusi E-commerce yang komprehensif dari kami. Kami menyediakan platform yang aman, mudah dikelola, dan dilengkapi dengan integrasi pembayaran serta sistem manajemen inventory yang efisien.",
    price: 10000000,
    image: "https://images.unsplash.com/photo-1557821552-17105176677c",
    category: "Web Development",
  },
  {
    id: 4,
    name: "Backend API Development",
    description: "Hubungkan sistem Anda dengan mudah melalui layanan Backend API kami. Kami ahli dalam membangun API yang scalable, aman, dan memungkinkan integrasi seamless dengan berbagai layanan pihak ketiga.",
    price: 6500000,
    image: "https://images.unsplash.com/photo-1623479322729-28b25c16b011",
    category: "Backend Development",
  },
  {
    id: 5,
    name: "UI/UX Design & Development",
    description: "Tingkatkan pengalaman pengguna aplikasi Anda dengan layanan UI/UX Design kami. Kami menciptakan desain yang menarik dan intuitif, didukung dengan riset pengguna untuk hasil yang optimal.",
    price: 4500000,
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    category: "Design",
  },
  {
    id: 6,
    name: "DevOps Implementation",
    description: "Optimalkan proses development dan deployment dengan layanan DevOps kami. Kami membangun infrastruktur yang automated, scalable, dan reliable untuk meningkatkan efisiensi tim development Anda.",
    price: 8000000,
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb",
    category: "DevOps",
  },
  {
    id: 7,
    name: "WordPress Development",
    description: "Bangun presence online Anda dengan layanan WordPress Development kami. Kami menciptakan website yang customized, SEO-friendly, dan mudah dikelola sesuai kebutuhan bisnis Anda.",
    price: 3500000,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740",
    category: "Web Development",
  },
  {
    id: 8,
    name: "Data Analytics Dashboard",
    description: "Visualisasikan data bisnis Anda dengan Dashboard Analytics yang interaktif. Kami membangun solusi yang memudahkan Anda menganalisis dan mengambil keputusan berdasarkan data real-time.",
    price: 7500000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    category: "Data Analytics",
  },
  {
    id: 9,
    name: "Cloud Migration Service",
    description: "Modernisasi infrastruktur IT Anda dengan layanan Cloud Migration kami. Kami membantu transisi sistem Anda ke cloud dengan aman, efisien, dan tanpa gangguan pada operasional bisnis.",
    price: 9800000,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    category: "Cloud Services",
  },
  {
    id: 10,
    name: "Progressive Web App Development",
    description: "Tingkatkan engagement pengguna dengan Progressive Web App yang powerful. Kami membangun aplikasi web yang dapat diakses offline dan memberikan pengalaman seperti aplikasi native.",
    price: 5500000,
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    category: "Web Development",
  },
  {
    id: 11,
    name: "Microservices Architecture",
    description: "Tingkatkan skalabilitas sistem Anda dengan arsitektur Microservices. Kami membangun sistem yang modular, mudah dimaintain, dan dapat dikembangkan secara independen sesuai kebutuhan.",
    price: 9900000,
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    category: "Backend Development",
  },
  {
    id: 12,
    name: "AI/ML Integration",
    description: "Optimalkan proses bisnis Anda dengan integrasi AI/ML yang powerful. Kami membantu mengimplementasikan solusi machine learning yang dapat meningkatkan efisiensi dan memberikan insights berharga.",
    price: 9950000,
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    category: "AI Development",
  },
];

// Helper function to format price in IDR
export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
};
