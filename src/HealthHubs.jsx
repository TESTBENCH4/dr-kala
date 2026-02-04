import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Mousewheel } from 'swiper/modules';
import { Plus } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const HealthHubs = () => {
  const navigate = useNavigate();
  const hubs = [
    { 
      title: "Obesity Reversal", 
      id: "01",
      desc: "Biological fat loss through metabolic reset and hormonal rebalancing.", 
      icon: "/fatloss.png" 
    },
    { 
      title: "Disease Reversal", 
      id: "02",
      desc: "Root-cause correction for Type 2 Diabetes, Hypertension, and PCOS.", 
      icon: "/Disease Reversal-Photoroom.png" 
    },
    { 
      title: "Regenerative Medicine", 
      id: "03",
      desc: "Cellular repair via NAD+, Exosomes, and organ-specific protocols.", 
      icon: "/Regenerative Medicine.png" 
    },
    { 
      title: "Longevity & Anti-Aging", 
      id: "04",
      desc: "Mitochondrial rejuvenation and biological age reversal.", 
      icon: "/Longevity & Anti-Aging.png" 
    }
  ];

  const [expandedIndex, setExpandedIndex] = React.useState(null);

  return (
    <section className="bg-[#FDFDFD] py-24 md:py-32 border-t border-slate-100 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        
        {/* Header Section - Minimalist */}
        <div className="flex flex-col lg:flex-row justify-between items-baseline mb-20 gap-8">
          <div>
            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 mb-6">Specialized Units</h2>
            <p className="text-6xl md:text-8xl font-serif text-[#1A1A1A] tracking-tighter">
              Health <span className="italic font-normal text-slate-400">Hubs</span>
            </p>
          </div>
          <p className="max-w-xs text-sm text-slate-400 leading-relaxed font-light">
            Our specialized clinics focus on systemic restoration rather than symptom management.
          </p>
        </div>

        {/* Carousel Container */}
        <Swiper
          modules={[Autoplay, Pagination, Mousewheel]}
          spaceBetween={40}
          slidesPerView={1.1}
          grabCursor={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          className="health-swiper !pb-24"
        >
          {hubs.map((hub, i) => (
            <SwiperSlide key={i}>
              <div
                className="group cursor-pointer transition-all duration-500"
                onClick={() => {
                  if (hub.title === "Obesity Reversal") {
                    navigate("/obesity-reversal");
                  } else if (hub.title === "Disease Reversal") {
                    navigate("/disease-reversal");
                  } else if (hub.title === "Regenerative Medicine") {
                    navigate("/regenerative-medicine");
                  } else if (hub.title === "Longevity & Anti-Aging") {
                    navigate("/longevity-anti-aging");
                  }
                }}
              >
                {/* Image Container - No Background, just floating elegant icons */}
                <div className="relative aspect-[4/5] w-full mb-8 overflow-hidden bg-[#F7F7F7] rounded-sm flex items-center justify-center">
                   <div className="absolute top-6 left-6 text-[10px] font-mono text-[#1A1A1A]">
                    SCT // {hub.id}
                  </div>
                  <img 
                    src={hub.icon} 
                    alt={hub.title} 
                    className="w-[60%] h-auto mix-blend-multiply grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out" 
                  />
                  {/* Hover Overlay Button */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-sm">
                    <Plus size={18} className="text-black" />
                  </div>
                </div>

                {/* Content - Typography Focused */}
                <div className="space-y-4 px-2">
                  <h3 className="text-2xl font-serif text-[#1A1A1A] group-hover:text-slate-500 transition-colors">
                    {hub.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-slate-200 group-hover:w-full group-hover:bg-black transition-all duration-700" />
                  <p className="text-sm text-slate-400 leading-relaxed font-light line-clamp-2">
                    {hub.desc}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .health-swiper .swiper-pagination-bullet {
          background: #E2E8F0;
          opacity: 1;
          width: 40px;
          height: 1px;
          border-radius: 0;
        }
        .health-swiper .swiper-pagination-bullet-active {
          background: #1a1a1a;
          height: 2px;
          transition: all 0.4s;
        }
      `}</style>
    </section>
  );
};

export default HealthHubs;