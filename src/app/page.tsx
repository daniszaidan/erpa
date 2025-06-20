import ButtonTitle from '@/components/ButtonTitle';
import Navigation from '@/components/Navigation';
import {
  ArrowRightIcon,
  HashtagIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Card from '@/components/Card';
import { tier } from '@/utils/tier';

import bg_about from '@/assets/bg_about.jpg';
import bg_contact from '@/assets/bg_contact.jpg';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="w-full h-dvh p-20">
        <div className="w-full h-full rounded-30 bg-cover bg-center bg-hero bg-fixed relative overflow-hidden">
          <div className="w-full h-full absolute inset-0 px-100 md:px-50  sm:px-25 bg-gradient-to-r from-[rgba(0,0,0,.5)] to-transparent flex flex-col gap-30 pt-25">
            <Navigation />
            <div className="flex flex-col items-start h-full justify-center gap-25">
              <div className="flex flex-col gap-15">
                <h1 className="text-white text-[60px] sm:text-[40px] font-[600] max-w-[550px]">
                  Erpa
                </h1>
                <h2 className="text-white text-[20px] sm:text-[17.5px] font-[500] max-w-[600px]">
                  Memudahkan pengusaha mencatat barang keluar-masuk dan
                  keuntungan harian dengan sistem tier yang fleksibel.
                </h2>
              </div>
              <ButtonTitle title="Coba sekarang" icon={<SparklesIcon />} />
            </div>
          </div>
        </div>
      </section>

      <div className="p-100 md:p-50 sm:p-30">
        <div className="max-w-7xl mx-auto flex flex-col gap-[150px] sm:gap-100">
          <section className="w-full">
            <div className="grid gap-25 mb-50">
              <h3 className="text-[40px] sm:text-[30px] font-[600]">
                Tentang Erpa
              </h3>
              <p className="text-[25px] sm:text-[20px] font-[400]">
                Keda ERP adalah solusi modern untuk pengusaha yang ingin
                mencatat setiap transaksi barang masuk dan keluar, serta
                memantau keuntungan harian dengan mudah. Dengan sistem tier,
                Anda dapat memilih fitur sesuai kebutuhan bisnis Anda.
              </p>
            </div>
            <div className="w-full h-[400px] rounded-30 overflow-hidden relative">
              <Image
                src={bg_about}
                alt="bg about"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 w-full h-full p-30 flex sm:flex-col flex-wrap items-end justify-end gap-25">
                <ButtonTitle title="ERP" icon={<HashtagIcon />} />
                <ButtonTitle title="Manajemen" icon={<HashtagIcon />} />
                <ButtonTitle title="Keuntungan" icon={<HashtagIcon />} />
              </div>
            </div>
          </section>

          <section className="w-full">
            <div className="grid gap-25 mb-50">
              <h3 className="text-[40px] sm:text-[30px] font-[600]">Harga</h3>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-1 gap-25 md:gap-20">
              {tier.map((item, index) => (
                <Card item={item} key={index} />
              ))}
            </div>
          </section>

          <section className="w-full h-[500px] rounded-30 overflow-hidden relative">
            <Image
              src={bg_contact}
              alt="bg about"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 w-full h-full p-30 flex flex-col items-start justify-between bg-gradient-to-r from-[rgba(0,0,0,.3)] to-transparent">
              <h5 className="bg-white py-5 px-15 rounded-full text-[20px] font-[600]">
                Kontak
              </h5>
              <div className="grid gap-15 text-white">
                <p className="text-[25px] sm:text-[20px] font-[400] ">
                  Jangan ragu untuk menghubungi kami
                </p>
                <div className="flex flex-wrap gap-15 items-start">
                  <Link
                    href="https://wa.me/6281234567890"
                    className="text-[20px] font-[600]"
                  >
                    <ButtonTitle
                      title="081234567890"
                      icon={<ArrowRightIcon />}
                    />
                  </Link>
                  <Link
                    href="mailto:erpa@gmail.com"
                    className="text-[20px] font-[600]"
                  >
                    <ButtonTitle
                      title="erpa@gmail.com"
                      icon={<ArrowRightIcon />}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-wrap gap-15 items-center justify-between mt-100 text-[20px] font-bold text-black/50">
            <h6>© 2025 Erpa</h6>
            <span>
              Design & Develop by{' '}
              <Link
                className="text-black"
                href="https://daniszaidan.vercel.app/"
              >
                Danis Zaidan
              </Link>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
