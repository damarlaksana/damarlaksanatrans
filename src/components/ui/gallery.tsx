// components/ui/gallery.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const images = [
  "/images/galeri/1.jpg",
  "/images/galeri/2.jpg",
  "/images/galeri/3.jpg",
  "/images/galeri/4.jpg",
];

export default function Gallery() {
  return (
    <section className="my-12 px-4">
      <h2 className="text-2xl font-bold text-center text-green-800 mb-6">Galeri Unit</h2>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        pagination={{ clickable: true }}
        className="relative"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              width={400}
              height={200}
              className="mx-auto rounded-xl shadow-md"
            />
          </SwiperSlide>
        ))}

        {/* Tombol Navigasi */}
        <div className="swiper-button-prev !text-green-700"></div>
        <div className="swiper-button-next !text-green-700"></div>
      </Swiper>
    </section> // ✅ Tambahkan ini
  );
}
