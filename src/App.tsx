import { useState, useEffect } from "react";
import {
  Zap,
  Users,
  Clock,
  Star,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  TrendingUp,
  Shield,
  ArrowRight,
  Truck,
  Package,
  MapPin,
  Check,
  Sparkles,
  Camera,
} from "lucide-react";

// ─── Product Data ─────────────────────────────────────────────
const products = [
  {
    id: 1,
    emoji: "🏆",
    name: "ULTIMATE RESELL BUNDLE",
    originalPrice: 200,
    salePrice: 50,
    description:
      "The COMPLETE package. Every single wholesaler, every supplier, every guide — all in one. This is the full vault: cologne vendors, shoe suppliers, clothing wholesalers, electronics, glasses, beanies, and more. Plus our step-by-step reselling blueprint that shows you how to flip for profit from day one. If you're serious about building a reselling empire, this is the only bundle you need.",
    tag: "👑 BEST VALUE",
    gradient: "from-amber-500/20 via-yellow-500/10 to-transparent",
    borderColor: "border-amber-500/30 hover:border-amber-400/50",
    tagBg: "bg-gradient-to-r from-amber-500 to-yellow-400 text-black",
    btnGradient: "bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300",
    checkoutUrl: "https://whop.com/checkout/plan_wcWDE3alzeg6V",
    features: ["All 7 vendor lists included", "Reselling guide + blueprint", "Future updates FREE"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/a80e0afe-8f6c-48e5-be6f-54783bc2045e/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/59559fd5-71a9-4575-bd03-2540f05d43e4/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/8badfcbd-0f4b-4cdd-9010-16b3cfba83f0/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/a5740965-e685-4509-b57a-d33736cff5a4/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/731eedce-1ff4-4c5c-8b78-203c4ccff75d/image.png",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/3b53e84c-434f-40ca-a018-a195f651a8fe/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/8ab19dad-f876-4363-9661-f81da03d8b79/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/ede65992-b982-42e6-8ddf-400829141373/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/d73cc662-215f-43d6-bab5-dadab60c9305/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/d240553d-dd79-4089-835f-28666361f081/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/6e74f452-5d9a-45af-b62c-fd45c72fe6ea/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/15204f38-9455-4502-8a8c-abdc9b9dfb5f/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/8fcf86a4-47c2-4712-ae15-485fccf2bbd6/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/17a7f6ba-0336-411f-b53f-b0d817e2d2fa/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/bbe10bc3-69f2-46f6-8e33-7167bbb183c2/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/fda9fa83-c29e-4b40-aabd-726bd1ea8756/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/36ae1c18-c104-48a5-aabf-1a94aa3b6102/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/32d18442-96fa-416c-ba9b-3c8691117337/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/5f558815-a9bb-4c39-8896-5c86f703a5dc/image.png",
    ],
  },
  {
    id: 2,
    emoji: "us-flag",
    name: "U.S. BASED SUPPLIER",
    originalPrice: 60,
    salePrice: 15,
    description:
      "A verified U.S. based supplier with warehouses in California, Chicago, and the brand new Texas location — plus manufacturing in China. 3-6 day domestic delivery instead of waiting weeks. They carry clothing, shoes, accessories, electronics, and more. U.S. shipping = less returns, faster flips, more profit.",
    tag: "⚡ FAST SHIPPING",
    gradient: "from-red-500/10 via-blue-500/10 to-transparent",
    borderColor: "border-blue-500/25 hover:border-red-400/40",
    tagBg: "bg-gradient-to-r from-red-500 to-blue-500 text-white",
    btnGradient: "bg-gradient-to-r from-red-500 to-blue-600 hover:from-red-400 hover:to-blue-500",
    checkoutUrl: "https://whop.com/checkout/plan_u3oxRbDNLKyLW",
    features: ["3-6 day U.S. delivery", "CA, Chicago, TX + China warehouses", "Clothing, shoes, accessories & more"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/5f558815-a9bb-4c39-8896-5c86f703a5dc/image.png",
    ],
  },
  {
    id: 3,
    emoji: "🧴",
    name: "COLOGNE VENDORS",
    originalPrice: 50,
    salePrice: 10,
    description:
      "Verified cologne & fragrance wholesalers selling Dior Sauvage, Louis Vuitton, Creed Aventus, Valentino Uomo, Tom Ford, Versace, YSL, and many more designer fragrances at wholesale prices. We're talking $15-30 colognes that resell for $80-150+. One of the easiest flips in the game right now.",
    tag: "🔥 HOT SELLER",
    gradient: "from-emerald-500/15 via-green-500/5 to-transparent",
    borderColor: "border-emerald-500/25 hover:border-emerald-400/40",
    tagBg: "bg-gradient-to-r from-emerald-500 to-green-400 text-black",
    btnGradient: "bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-400 hover:to-green-300",
    checkoutUrl: "https://whop.com/checkout/plan_4K49798MqRnNv",
    features: ["Dior, LV, Creed, Valentino, Tom Ford", "Authentic designer fragrances", "Insane profit margins"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/a80e0afe-8f6c-48e5-be6f-54783bc2045e/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/59559fd5-71a9-4575-bd03-2540f05d43e4/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/8badfcbd-0f4b-4cdd-9010-16b3cfba83f0/image.jpg",
    ],
  },
  {
    id: 4,
    emoji: "🎧",
    name: "AIRPODS — ALL VERSIONS",
    originalPrice: 40,
    salePrice: 8,
    description:
      "Wholesale suppliers for every AirPod version — 2nd Gen, 3rd Gen, AirPods Pro, Pro 2, and AirPods Max. The #1 most requested tech item by resellers. Buy them for pennies on the dollar and flip locally or online. At these wholesale prices your margins are insane. Fast-moving inventory that sells itself.",
    tag: null,
    gradient: "from-blue-500/15 via-cyan-500/5 to-transparent",
    borderColor: "border-blue-500/20 hover:border-blue-400/35",
    tagBg: "",
    btnGradient: "bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-400 hover:to-cyan-300",
    checkoutUrl: "https://whop.com/checkout/plan_uWZZeFlPD57cS",
    features: ["Every AirPod model covered", "Highest demand tech item", "Quick flips guaranteed"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/a5740965-e685-4509-b57a-d33736cff5a4/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/731eedce-1ff4-4c5c-8b78-203c4ccff75d/image.png",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-13/3b53e84c-434f-40ca-a018-a195f651a8fe/image.jpg",
    ],
  },
  {
    id: 5,
    emoji: "👕",
    name: "CLOTHING VENDORS",
    originalPrice: 60,
    salePrice: 12,
    description:
      "Premium streetwear and designer clothing wholesalers — Denim Tears, Chrome Hearts, Essentials (Fear of God), Eric Emanuel shorts, Gallery Dept, Stüssy, Sp5der, Hellstar, Trapstar, and way more. Whether you're selling on Depop, Grailed, or locally — these vendors have the brands people want. Get fits for $5-15 that resell for $40-100+.",
    tag: "🛍️ POPULAR",
    gradient: "from-purple-500/15 via-violet-500/5 to-transparent",
    borderColor: "border-purple-500/20 hover:border-purple-400/35",
    tagBg: "bg-gradient-to-r from-purple-500 to-violet-400 text-white",
    btnGradient: "bg-gradient-to-r from-purple-500 to-violet-400 hover:from-purple-400 hover:to-violet-300",
    checkoutUrl: "https://whop.com/checkout/plan_PO43V7D0OZA0b",
    features: ["Denim Tears, Chrome Hearts, Essentials", "Eric Emanuel, Gallery Dept & more", "Streetwear + designer brands"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/8ab19dad-f876-4363-9661-f81da03d8b79/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/ede65992-b982-42e6-8ddf-400829141373/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/d73cc662-215f-43d6-bab5-dadab60c9305/image.jpg",
    ],
  },
  {
    id: 6,
    emoji: "👟",
    name: "SHOE VENDORS",
    originalPrice: 60,
    salePrice: 12,
    description:
      "Verified shoe wholesalers carrying Dior sneakers, Nike Dunks, Air Jordans (1s, 4s, 11s and more), Louis Vuitton trainers, New Balance, Yeezy, and every hype shoe that moves. Sneakers are the bread and butter of reselling — they ALWAYS sell. Get pairs at $10-25 wholesale and flip for $60-200+.",
    tag: null,
    gradient: "from-rose-500/15 via-pink-500/5 to-transparent",
    borderColor: "border-rose-500/20 hover:border-rose-400/35",
    tagBg: "",
    btnGradient: "bg-gradient-to-r from-rose-500 to-pink-400 hover:from-rose-400 hover:to-pink-300",
    checkoutUrl: "https://whop.com/checkout/plan_UvOtF8rtsxpsp",
    features: ["Dior, Nike, Jordan, LV, Yeezy", "All hype sneakers covered", "$60-200+ resell per pair"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/d240553d-dd79-4089-835f-28666361f081/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/6e74f452-5d9a-45af-b62c-fd45c72fe6ea/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/15204f38-9455-4502-8a8c-abdc9b9dfb5f/image.jpg",
    ],
  },
  {
    id: 7,
    emoji: "🧢",
    name: "BEANIE VENDORS",
    originalPrice: 40,
    salePrice: 8,
    description:
      "Wholesale beanie and winter accessories suppliers with designer and streetwear brands. Beanies are cheap to buy, easy to ship, and have crazy margins in fall/winter. Chrome Hearts, Carhartt, Nike, Supreme, Stüssy, and more. Stock up before the cold hits. Low cost, high profit, zero hassle.",
    tag: "❄️ SEASONAL",
    gradient: "from-sky-500/15 via-blue-500/5 to-transparent",
    borderColor: "border-sky-500/20 hover:border-sky-400/35",
    tagBg: "bg-gradient-to-r from-sky-500 to-blue-400 text-white",
    btnGradient: "bg-gradient-to-r from-sky-500 to-blue-400 hover:from-sky-400 hover:to-blue-300",
    checkoutUrl: "https://whop.com/checkout/plan_CrksSpq1CQ9BB",
    features: ["Designer & streetwear beanies", "Lowest entry cost product", "Huge fall/winter demand"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/8fcf86a4-47c2-4712-ae15-485fccf2bbd6/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/17a7f6ba-0336-411f-b53f-b0d817e2d2fa/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/bbe10bc3-69f2-46f6-8e33-7167bbb183c2/image.jpg",
    ],
  },
  {
    id: 8,
    emoji: "🕶️",
    name: "GLASSES & EYEWEAR VENDORS",
    originalPrice: 60,
    salePrice: 15,
    description:
      "Premium eyewear wholesalers stocking Meta Smart Glasses, Ray-Ban Wayfarers & Aviators, Louis Vuitton sunglasses, Chanel shades, Cartier frames, Gucci eyewear, and more. Eyewear is SLEPT ON — low competition, high perceived value, and people pay top dollar for designer frames. Get them for $8-20 and resell for $50-200+.",
    tag: "💎 PREMIUM",
    gradient: "from-fuchsia-500/15 via-purple-500/5 to-transparent",
    borderColor: "border-fuchsia-500/20 hover:border-fuchsia-400/35",
    tagBg: "bg-gradient-to-r from-fuchsia-500 to-purple-400 text-white",
    btnGradient: "bg-gradient-to-r from-fuchsia-500 to-purple-400 hover:from-fuchsia-400 hover:to-purple-300",
    checkoutUrl: "https://whop.com/checkout/plan_wDmmWQCwH64EC",
    features: ["Meta Glasses, Ray-Ban, LV, Chanel", "Low competition category", "Highest perceived value"],
    images: [
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/fda9fa83-c29e-4b40-aabd-726bd1ea8756/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/36ae1c18-c104-48a5-aabf-1a94aa3b6102/image.jpg",
      "https://assets-2-prod.whop.com/public/uploads/2026-05-14/32d18442-96fa-416c-ba9b-3c8691117337/image.jpg",
    ],
  },
];

// ─── Countdown Timer ──────────────────────────────────────────
function useCountdown() {
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    function calc() {
      const now = new Date();
      const mid = new Date(now);
      mid.setHours(24, 0, 0, 0);
      const d = mid.getTime() - now.getTime();
      return {
        hours: Math.floor(d / 3600000),
        minutes: Math.floor((d % 3600000) / 60000),
        seconds: Math.floor((d % 60000) / 1000),
      };
    }
    setTime(calc());
    const i = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(i);
  }, []);
  return time;
}

// ─── Social Proof ─────────────────────────────────────────────
const ticker = [
  "💰 Tyler K. made $1,847 this week flipping cologne",
  "🛒 Sarah M. just copped the Ultimate Bundle",
  "🔥 Jake R. flipped 12 pairs of Jordans — $2,340 profit",
  "👟 Amanda L. just grabbed Shoe Vendors",
  "💸 Chris D. turned $50 into $890 with clothing flips",
  "🧴 Emily W. just purchased Cologne Vendors",
  "📦 Marcus J. got his U.S. supplier order in 4 days",
  "🏆 Devon P. just went all-in on the Ultimate Bundle",
  "🕶️ Lisa T. sold $600 in glasses this weekend",
  "🎧 Ray M. flipped 20 AirPods in one day — $400 profit",
];

// ─── Image Carousel ───────────────────────────────────────────
function ImageCarousel({ product }: { product: (typeof products)[number] }) {
  const [current, setCurrent] = useState(0);
  const hasImages = product.images.length > 0;
  const totalSlots = hasImages ? product.images.length : 3;

  const prev = () => setCurrent((c) => (c > 0 ? c - 1 : totalSlots - 1));
  const next = () => setCurrent((c) => (c < totalSlots - 1 ? c + 1 : 0));

  return (
    <div className="relative w-full aspect-[16/10] overflow-hidden rounded-t-2xl bg-base-surface">
      {hasImages ? (
        <img
          src={product.images[current]}
          alt={`${product.name} photo ${current + 1}`}
          className="w-full h-full object-cover"
        />
      ) : (
        <div
          className={`w-full h-full bg-gradient-to-br ${product.gradient} flex flex-col items-center justify-center gap-2`}
        >
          <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
            <Camera size={22} className="text-text-dim" />
          </div>
          <span className="text-text-dim text-xs font-medium">
            Photo {current + 1} of {totalSlots}
          </span>
        </div>
      )}

      {totalSlots > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
          >
            <ChevronRight size={14} />
          </button>
        </>
      )}

      {totalSlots > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {Array.from({ length: totalSlots }).map((_, i) => (
            <button
              type="button"
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all cursor-pointer ${
                i === current ? "bg-white w-4" : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Product Card ─────────────────────────────────────────────
function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [open, setOpen] = useState(false);
  const discount = Math.round(
    ((product.originalPrice - product.salePrice) / product.originalPrice) * 100
  );

  return (
    <div
      className={`card-shine group relative rounded-2xl border ${product.borderColor} bg-base-card transition-all duration-300 hover:bg-base-card-hover hover:shadow-lg hover:-translate-y-0.5 overflow-hidden`}
    >
      <ImageCarousel product={product} />

      <div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-b ${product.gradient} pointer-events-none`}
      />

      {product.tag && (
        <div className="absolute top-4 right-4 z-10">
          <span className={`${product.tagBg} text-xs font-bold px-3 py-1.5 rounded-full shadow-md`}>
            {product.tag}
          </span>
        </div>
      )}

      <div className="relative z-[1] p-6">
        <div className="flex items-start gap-3 mb-5">
          {product.emoji === "us-flag" ? (
            <img
              src="https://flagcdn.com/w80/us.png"
              alt="US Flag"
              className="w-8 h-6 shrink-0 mt-1 rounded-sm object-cover"
            />
          ) : (
            <span className="text-3xl shrink-0 mt-0.5">{product.emoji}</span>
          )}
          <h3 className="text-text-main font-bold text-base leading-snug uppercase tracking-wide flex-1">
            {product.name}
          </h3>
        </div>

        <div className="flex items-baseline gap-3 mb-5">
          <span className="text-white text-3xl font-black">${product.salePrice}</span>
          <span className="text-text-dim line-through text-base">${product.originalPrice}</span>
          <span className="text-red text-xs font-bold bg-red/10 px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        </div>

        <div className="flex flex-col gap-2 mb-5">
          {product.features.map((f) => (
            <div key={f} className="flex items-center gap-2.5 text-sm">
              <Check size={13} className="text-green shrink-0" />
              <span className="text-text-sub">{f}</span>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-text-dim text-xs uppercase tracking-wider hover:text-text-sub transition-colors mb-5 cursor-pointer"
        >
          {open ? "Hide" : "More"} details
          {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>

        {open && (
          <p className="text-text-sub text-sm leading-relaxed mb-5 border-t border-base-border pt-4">
            {product.description}
          </p>
        )}

        <a
          href={product.checkoutUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full ${product.btnGradient} text-black font-extrabold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-[0.98] no-underline`}
        >
          <ShoppingCart size={16} />
          BUY NOW — ${product.salePrice}
        </a>
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────
export default function App() {
  const cd = useCountdown();
  const [users, setUsers] = useState(2483);

  useEffect(() => {
    const i = setInterval(
      () => setUsers((p) => p + Math.floor(Math.random() * 7) - 2),
      3000
    );
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-base-bg text-text-main">
      {/* ── Marquee ── */}
      <div className="bg-base-surface/80 border-b border-base-border overflow-hidden py-2.5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...ticker, ...ticker].map((m, i) => (
            <span key={`${m}-${i}`} className="mx-8 text-sm text-text-sub">
              {m}
            </span>
          ))}
        </div>
      </div>

      {/* ── Hero ── */}
      <header className="relative text-center pt-16 pb-14 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-emerald-500/8 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-base-surface border border-base-border-light rounded-full px-4 py-1.5 mb-6">
            <Sparkles size={14} className="text-gold" />
            <span className="text-text-sub text-xs font-medium uppercase tracking-wider">
              Premium Wholesalers & Verified Suppliers
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5">
            LARP{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent">
              RESELLS
            </span>
          </h1>

          <p className="text-text-sub text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Instant access to verified vendors selling designer cologne, sneakers,
            clothing, AirPods, glasses & more at{" "}
            <span className="text-green-bright font-semibold">wholesale prices</span>.
            Start flipping today. 💰
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm mb-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green rounded-full animate-pulse-dot" />
              <span className="text-text-sub">
                <span className="text-green font-bold">{users.toLocaleString()}</span>{" "}
                resellers online
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star size={14} className="text-gold fill-gold" />
              <span className="text-text-sub">
                <span className="text-gold font-bold">4.9/5</span> rating
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-blue" />
              <span className="text-text-sub">Instant delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={14} className="text-purple" />
              <span className="text-text-sub">
                <span className="text-purple font-bold">10K+</span> customers
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-4 bg-base-surface border border-red/20 rounded-2xl px-6 py-4">
            <Clock size={18} className="text-red" />
            <span className="text-text-dim text-sm">Sale ends in</span>
            <div className="flex items-center gap-1.5 font-mono">
              {[cd.hours, cd.minutes, cd.seconds].map((v, i) => (
                <span key={i} className="contents">
                  {i > 0 && <span className="text-red/60 font-bold text-lg">:</span>}
                  <span className="bg-red/10 text-red font-bold w-10 text-center py-1 rounded-lg text-lg animate-countdown inline-block">
                    {String(v).padStart(2, "0")}
                  </span>
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-red/80">
            <TrendingUp size={14} />
            <span className="text-xs font-semibold">
              Prices increase at midnight — lock in now
            </span>
          </div>
        </div>
      </header>

      {/* ── Shipping Banner ── */}
      <div className="max-w-6xl mx-auto px-4 mb-14">
        <div className="bg-gradient-to-r from-emerald-500/10 via-base-surface to-teal-500/10 border border-emerald-500/20 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-5">
          <div className="w-12 h-12 bg-emerald/10 border border-emerald/20 rounded-xl flex items-center justify-center shrink-0">
            <Truck size={24} className="text-emerald" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-text-main font-bold text-base mb-1">
              <img
                src="https://flagcdn.com/w40/us.png"
                alt="US Flag"
                className="inline w-5 h-3.5 rounded-sm mr-1 align-middle"
              />{" "}
              U.S. Based Supplier — 3-6 Day Shipping
            </h3>
            <p className="text-text-sub text-sm">
              Warehouses in{" "}
              <span className="text-emerald font-semibold">California</span>,{" "}
              <span className="text-emerald font-semibold">Chicago</span>,{" "}
              <span className="text-gold font-semibold">Texas (NEW!)</span> +
              manufacturing in China
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0 bg-base-card rounded-lg px-3 py-2 border border-base-border">
            <MapPin size={14} className="text-gold" />
            <span className="text-gold font-bold text-sm">4 Locations</span>
          </div>
        </div>
      </div>

      {/* ── Product Grid ── */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-8">
          <Package size={20} className="text-purple" />
          <h2 className="text-xl font-bold uppercase tracking-wide">
            Vendor Lists & Bundles
          </h2>
          <div className="flex-1 h-px bg-base-border" />
          <span className="text-text-dim text-xs font-medium uppercase tracking-wider">
            {products.length} products
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="mt-16 relative rounded-2xl border border-amber-500/20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-base-surface to-emerald-500/10 pointer-events-none" />
          <div className="relative z-10 text-center p-10 md:p-14">
            <div className="text-4xl mb-4 animate-float">💸🏆💸</div>
            <h3 className="text-3xl md:text-4xl font-black mb-4">
              Get{" "}
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Everything
              </span>{" "}
              for $50
            </h3>
            <p className="text-text-sub mb-8 max-w-lg mx-auto leading-relaxed">
              The Ultimate Bundle unlocks all 7 vendor lists + the full reselling
              blueprint. One purchase. Lifetime access. No upsells.
            </p>
            <a
              href="https://whop.com/checkout/plan_wcWDE3alzeg6V"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-black font-extrabold px-10 py-4 rounded-xl text-lg inline-flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-[0.98] no-underline"
            >
              🏆 GET THE ULTIMATE BUNDLE
              <ArrowRight size={20} />
            </a>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-text-dim text-sm">
              <span className="flex items-center gap-1.5">
                <Shield size={14} /> Secure Payment
              </span>
              <span className="flex items-center gap-1.5">
                <Zap size={14} /> Instant Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <Users size={14} /> 10,000+ Customers
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-base-border py-8 text-center text-text-dim text-sm">
        <p>© 2026 Larp Resells. All rights reserved.</p>
        <p className="mt-1.5 text-xs">Digital products — instant delivery after purchase</p>
      </footer>
    </div>
  );
}
