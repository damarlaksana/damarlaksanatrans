'use client';

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaMapMarkerAlt, FaInstagram, FaFacebook } from "react-icons/fa";
import Gallery from "@/components/ui/gallery";

export default function HomePage() {
  return (
    <div className="p-6 space-y-10 bg-green-50 text-green-900">
      {/* Judul & Deskripsi */}
      <h1 className="text-4xl font-bold text-center text-green-800">
        Sewa Bus Pariwisata – Damar Laksana Trans
      </h1>
      <p className="text-center text-green-700">
        Damar Laksana Trans adalah penyedia jasa transportasi bus pariwisata yang siap menemani perjalanan Anda dengan kenyamanan dan keamanan terbaik. Kami melayani wilayah Jabodetabek dan Bandung dengan armada modern dan sopir berpengalaman.
      </p>

      {/* Gallery */}
      <Gallery />

      {/* Daftar Unit */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Big Bus */}
        <Card className="bg-white border-green-600 border">
          <CardContent className="p-4 space-y-2">
            <img src="/images/bus-besar.jpg" alt="Bus Besar" className="rounded-xl" />
            <h2 className="text-xl font-semibold text-green-800">Bus Besar</h2>
            <ul className="text-sm text-green-700">
              <li>Kapasitas hingga 50 penumpang</li>
              <li>AC, TV, Karaoke</li>
              <li>Bagasi luas</li>
              <li className="font-bold text-yellow-600">Rp 3.500.000 / hari</li>
              <li className="mt-2 text-xs">Sudah termasuk: Bus, BBM, Crew</li>
              <li className="text-xs">Belum termasuk: Tips Crew, Makan Crew, Parkir, Tol</li>
            </ul>
          </CardContent>
        </Card>

        {/* Medium Bus */}
        <Card className="bg-white border-green-600 border">
          <CardContent className="p-4 space-y-2">
            <img src="/images/bus-medium.jpg" alt="Bus Medium" className="rounded-xl" />
            <h2 className="text-xl font-semibold text-green-800">Bus Medium</h2>
            <ul className="text-sm text-green-700">
              <li>Kapasitas hingga 35 penumpang</li>
              <li>AC, TV, Karaoke</li>
              <li>Nyaman dan modern</li>
              <li className="font-bold text-yellow-600">Rp 2.700.000 / hari</li>
              <li className="mt-2 text-xs">Sudah termasuk: Bus, BBM, Crew</li>
              <li className="text-xs">Belum termasuk: Tips Crew, Makan Crew, Parkir, Tol</li>
            </ul>
          </CardContent>
        </Card>

        {/* Elf */}
        <Card className="bg-white border-green-600 border">
          <CardContent className="p-4 space-y-2">
            <img src="/images/elf.jpg" alt="Elf Long" className="rounded-xl" />
            <h2 className="text-xl font-semibold text-green-800">Elf Long</h2>
            <ul className="text-sm text-green-700">
              <li>Kapasitas hingga 19 penumpang</li>
              <li>AC, reclining seat</li>
              <li>Cocok untuk keluarga atau grup kecil</li>
              <li className="font-bold text-yellow-600">Rp 1.700.000 / hari</li>
              <li className="mt-2 text-xs">Sudah termasuk: Bus, BBM, Crew</li>
              <li className="text-xs">Belum termasuk: Tips Crew, Makan Crew, Parkir, Tol</li>
            </ul>
          </CardContent>
        </Card>

        {/* Hiace */}
        <Card className="bg-white border-green-600 border">
          <CardContent className="p-4 space-y-2">
            <img src="/images/hiace.jpg" alt="Hiace" className="rounded-xl" />
            <h2 className="text-xl font-semibold text-green-800">Hiace</h2>
            <ul className="text-sm text-green-700">
              <li>Kapasitas hingga 15 penumpang</li>
              <li>AC, nyaman dan elegan</li>
              <li>Cocok untuk perjalanan bisnis atau keluarga</li>
              <li className="font-bold text-yellow-600">Rp 1.500.000 / hari</li>
              <li className="mt-2 text-xs">Sudah termasuk: Bus, BBM, Crew</li>
              <li className="text-xs">Belum termasuk: Tips Crew, Makan Crew, Parkir, Tol</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Form Pemesanan */}
      <div className="bg-white p-6 rounded-xl shadow-md max-w-2xl mx-auto border-green-500 border">
        <h2 className="text-2xl font-bold mb-4 text-center text-green-800">Form Pemesanan</h2>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const nama = (e.currentTarget.elements[0] as HTMLInputElement).value;
            const whatsapp = (e.currentTarget.elements[1] as HTMLInputElement).value;
            const jemput = (e.currentTarget.elements[2] as HTMLInputElement).value;
            const tujuan = (e.currentTarget.elements[3] as HTMLInputElement).value;
            const tanggal = (e.currentTarget.elements[4] as HTMLInputElement).value;
            const durasi = (e.currentTarget.elements[5] as HTMLInputElement).value;

            const pesan = `Halo, saya ingin memesan unit:\n\nNama: ${nama}\nNo WhatsApp: ${whatsapp}\nTitik Jemput: ${jemput}\nTujuan: ${tujuan}\nTanggal: ${tanggal}\nDurasi: ${durasi}\n\nMohon info ketersediaannya.`;
            const url = `https://wa.me/6281224676920?text=${encodeURIComponent(pesan)}`;
            window.open(url, "_blank");
          }}
        >
          <Input placeholder="Nama Lengkap" required />
          <Input placeholder="Nomor WhatsApp" required />
          <Input placeholder="Titik Jemput" required />
          <Input placeholder="Tujuan" required />
          <Input type="date" placeholder="Tanggal" required />
          <Input placeholder="Durasi (hari)" required />
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
            Pesan via WhatsApp
          </Button>
        </form>
      </div>

      {/* Sosial Media & Maps */}
      <div className="text-center space-y-4">
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/6281224676920" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg">
            <FaWhatsapp className="text-2xl" /> WhatsApp
          </a>
          <a href="https://www.instagram.com/damarlaksanatrans/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg">
            <FaInstagram className="text-2xl" /> Instagram
          </a>
          <a href="https://www.facebook.com/profile.php?id=61575529134540" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg">
            <FaFacebook className="text-2xl" /> Facebook
          </a>
        </div>

        <div className="mt-8 space-y-4 text-center">
          <h3 className="text-xl font-semibold text-green-800 mb-2">Lokasi Kantor / Pool Kami</h3>
          <a
            href="https://www.google.com/maps/place/Masjid+Besar+Cimaung/@-7.0906223,107.5590799"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 text-lg hover:underline"
          >
            📍 Lokasi: Masjid Besar Cimaung, Bandung
          </a>
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.3048071677626!2d107.55907997410688!3d-7.090622369522824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ef1f7e6e6453%3A0x9a8b59b8a98a1c01!2sMasjid%20Besar%20Cimaung!5e0!3m2!1sid!2sid!4v1682675984357!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl shadow-lg w-full max-w-3xl"
            ></iframe>
          </div>
        </div>
      </div>
    </div> // <-- penutup utama div
  );
}
