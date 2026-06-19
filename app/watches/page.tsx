'use client'
import Image from 'next/image';
import Footer from '../components/footer';
import { useRouter } from 'next/navigation';
import { collectionsWatches } from '../colectionsWatches/data';
import Header from '../components/header';

export default function WatchesGrid() {
  const router = useRouter()

  return (
    <>
    <Header />
    <section className="relative w-full h-screen overflow-hidden flex items-end justify-start">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/watches/SliceVideo-watches.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="font-serif text-[clamp(64px,7vw,96px)] font-light text-white leading-none tracking-[-0.01em] z-10 mb-20 ml-18">Watches</h1>
    </section>

    <section className="py-20 px-6">
      <div className="max-w-275 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {collectionsWatches.map((item) => (
            <div key={item.label} className="relative group h-55 overflow-hidden cursor-pointer" onClick={()=> router.push(`watchesIntern/${item.label}`)}>
              <Image src={item.bg} alt={item.label} fill
                className="object-cover object-center grayscale-0 group-hover:grayscale"
              />
              {/* Label */}
              <div className="absolute inset-0 flex items-end justify-center pb-5">
                <p className="text-[12px] tracking-[0.35em] uppercase text-black font-bold text-center px-4">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
    </>
  );
}