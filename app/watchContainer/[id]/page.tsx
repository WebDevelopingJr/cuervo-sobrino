'use client';
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Footer from "@/app/components/footer";
import { Watch, collections } from "@/app/colectionsWatches/data";

export default function WatchInfoPage() {
  const params = useParams();
  const router = useRouter();
  const watchSlug = decodeURIComponent((params?.id as string) ?? '');

  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState<'features' | 'curiosity'>('features');

  // Find the watch across all collections
  let foundWatch = null;
  for (const col of collections) {
    const w = col.watches.find((w: Watch) => w.name === watchSlug);
    if (w) { foundWatch = w; break; }
  }

  if (!foundWatch) {
    return (
      <div className="min-h-fit flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">Watch not found</p>
      </div>
    );
  }

  const watch = foundWatch;
  const images = watch.images && watch.images.length > 0
    ? watch.images
    : [undefined];

  return (
    <>
      {/* Back button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-white bg-black/40 hover:bg-black/60 backdrop-blur-sm px-4 py-2 text-[10px] tracking-[0.2em] uppercase transition-colors duration-200"
        >
          <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back
        </button>
      </div>

      {/* Main content */}
      <section className="min-h-fit bg-white pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-start">

            {/* Left — images */}
            <div className="flex gap-4 md:w-1/2">
              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex flex-col gap-3">
                  {images.map((img: string | undefined, i: number) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-14 h-14 border transition-colors duration-200 overflow-hidden flex items-center justify-center ${
                        activeImage === i ? 'border-[#8B0000]' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      {img ? (
                        <img src={img} alt={`${watch.name} ${i + 1}`} className="w-full h-full object-contain p-1" />
                      ) : (
                        <WatchPlaceholder small />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {/* Main image */}
              <div className="flex-1 border border-gray-100 flex items-center justify-center bg-gray-50 aspect-square">
                {images[activeImage] ? (
                  <img
                    src={images[activeImage]}
                    alt={watch.name}
                    className="w-full h-full object-contain p-8"
                  />
                ) : (
                  <WatchPlaceholder />
                )}
              </div>
            </div>

            {/* Right — info */}
            <div className="md:w-1/2">
              <h1 className="font-serif text-4xl font-light text-gray-900 tracking-wide mb-3">
                {watch.name}
              </h1>

              {watch.price && (
                <p className="text-[#8B0000] text-xl font-light tracking-wide mb-6">
                  {watch.price} $
                </p>
              )}

              <p className="text-sm text-gray-600 leading-relaxed font-light mb-8">
                {watch.description}
              </p>

              <button className="flex items-center gap-2 bg-[#8B0000] hover:bg-[#6d0000] transition-colors duration-200 text-white text-[10px] tracking-[0.2em] uppercase font-light px-8 py-4 cursor-pointer">
                Inquire Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs section */}
      {(watch.features || watch.curiosity) && (
        <section className="bg-[#f5f0e8] py-12 px-6">
          <div className="max-w-5xl mx-auto">
            {/* Tab headers */}
            <div className="flex gap-8 border-b border-gray-300 mb-8">
              {watch.features && (
                <button
                  onClick={() => setActiveTab('features')}
                  className={`pb-3 text-xs tracking-[0.25em] uppercase font-light transition-colors duration-200 ${
                    activeTab === 'features'
                      ? 'text-[#8B0000] border-b-2 border-[#8B0000]'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Features
                </button>
              )}
              {watch.curiosity && (
                <button
                  onClick={() => setActiveTab('curiosity')}
                  className={`pb-3 text-xs tracking-[0.25em] uppercase font-light transition-colors duration-200 ${
                    activeTab === 'curiosity'
                      ? 'text-[#8B0000] border-b-2 border-[#8B0000]'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  Curiosity
                </button>
              )}
            </div>

            {/* Tab content */}
            {activeTab === 'features' && watch.features && (
              <div className="space-y-5">
                {watch.features.map((f) => (
                  <div key={f.label}>
                    <p className="text-xs font-semibold text-gray-800 tracking-wide mb-1">{f.label}</p>
                    <p className="text-xs text-gray-600 font-light leading-relaxed">{f.value}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'curiosity' && watch.curiosity && (
              <p className="text-sm text-gray-600 font-light leading-relaxed max-w-2xl">
                {watch.curiosity}
              </p>
            )}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

function WatchPlaceholder({ small = false }: { small?: boolean }) {
  return (
    <div className={`${small ? 'w-full h-full' : 'w-32 h-32'} flex items-center justify-center`}>
      <svg
        className={`${small ? 'w-6 h-6' : 'w-16 h-16'} text-gray-300`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
        <path strokeLinecap="round" d="M12 7v5l3 3" strokeWidth="1.5" />
      </svg>
    </div>
  );
}