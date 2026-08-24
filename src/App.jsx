import { useState, useEffect } from 'react'

const t = {
  en: {
    nav: ["Experience", "Events", "DJs", "VIP", "Gallery", "Blog", "Contact"],
    hero_sub: "AKRAM PRESENTS",
    hero_title1: "WHERE NIGHT",
    hero_title2: "BECOMES LEGEND",
    hero_p: "Dubai's most exclusive nocturnal sanctuary. Dark luxury, crimson lights, unforgettable energy.",
    cta_book: "Reserve Your Table",
    cta_explore: "Explore Events",
    age_gate_title: "XO CLUB AKRAM",
    age_gate_p: "You must be 21+ to enter this sanctuary. Please confirm your age.",
    age_gate_yes: "I AM 21+ — ENTER",
    age_gate_no: "Leave",
    experience_label: "— THE SANCTUARY —",
    experience_title: "AN ODE TO THE NIGHT",
    experience_p1: "XO Club Akram is not just a nightclub — it is a ritual. Hidden behind velvet curtains and crimson glow, we curate ecstasy for the chosen few.",
    experience_p2: "Royal Noir architecture, bespoke cocktails, and world-class sound converge to create Dubai's most coveted after-dark experience.",
    stats: ["500+ VIP NIGHTS", "30K+ GUESTS", "50+ WORLD DJS"],
    events_label: "UPCOMING RITUALS",
    events_title: "THIS WEEK AT XO",
    artists_label: "THE CURATORS OF SOUND",
    vip_label: "BECOME PRIVILEGED",
    vip_title: "VIP & BOTTLE SERVICE",
    vip_sub: "Elevate your night. Private lodges, dedicated hosts, premium spirits.",
    menu_label: "LIQUID ART",
    menu_title: "SIGNATURE COCKTAILS",
    booking_title: "SECURE YOUR NIGHT",
    booking_sub: "Limited tables. Maximum exclusivity.",
    form_name: "Full Name",
    form_phone: "Phone / WhatsApp",
    form_guests: "Guests",
    form_date: "Date",
    form_table: "Table Experience",
    form_msg: "Message (optional)",
    form_submit: "REQUEST RESERVATION →",
    form_success: "Request sent! Our concierge will contact you on WhatsApp within minutes.",
    contact_label: "FIND US",
    hours: "Open Thu — Sun • 10PM — 05AM",
    address: "Akram Night Club, Dubai, UAE • 25.187438, 55.268063 • Valet & Private Entrance",
    footer_p: "The night belongs to those who dare. Membership is a privilege, not a right.",
    blog_label: "JOURNAL NOIR",
    blog_title: "INSIDE XO",
    blog_sub: "Stories, nights and secrets from Dubai's most private club.",
    blog_read: "Read Article →",
  },
  ar: {
    nav: ["التجربة", "الفعاليات", "DJs", "VIP", "المعرض", "المدونة", "اتصل بنا"],
    hero_sub: "أكرم يقدم",
    hero_title1: "حيث يصبح",
    hero_title2: "الليل أسطورة",
    hero_p: "الملاذ الليلي الأكثر حصرية في دبي. فخامة داكنة، أضواء قرمزية، طاقة لا تُنسى.",
    cta_book: "احجز طاولتك",
    cta_explore: "استكشف الفعاليات",
    age_gate_title: "XO CLUB AKRAM",
    age_gate_p: "يجب أن يكون عمرك 21+ لدخول هذا الملاذ. يرجى تأكيد عمرك.",
    age_gate_yes: "عمري +21 — دخول",
    age_gate_no: "مغادرة",
    experience_label: "— الملاذ —",
    experience_title: "قصيدة لليل",
    experience_p1: "إكس أو كلوب أكرم ليس مجرد ملهى ليلي — إنه طقس. خلف الستائر المخملية والتوهج القرمزي، نصنع النشوة للنخبة فقط.",
    experience_p2: "هندسة رويال نوار، كوكتيلات فاخرة، وصوت عالمي يجتمعون ليخلقوا التجربة الليلية الأكثر طلباً في دبي.",
    stats: ["+500 ليلة VIP", "+30 ألف ضيف", "+50 دي جي عالمي"],
    events_label: "الطقوس القادمة",
    events_title: "هذا الأسبوع في XO",
    artists_label: "أمناء الصوت",
    vip_label: "كن مميزاً",
    vip_title: "خدمة VIP والقناني",
    vip_sub: "ارتقِ بليلتك. أجنحة خاصة، مضيفون مخصصون، مشروبات فاخرة.",
    menu_label: "فن سائل",
    menu_title: "كوكتيلات مميزة",
    booking_title: "أمّن ليلتك",
    booking_sub: "طاولات محدودة. حصرية قصوى.",
    form_name: "الاسم الكامل",
    form_phone: "الهاتف / واتساب",
    form_guests: "عدد الضيوف",
    form_date: "التاريخ",
    form_table: "نوع الطاولة",
    form_msg: "رسالة (اختياري)",
    form_submit: "← إرسال طلب الحجز",
    form_success: "تم الإرسال! سيتواصل معك فريقنا عبر واتساب خلال دقائق.",
    contact_label: "موقعنا",
    hours: "مفتوح الخميس — الأحد • 10 مساءً — 5 صباحاً",
    address: "نادي أكرم الليلي، دبي، الإمارات • 25.187438, 55.268063 • خدمة صف السيارات ومدخل خاص",
    footer_p: "الليل ملك لمن يجرؤ. العضوية امتياز، وليست حقاً.",
    blog_label: "مجلة نوار",
    blog_title: "داخل XO",
    blog_sub: "قصص وليالي وأسرار من أكثر نوادي دبي خصوصية.",
    blog_read: "← اقرأ المقال",
  }
}

const events = [
  { date: "FRI 29 AUG", title: "CRIMSON RITUAL", dj: "DJ AKRAM B2B MOONLIGHT", genre: "Afro House • Melodic", price: "From 300 AED", img: `${import.meta.env.BASE_URL}xo-dubai-wall.png`, featured: true },
  { date: "SAT 30 AUG", title: "VELOUR NOIR", dj: "LUNA & SOFIANE", genre: "Deep House • Vocals", price: "From 250 AED", img: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80" },
  { date: "THU 04 SEP", title: "GOLDEN HOUR AFTER DARK", dj: "KARIM TULIP", genre: "Disco • Nu Soul", price: "Ladies Free till 11PM", img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80" },
  { date: "FRI 05 SEP", title: "X O N Y X", dj: "SECRET GUEST (BERLIN)", genre: "Techno • Hypnotic", price: "Limited 400 AED", img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80" },
]

const djs = [
  { name: "DJ SOOKA", role: "Morocco", img: `${import.meta.env.BASE_URL}xoclubakramdjsoka.jpg` },
  { name: "DJ DAHER", role: "Iraq", img: `${import.meta.env.BASE_URL}xoclubakramdjdaher.jpg` },
  { name: "DJ EVAN", role: "Resident", img: `${import.meta.env.BASE_URL}xoclubakramdjevan.jpg` },
  { name: "DJ AL3ESSA", role: "Kuwait", img: `${import.meta.env.BASE_URL}xoclubakramdjal3essa.jpg` },
]

const vipTiers = [
  { name: "LE ROUGE", arabic: "الأحمر", price: "2,500 AED", perks: ["Table for 4", "1 Premium Bottle", "Softs & Mixers", "Host Service"], accent: false },
  { name: "LE NOIR", arabic: "الأسود", price: "5,000 AED", perks: ["Lodge for 6-8", "2 Premium Bottles", "Priority Entrance", "Personal Host + Security"], accent: true },
  { name: "LE XO", arabic: "إكس أو", price: "10,000 AED+", perks: ["Private Mezzanine 10-12", "Champagne & Spirits", "Backstage Access", "Valet & Private Entry"], accent: false },
]

const cocktails = [
  { name: "XO Crimson Kiss", desc: "Bourbon, raspberry, smoked rose, gold dust", price: "140 AED" },
  { name: "Noir Velvet", desc: "Black gin, charcoal, blackberry, velvet foam", price: "160 AED" },
  { name: "Akram's Secret", desc: "Moroccan saffron vodka, fig, amber", price: "150 AED" },
  { name: "Burgundy Smoke", desc: "Mezcal, cherry, burgundy wine reduction", price: "170 AED" },
]

export default function App() {
  const [lang, setLang] = useState('en')
  const [agePassed, setAgePassed] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', guests: '4', date: '', table: 'LE ROUGE', msg: '' })
  const tr = t[lang]
  const isAr = lang === 'ar'

  useEffect(() => {
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [isAr, lang])

  return (
    <div className="min-h-screen bg-[#080608] text-[#E8E0D8] selection:bg-[#C41E2F]/40">
      {/* AGE GATE */}
      {!agePassed && (
        <div className="fixed inset-0 z-[100] bg-[#050305]/95 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="absolute inset-0 opacity-20" style={{ background: `radial-gradient(ellipse at center, #C41E2F 0%, transparent 70%)` }} />
          <div className="relative w-full max-w-[560px] glass rounded-[24px] p-8 md:p-12 text-center overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96A] to-transparent opacity-60" />
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="XO Club Akram Logo" className="w-44 h-44 md:w-52 md:h-52 mx-auto object-contain mb-6 drop-shadow-[0_0_22px_rgba(201,169,106,0.45)]" />
            <h2 className="font-['Cinzel'] text-3xl tracking-[0.15em] text-[#F5E6C8]">{tr.age_gate_title}</h2>
            <p className="mt-3 text-sm text-[#9A8B86] leading-relaxed">{tr.age_gate_p}</p>
            <p className="mt-6 text-[11px] tracking-[0.3em] text-[#C9A96A]">DUBAI • EST. 2024</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <button onClick={() => setAgePassed(true)} className="flex-1 py-4 bg-[#C41E2F] hover:bg-[#8B0A1A] text-white text-sm tracking-[0.2em] font-medium rounded-full transition"> {tr.age_gate_yes} </button>
              <button onClick={() => window.location.href = 'https://google.com'} className="flex-1 py-4 border border-[#C9A96A]/20 text-[#9A8B86] rounded-full text-sm hover:border-[#C9A96A]/40 transition">{tr.age_gate_no}</button>
            </div>
            <p className="mt-6 text-[10px] text-[#6B5E5A]">By entering you agree to our house rules. Drink responsibly. Strict door policy.</p>
          </div>
        </div>
      )}

      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-white/[0.06] bg-[#080608]/70 backdrop-blur-2xl">
        <div className="max-w-[1280px] mx-auto px-6 h-[72px] flex items-center justify-between gap-6">
          <a href="#" className="flex items-center gap-3 shrink-0">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="XO Club Akram" className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_10px_rgba(201,169,106,0.3)]" />
            <div className="leading-none hidden sm:block">
              <div className="font-['Cinzel'] text-[15px] tracking-[0.25em] text-[#F5E6C8]">XO CLUB</div>
              <div className="text-[10px] tracking-[0.4em] text-[#C9A96A] font-light">AKRAM</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] text-[#9A8B86]">
            {tr.nav.map((n, i) => (
              <a key={n} href={`#sec-${i}`} className="hover:text-[#F5E6C8] transition">{n}</a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-full border border-white/10 p-1 bg-white/[0.03]">
              <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-[11px] tracking-widest transition ${lang === 'en' ? 'bg-[#C41E2F] text-white' : 'text-[#9A8B86]'}`}>EN</button>
              <button onClick={() => setLang('ar')} className={`px-4 py-1.5 rounded-full text-[11px] tracking-widest transition ${lang === 'ar' ? 'bg-[#C41E2F] text-white' : 'text-[#9A8B86]'}`}>AR</button>
            </div>
            <a href="tel:0507773051" className="hidden md:inline-flex items-center gap-2 px-4 py-3 border border-[#C9A96A]/20 text-[#C9A96A] text-[11px] tracking-[0.2em] rounded-full hover:bg-[#C9A96A] hover:text-black transition">✆ 0507773051</a>
            <a href="#booking" className="hidden md:inline-flex px-6 py-3 bg-[#C9A96A] text-[#080608] text-[11px] tracking-[0.2em] font-semibold rounded-full hover:bg-[#F5E6C8] transition">BOOK VIP</a>
            <button onClick={() => setMobileNav(!mobileNav)} className="lg:hidden w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">☰</button>
          </div>
        </div>
        {mobileNav && (
          <div className="lg:hidden border-t border-white/10 bg-[#0f0708] px-6 py-6 space-y-4 text-sm tracking-widest">
            {tr.nav.map((n, i) => <a key={n} href={`#sec-${i}`} onClick={() => setMobileNav(false)} className="block text-[#9A8B86]">{n}</a>)}
            <div className="flex gap-2 pt-2">
              <button onClick={() => setLang('en')} className={`flex-1 py-2 rounded-full border ${lang === 'en' ? 'bg-[#C41E2F] border-[#C41E2F] text-white' : 'border-white/10 text-[#9A8B86]'}`}>English</button>
              <button onClick={() => setLang('ar')} className={`flex-1 py-2 rounded-full border ${lang === 'ar' ? 'bg-[#C41E2F] border-[#C41E2F] text-white' : 'border-white/10 text-[#9A8B86]'}`}>العربية</button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden pt-[72px]">
        <div className="absolute inset-0">
          <img src={`${import.meta.env.BASE_URL}xo-dubai-wall.png`} alt="XO Club Dubai Wall - Where Nights Become Legends" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080608] via-[#080608]/70 to-[#080608]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080608]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `repeating-linear-gradient(90deg, #C9A96A 0 1px, transparent 1px 120px)` }} />
        </div>

        <div className="relative max-w-[1280px] mx-auto px-6 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-16">
          <div>
            <div className="inline-flex items-center gap-4 border border-[#C9A96A]/30 rounded-full px-7 md:px-10 py-3.5 md:py-4 bg-black/50 backdrop-blur shadow-[0_0_32px_rgba(201,169,106,0.15)]">
              <span className="w-3.5 h-3.5 rounded-full bg-[#C41E2F] animate-pulse shadow-[0_0_12px_#C41E2F]" />
              <span className="text-[13px] md:text-[17px] lg:text-[19px] tracking-[0.38em] font-semibold text-[#C9A96A]">{tr.hero_sub} • DUBAI</span>
            </div>
            <h1 className="mt-8 font-['Cinzel'] leading-[0.85] tracking-[-0.02em]">
              <span className="block text-5xl md:text-7xl lg:text-[86px] font-normal text-white">{tr.hero_title1}</span>
              <span className="block text-5xl md:text-7xl lg:text-[86px] font-normal shimmer italic">{tr.hero_title2}</span>
            </h1>
            <p className="mt-6 max-w-[520px] text-[#9A8B86] leading-relaxed text-[15px] md:text-[17px] font-light">{tr.hero_p}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#booking" className="px-10 py-4 bg-[#C41E2F] hover:bg-[#9A0F1F] text-white rounded-full text-[12px] tracking-[0.2em] font-semibold transition shadow-[0_10px_40px_rgba(196,30,47,0.4)]">{tr.cta_book}</a>
              <a href="#sec-1" className="px-10 py-4 rounded-full border border-white/15 text-white text-[12px] tracking-[0.2em] hover:bg-white hover:text-black transition">{tr.cta_explore}</a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs tracking-widest text-[#6B5E5A] border-t border-white/10 pt-8 max-w-[520px]">
              <span>★ 4.9 GOOGLE</span>
              <span>•</span>
              <span>10K+ INSTAGRAM</span>
              <span>•</span>
              <span>DOOR SELECTION</span>
            </div>
          </div>

          {/* RIGHT GLASS CARD */}
          <div className="relative lg:ml-auto w-full max-w-[460px]">
            <div className="absolute -inset-4 bg-[#C41E2F]/20 blur-[60px] rounded-full" />
            <div className="relative glass rounded-[32px] p-6 md:p-8 overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#C9A96A]/50 to-transparent" />
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] tracking-[0.3em] text-[#C9A96A]">TONIGHT • FRI 29 AUG</span>
                <span className="px-3 py-1 rounded-full bg-[#C41E2F] text-white text-[10px] tracking-widest">LIVE</span>
              </div>
              <h3 className="mt-2 font-['Cinzel'] text-2xl tracking-widest text-white">CRIMSON RITUAL</h3>
              <p className="text-sm text-[#9A8B86] tracking-widest mt-1">DJ AKRAM B2B MOONLIGHT • AFRO HOUSE</p>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 py-4">
                  <div className="text-[10px] tracking-widest text-[#9A8B86]">DOORS</div>
                  <div className="font-semibold text-white">22:00</div>
                </div>
                <div className="rounded-2xl bg-white/[0.04] border border-white/10 py-4">
                  <div className="text-[10px] tracking-widest text-[#9A8B86]">DRESS</div>
                  <div className="font-semibold text-white">CHIC</div>
                </div>
                <div className="rounded-2xl bg-[#C41E2F] py-4">
                  <div className="text-[10px] tracking-widest text-white/80">TICKETS</div>
                  <div className="font-semibold text-white">300 AED</div>
                </div>
              </div>
              <a href="#booking" className="mt-6 flex items-center justify-center gap-2 w-full py-4 bg-[#C9A96A] text-black rounded-full text-xs tracking-[0.2em] font-bold hover:bg-[#F5E6C8] transition">RESERVE — طاولة</a>
            </div>
          </div>
        </div>

        {/* bottom marquee */}
        <div className="absolute bottom-0 inset-x-0 border-y border-[#C9A96A]/15 bg-black/40 backdrop-blur overflow-hidden py-3">
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap gap-12 text-[11px] tracking-[0.4em] text-[#C9A96A]/70">
            <span>XO CLUB AKRAM • DUBAI • ROYAL NOIR • VELVET & CRIMSON • SELECTIVE DOOR • MEMBERS ONLY • </span>
            <span>XO CLUB AKRAM • DUBAI • ROYAL NOIR • VELVET & CRIMSON • SELECTIVE DOOR • MEMBERS ONLY • </span>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="sec-0" className="relative py-20 md:py-28 bg-[#0a0607]">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src={`${import.meta.env.BASE_URL}xoclubakramgallry2.jpg`} alt="XO Club Akram Interior" className="rounded-[24px] h-[420px] object-cover w-full border border-[#C9A96A]/10" />
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80" alt="Bottle" className="rounded-[24px] h-[200px] object-cover w-full" />
                <div className="rounded-[24px] bg-[#C41E2F] p-6 text-white flex flex-col items-start">
                  <img src={`${import.meta.env.BASE_URL}logo.png`} alt="XO Logo" className="w-16 h-16 rounded-full object-cover border-2 border-white/20" />
                  <div className="text-xs tracking-[0.3em] opacity-80 mt-3">EST. 2024 • DUBAI</div>
                  <div className="mt-3 text-sm opacity-90 leading-relaxed">Where every night is curated as a private ceremony.</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 glass rounded-full px-6 py-3">
              <span className="w-10 h-10 rounded-full bg-[#C9A96A] flex items-center justify-center text-black">♦</span>
              <span className="text-xs tracking-widest">MEMBERS ONLY</span>
            </div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.4em] text-[#C9A96A]">{tr.experience_label}</div>
            <h2 className="mt-4 font-['Cinzel'] text-4xl md:text-5xl leading-none text-[#F5E6C8]">{tr.experience_title}</h2>
            <div className="mt-4 w-16 h-[2px] bg-[#C41E2F]" />
            <p className="mt-6 text-[#9A8B86] leading-relaxed">{tr.experience_p1}</p>
            <p className="mt-4 text-[#9A8B86] leading-relaxed">{tr.experience_p2}</p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {tr.stats.map(s => (
                <div key={s} className="text-center">
                  <div className="font-['Cinzel'] text-[#C9A96A] text-sm tracking-widest">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-8 text-xs tracking-widest text-[#6B5E5A]">
              <span>✦ SOUND BY L-ACOUSTICS</span>
              <span>✦ LIGHT BY MADRIX</span>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="sec-1" className="py-20 bg-[#080608] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.4em] text-[#C41E2F]">{tr.events_label}</div>
              <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-white mt-3">{tr.events_title}</h2>
            </div>
            <a href="#booking" className="text-[11px] tracking-[0.3em] text-[#C9A96A] border-b border-[#C9A96A]/40 pb-1">VIEW FULL CALENDAR →</a>
          </div>

          <div className="mt-10 grid md:grid-cols-12 gap-6">
            {/* featured */}
            <div className="md:col-span-7 relative rounded-[32px] overflow-hidden group min-h-[520px] flex flex-col justify-end p-8">
              <img src={events[0].img} alt={events[0].title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="relative">
                <span className="inline-flex px-3 py-1 rounded-full bg-[#C41E2F] text-white text-[10px] tracking-widest">{events[0].date} • FEATURED</span>
                <h3 className="mt-4 font-['Cinzel'] text-3xl text-white tracking-widest">{events[0].title}</h3>
                <p className="text-[#C9A96A] tracking-widest text-xs mt-2">{events[0].dj} • {events[0].genre}</p>
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-white text-sm">{events[0].price}</span>
                  <a href="#booking" className="ml-auto px-6 py-3 bg-white text-black rounded-full text-[11px] tracking-widest font-bold">BOOK NOW</a>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 grid gap-6">
              {events.slice(1).map(e => (
                <div key={e.title} className="relative rounded-[24px] overflow-hidden flex gap-0 bg-[#120a0c] border border-white/5 group">
                  <img src={e.img} alt={e.title} className="w-[40%] object-cover group-hover:scale-105 transition duration-500" />
                  <div className="p-5 flex flex-col justify-center">
                    <div className="text-[10px] tracking-widest text-[#C41E2F]">{e.date}</div>
                    <div className="font-['Cinzel'] text-white tracking-widest mt-1">{e.title}</div>
                    <div className="text-xs text-[#9A8B86] mt-1">{e.dj}</div>
                    <div className="text-xs text-[#C9A96A] mt-3">{e.price} →</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section id="sec-2" className="py-20 bg-[#0f0708] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] tracking-[0.4em] text-[#C9A96A]">{tr.artists_label}</div>
            <h2 className="font-['Cinzel'] text-4xl text-white mt-3">RESIDENT CURATORS</h2>
            <p className="text-[#6B5E5A] text-sm mt-3 tracking-widest">Casablanca's finest • International selectors</p>
          </div>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {djs.map(dj => (
              <div key={dj.name} className="group">
                <div className="relative rounded-[28px] overflow-hidden aspect-[3/4] border border-white/5">
                  <img src={dj.img} alt={dj.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700" onError={(e)=>{e.currentTarget.onerror=null; e.currentTarget.src='https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80'}} />
                  <div className="absolute bottom-0 inset-x-0 p-6">
                    <div className="font-['Cinzel'] text-white tracking-widest">{dj.name}</div>
                    <div className="text-[11px] tracking-widest text-[#C9A96A]">{dj.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIP */}
      <section id="sec-3" className="py-20 bg-[#080608]">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center">
            <div className="text-[11px] tracking-[0.4em] text-[#C41E2F]">{tr.vip_label}</div>
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-white mt-3">{tr.vip_title}</h2>
            <p className="text-[#9A8B86] mt-3">{tr.vip_sub}</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {vipTiers.map(tier => (
              <div key={tier.name} className={`rounded-[32px] p-8 border relative overflow-hidden ${tier.accent ? 'bg-[#C41E2F] border-[#C41E2F] text-white' : 'bg-[#120a0c] border-[#C9A96A]/15 text-white'}`}>
                {tier.accent && <div className="absolute top-6 right-6 px-3 py-1 bg-white text-[#C41E2F] rounded-full text-[10px] tracking-widest font-bold">MOST POPULAR</div>}
                <div className="font-['Cinzel'] text-xl tracking-[0.2em]">{tier.name}</div>
                {isAr && <div className="text-sm text-current opacity-60 mt-1">{tier.arabic}</div>}
                <div className={`mt-4 text-3xl font-['Cinzel'] ${tier.accent ? 'text-white' : 'text-[#C9A96A]'}`}>{tier.price}</div>
                <div className={`mt-1 text-[11px] tracking-widest ${tier.accent ? 'text-white/70' : 'text-[#6B5E5A]'}`}>PER NIGHT • MIN SPEND</div>
                <ul className="mt-8 space-y-3 text-sm">
                  {tier.perks.map(p => (
                    <li key={p} className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${tier.accent ? 'bg-white text-[#C41E2F]' : 'bg-[#C9A96A]/20 text-[#C9A96A]'}`}>✓</span>
                      <span className={tier.accent ? 'text-white' : 'text-[#9A8B86]'}>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href="#booking" className={`mt-8 flex justify-center py-4 rounded-full text-[11px] tracking-[0.2em] font-bold transition ${tier.accent ? 'bg-white text-[#C41E2F] hover:bg-[#F5E6C8]' : 'bg-[#C9A96A] text-black hover:bg-white'}`}>SELECT {tier.name}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU + GALLERY */}
      <section id="sec-4" className="py-20 bg-[#0a0607] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-16">
          <div>
            <div className="text-[11px] tracking-[0.4em] text-[#C9A96A]">{tr.menu_label}</div>
            <h2 className="font-['Cinzel'] text-4xl text-white mt-3">{tr.menu_title}</h2>
            <div className="mt-8 divide-y divide-white/5 border-y border-white/5">
              {cocktails.map(c => (
                <div key={c.name} className="flex justify-between gap-6 py-5">
                  <div>
                    <div className="font-['Cinzel'] tracking-widest text-white text-sm">{c.name}</div>
                    <div className="text-xs text-[#6B5E5A] mt-1">{c.desc}</div>
                  </div>
                  <div className="text-[#C9A96A] font-['Cinzel'] shrink-0">{c.price}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-[11px] tracking-widest text-[#6B5E5A]">+ FULL CHAMPAGNE & SPIRITS LIST AT TABLE • BOTTLE SERVICE FROM 1,200 AED</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=600&q=80" alt="Bar" className="rounded-[24px] h-[360px] object-cover w-full" />
            <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80" alt="Cocktail" className="rounded-[24px] h-[360px] object-cover w-full" />
            <img src={`${import.meta.env.BASE_URL}xo-dubai-wall.png`} alt="XO Club Dubai Wall - Where Nights Become Legends" className="rounded-[24px] h-[220px] object-cover w-full col-span-2 border border-[#C9A96A]/10" onError={(e)=>{e.currentTarget.src='https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80'}} />
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="py-20 bg-[#080608] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(ellipse at 50% 0%, #C41E2F 0%, transparent 50%)` }} />
        <div className="relative max-w-[1280px] mx-auto px-6 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 text-[#C9A96A] text-[11px] tracking-[0.4em]">✦ {tr.booking_title}</div>
            <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-white mt-4 leading-none">{tr.booking_title}</h2>
            <p className="text-[#9A8B86] mt-4">{tr.booking_sub}</p>
            <div className="mt-8 space-y-4 text-sm">
              <div className="flex items-center gap-4 glass rounded-2xl px-6 py-4">
                <span className="w-10 h-10 rounded-full bg-[#C41E2F] flex items-center justify-center text-white">✆</span>
                <div className="flex-1">
                  <div className="text-white tracking-widest text-xs">CONCIERGE WHATSAPP</div>
                  <a href="tel:0507773051" className="text-[#C9A96A] hover:text-white transition font-semibold text-[15px]">0507773051</a>
                </div>
                <a href="https://wa.me/212507773051" target="_blank" className="px-4 py-2 bg-[#25D366] text-white rounded-full text-[11px] tracking-widest font-bold hover:bg-[#128C7E] transition">WHATSAPP</a>
              </div>
              <div className="flex items-center gap-4 glass rounded-2xl px-6 py-4">
                <span className="w-10 h-10 rounded-full bg-[#120a0c] border border-[#C9A96A]/20 flex items-center justify-center text-[#C9A96A]">✉</span>
                <div>
                  <div className="text-white tracking-widest text-xs">EMAIL</div>
                  <a href="mailto:akramassaad-a@gmail.com" className="text-[#C9A96A] hover:text-white transition text-sm">akramassaad-a@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4 glass rounded-2xl px-6 py-4">
                <span className="w-10 h-10 rounded-full bg-[#120a0c] border border-[#C9A96A]/20 flex items-center justify-center text-[#C9A96A]">◷</span>
                <div>
                  <div className="text-white tracking-widest text-xs">RESPONSE TIME</div>
                  <div className="text-[#9A8B86]">~ 5 Minutes • 10AM — 10PM</div>
                </div>
              </div>
            </div>
            <p className="mt-8 text-[11px] leading-relaxed text-[#6B5E5A]">By reserving you accept selective door policy. Elegant dress required. Management reserves right to refuse entry. No refunds for no-shows.</p>
          </div>

          <form onSubmit={e => { e.preventDefault(); setFormSent(true); setTimeout(() => setFormSent(false), 5000) }} className="glass rounded-[32px] p-6 md:p-10 space-y-5 bg-[#120a0c]/60">
            {formSent && <div className="rounded-2xl bg-[#0a5d2a] text-white px-6 py-4 text-sm text-center">✓ {tr.form_success}</div>}
            <div className="grid md:grid-cols-2 gap-5">
              <label className="space-y-2">
                <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_name} *</span>
                <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Achraf El Amrani" className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-[#6B5E5A] focus:border-[#C9A96A]/40 focus:outline-none" />
              </label>
              <label className="space-y-2">
                <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_phone} *</span>
                <input required value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+212 6..." className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-[#6B5E5A] focus:border-[#C9A96A]/40 focus:outline-none" />
              </label>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <label className="space-y-2">
                <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_guests}</span>
                <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })} className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white focus:border-[#C9A96A]/40 focus:outline-none">
                  <option className="bg-black">2 Guests</option>
                  <option className="bg-black">4 Guests</option>
                  <option className="bg-black">6 Guests</option>
                  <option className="bg-black">8+ Guests</option>
                </select>
              </label>
              <label className="space-y-2">
                <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_date}</span>
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} className="w-full px-5 py-4 rounded-full bg-white/[0.04] border border-white/10 text-white focus:border-[#C9A96A]/40 focus:outline-none" />
              </label>
            </div>
            <label className="space-y-2 block">
              <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_table}</span>
              <div className="grid grid-cols-3 gap-3">
                {vipTiers.map(v => (
                  <button key={v.name} type="button" onClick={() => setForm({ ...form, table: v.name })} className={`py-3 rounded-full border text-xs tracking-widest font-bold transition ${form.table === v.name ? 'bg-[#C41E2F] border-[#C41E2F] text-white' : 'bg-white/[0.03] border-white/10 text-[#9A8B86] hover:border-[#C9A96A]/30'}`}>{v.name}</button>
                ))}
              </div>
            </label>
            <label className="space-y-2 block">
              <span className="text-[11px] tracking-[0.2em] text-[#9A8B86]">{tr.form_msg}</span>
              <textarea value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} rows={3} placeholder={isAr ? "مناسبة خاصة، طلبات..." : "Birthday, special requests..."} className="w-full px-5 py-4 rounded-[24px] bg-white/[0.04] border border-white/10 text-white placeholder:text-[#6B5E5A] focus:border-[#C9A96A]/40 focus:outline-none resize-none" />
            </label>
            <button type="submit" className="w-full py-5 bg-[#C9A96A] hover:bg-[#F5E6C8] text-black rounded-full font-bold tracking-[0.2em] text-xs transition">{tr.form_submit}</button>
            <div className="text-center text-[10px] tracking-widest text-[#6B5E5A]">OR CALL CONCIERGE • الرد خلال 5 دقائق</div>
          </form>
        </div>
      </section>

      {/* BLOG */}
      <section id="sec-5" className="py-20 bg-[#0f0708] border-y border-white/5">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] tracking-[0.4em] text-[#C9A96A]">{tr.blog_label}</div>
              <h2 className="font-['Cinzel'] text-4xl md:text-5xl text-white mt-3">{tr.blog_title}</h2>
              <p className="text-[#9A8B86] mt-3 max-w-[520px]">{tr.blog_sub}</p>
            </div>
            <a href="#" className="hidden md:inline-flex px-6 py-3 rounded-full border border-[#C9A96A]/20 text-[#C9A96A] text-[11px] tracking-[0.3em] hover:bg-[#C9A96A] hover:text-black transition">VIEW ALL ARTICLES →</a>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              { tag: "NIGHTS", date: "15 AUG 2026", title: "Inside Crimson Ritual: How XO Reinvented Afro House in Casablanca", img: `${import.meta.env.BASE_URL}xo-dubai-wall.png`, excerpt: "Behind the velvet curtain — the story of our most legendary night." },
              { tag: "MIXOLOGY", date: "08 AUG 2026", title: "The Alchemy of XO: Akram's Secret Saffron Cocktail", img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&q=80", excerpt: "Moroccan saffron, fig and amber — the creation of a signature." },
              { tag: "CULTURE", date: "01 AUG 2026", title: "Dress Code Decoded: The Royal Noir Aesthetic", img: "https://images.unsplash.com/photo-1516450360452-9312abbf6f7e?w=600&q=80", excerpt: "Velvet, black and crimson — what to wear to be remembered." },
            ].map(post => (
              <article key={post.title} className="group bg-[#120a0c] border border-white/5 rounded-[32px] overflow-hidden hover:border-[#C9A96A]/20 transition">
                <div className="relative h-[220px] overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#C41E2F] text-white text-[10px] tracking-widest">{post.tag}</span>
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur text-white text-[10px] tracking-widest border border-white/10">{post.date}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-['Cinzel'] text-white leading-tight tracking-wide group-hover:text-[#C9A96A] transition">{post.title}</h3>
                  <p className="text-sm text-[#6B5E5A] mt-3 leading-relaxed">{post.excerpt}</p>
                  <a href="#" className="inline-flex items-center gap-2 mt-6 text-[11px] tracking-[0.2em] text-[#C9A96A] hover:text-white transition">{tr.blog_read}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="sec-6" className="py-16 bg-[#0f0708] border-t border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-[11px] tracking-[0.4em] text-[#C9A96A]">{tr.contact_label}</div>
            <h2 className="font-['Cinzel'] text-3xl text-white mt-3 tracking-widest">DUBAI • AKRAM NIGHT CLUB</h2>
            <p className="text-[#9A8B86] mt-4 leading-relaxed">{tr.address}</p>
            <p className="text-[#C9A96A] mt-2 text-sm tracking-widest">{tr.hours}</p>
            <a href="tel:0507773051" className="mt-4 inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-[#C9A96A]/20">
              <span className="w-8 h-8 rounded-full bg-[#C41E2F] flex items-center justify-center text-white text-xs">✆</span>
              <span className="text-[#F5E6C8] tracking-[0.2em] font-semibold">0507773051</span>
              <span className="text-[#9A8B86] text-xs hidden sm:inline">• Tap to call / WhatsApp</span>
            </a>
            <a href="mailto:akramassaad-a@gmail.com" className="mt-3 inline-flex items-center gap-3 glass rounded-full px-6 py-3 border border-[#C9A96A]/20">
              <span className="w-8 h-8 rounded-full bg-[#120a0c] border border-[#C9A96A]/20 flex items-center justify-center text-[#C9A96A] text-xs">✉</span>
              <span className="text-[#F5E6C8] tracking-wide font-medium text-sm">akramassaad-a@gmail.com</span>
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="https://www.google.com/maps/place/Akram+night+club+dubai/@25.187438,55.268063,16z/data=!4m10!1m2!2m1!1sxo!3m6!1s0x3e5f6982774faedf:0x9d6bd21ddbae3456!8m2!3d25.187438!4d55.268063!15sCgJ4b1oEIgJ4b5IBCm5pZ2h0X2NsdWKaAURDaTlEUVVsUlFVTnZaRU5vZEhsalJqbHZUMnhzUTJOdGJIcFpiVkpHVG5wWk0xTkZSa1ZqVjFvMFRsZFpkRnB0WXhBQuABAPoBBAgAEDs!16s%2Fg%2F11l73vfdsr" target="_blank" className="px-6 py-3 rounded-full bg-white text-black text-xs tracking-widest font-bold">OPEN IN MAPS →</a>
              <a href="https://www.instagram.com/akram_xo_club_khaliji?igsh=ZHFmZW0ybDl4dTM4&utm_source=qr" target="_blank" className="px-6 py-3 rounded-full border border-white/15 text-white text-xs tracking-widest">INSTAGRAM @akram_xo_club_khaliji</a>
              <a href="https://snapchat.com/t/FrdhD3GW" target="_blank" className="px-6 py-3 rounded-full bg-[#FFFC00] text-black text-xs tracking-widest font-bold">SNAPCHAT →</a>
              <a href="https://www.tiktok.com/@akramxoclubdubai?_r=1&_t=ZS-982B7cqZI4g" target="_blank" className="px-6 py-3 rounded-full bg-black border border-white/15 text-white text-xs tracking-widest">TIKTOK →</a>
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden border border-white/10 h-[360px] bg-[#120a0c] relative">
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.457!2d55.268063!3d25.187438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6982774faedf:0x9d6bd21ddbae3456!2sAkram%20night%20club%20dubai!5e0!3m2!1sen!2sae!4v1700000000000" className="w-full h-full border-0 grayscale invert-[0.9] opacity-60" loading="lazy" />
            <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
              <div>
                <div className="font-['Cinzel'] text-white tracking-widest text-sm">XO CLUB AKRAM</div>
                <div className="text-xs text-[#9A8B86]">Valet parking • Private chauffeur on request</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#C41E2F] flex items-center justify-center text-white">♛</div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#050305] py-12">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <img src={`${import.meta.env.BASE_URL}logo.png`} alt="XO Club Akram" className="w-10 h-10 rounded-full object-cover border border-[#C9A96A]/30" />
                <span className="font-['Cinzel'] tracking-[0.25em] text-[#F5E6C8] text-sm">XO CLUB AKRAM</span>
              </div>
              <p className="mt-4 max-w-[360px] text-xs leading-relaxed text-[#6B5E5A]">{tr.footer_p} <br />Akram Night Club, Dubai • Dress to impress • 21+ • Drink responsibly.</p>
              <a href="tel:0507773051" className="mt-4 inline-flex items-center gap-2 text-[#C9A96A] text-sm tracking-widest hover:text-white transition">✆ 0507773051</a>
              <a href="mailto:akramassaad-a@gmail.com" className="mt-2 block text-[#C9A96A] text-sm hover:text-white transition">✉ akramassaad-a@gmail.com</a>
            </div>
            <div className="flex gap-12 text-xs">
              <div>
                <div className="tracking-[0.3em] text-[#C9A96A] mb-4">FOLLOW</div>
                <div className="space-y-2 text-[#9A8B86]">
                  <a href="https://www.instagram.com/akram_xo_club_khaliji?igsh=ZHFmZW0ybDl4dTM4&utm_source=qr" target="_blank" className="block hover:text-white">Instagram →</a>
                  <a href="https://www.tiktok.com/@akramxoclubdubai?_r=1&_t=ZS-982B7cqZI4g" target="_blank" className="block hover:text-white">TikTok →</a>
                  <a href="https://snapchat.com/t/FrdhD3GW" target="_blank" className="block hover:text-white">Snapchat →</a>
                </div>
              </div>
              <div>
                <div className="tracking-[0.3em] text-[#C9A96A] mb-4">LEGAL</div>
                <div className="space-y-2 text-[#9A8B86]">
                  <a href="#" className="block hover:text-white">House Rules</a>
                  <a href="#" className="block hover:text-white">Privacy</a>
                  <a href="#" className="block hover:text-white">Contact</a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[11px] tracking-widest text-[#3E3532]">
            <span>© 2026 XO CLUB AKRAM — DUBAI. ALL RIGHTS RESERVED.</span>
            <span>DESIGNED FOR THE NIGHT — صُمم لليل</span>
          </div>
        </div>
      </footer>

      <style>{`@keyframes marquee { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  )
}
