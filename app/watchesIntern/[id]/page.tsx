'use client';
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Footer from "@/app/components/footer";
import { collections } from "@/app/colectionsWatches/data";

export default function WatchPage() {
  const params = useParams();
  const router = useRouter();
  const slug = decodeURIComponent((params?.id as string) ?? '');

  const collection = collections.find((c) => c.label === slug);

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-sm tracking-widest uppercase">Collection not found</p>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
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
        <div className="absolute bottom-16 left-16">
          <h1 className="font-serif text-[clamp(48px,6vw,88px)] font-light text-white leading-none tracking-[-0.01em]">
            {collection.label}
          </h1>
        </div>
      </section>

      {/* Watch List */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto divide-y divide-gray-100">
          {collection.watches.length === 0 && (
            <p className="text-center text-gray-400 text-sm tracking-widest uppercase py-20">
              Coming soon
            </p>
          )}

          {collection.watches.map((watch) => (
            <div key={watch.name} className="flex items-center gap-8 py-10">
              {/* Watch Image */}
              <div className="shrink-0 w-28 h-28">
                {watch.images?.[0] ? (
                  <img
                    src={watch.images[0]}
                    alt={watch.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
                    <svg className="w-10 h-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9" strokeWidth="1.5" />
                      <path strokeLinecap="round" d="M12 7v5l3 3" strokeWidth="1.5" />
                    </svg>
                  </div>
                )}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2 className="font-serif text-xl font-light text-gray-900 tracking-wide mb-1">
                  {watch.name}
                </h2>
                {watch.price && (
                  <p className="text-[#8B0000] text-sm font-light mb-2">{watch.price} $</p>
                )}
                <p className="text-xs text-gray-500 leading-relaxed font-light line-clamp-2">
                  {watch.description}
                </p>
              </div>

              {/* Discover Button */}
              <div className="shrink-0">
                <button
                  onClick={() => router.push(`/watchContainer/${encodeURIComponent(watch.name)}`)}
                  className="flex items-center gap-2 bg-[#8B0000] hover:bg-[#6d0000] transition-colors duration-200 text-white text-[10px] tracking-[0.2em] uppercase font-light px-5 py-3 cursor-pointer"
                >
                  Discover
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}