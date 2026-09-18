import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ChevronDown, ArrowRight, Mail } from 'lucide-react';

const BASE_URL = import.meta.env.BASE_URL;
const HERO_VIDEO_SRC = `${BASE_URL}videos/hero-supavut-insight-primary-20260324-v1.mp4`;

const CursorFocusRing = () => {
  const ringRef = useRef(null);

  useEffect(() => {
    const ringEl = ringRef.current;
    if (!ringEl || !window.matchMedia('(pointer: fine)').matches) return undefined;

    let rafId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const renderRing = () => {
      rafId = 0;

      ringEl.style.left = `${pointerX}px`;
      ringEl.style.top = `${pointerY}px`;
      ringEl.style.opacity = '1';
    };

    const queueRender = ({ clientX, clientY }) => {
      pointerX = clientX;
      pointerY = clientY;

      if (!rafId) {
        rafId = window.requestAnimationFrame(renderRing);
      }
    };

    const hideRing = () => {
      ringEl.style.opacity = '0';
    };

    const activateRing = () => {
      ringEl.classList.add('cursor-focus-ring--active');
    };

    const deactivateRing = () => {
      ringEl.classList.remove('cursor-focus-ring--active');
    };

    window.addEventListener('pointermove', queueRender, { passive: true });
    window.addEventListener('pointerdown', activateRing);
    window.addEventListener('pointerup', deactivateRing);
    window.addEventListener('pointercancel', deactivateRing);
    window.addEventListener('pointerleave', hideRing);
    window.addEventListener('blur', hideRing);

    return () => {
      window.removeEventListener('pointermove', queueRender);
      window.removeEventListener('pointerdown', activateRing);
      window.removeEventListener('pointerup', deactivateRing);
      window.removeEventListener('pointercancel', deactivateRing);
      window.removeEventListener('pointerleave', hideRing);
      window.removeEventListener('blur', hideRing);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return <div ref={ringRef} className="cursor-focus-ring" aria-hidden="true" />;
};

// --- Translation Dictionary ---
const dict = {
  TH: {
    navPortal: 'ศูนย์รวม',
    navContact: 'ติดต่อเรา',
    heroTitle: 'Supavut Insight',
    heroSubtitle: 'ศูนย์รวมแอปพลิเคชันและระบบจัดการทรัพยากรบุคคลแบบครบวงจร',
    heroDesc: 'เข้าถึงทุกระบบปฏิบัติการของ HR โฉมใหม่ได้ในที่เดียว เพื่อการบริหารจัดการที่รวดเร็ว โปร่งใส และมีประสิทธิภาพสูงสุด',
    scrollDown: 'เลื่อนเพื่อเข้าสู่ระบบ',
    enterBtn: 'View',
    contactTitle: 'ติดต่อประสานงาน',
    contactDesc: 'หากต้องการสอบถามข้อมูลเพิ่มเติม หรือแจ้งปัญหาการใช้งานระบบส่วนต่างๆ กรุณาติดต่อฝ่ายทรัพยากรบุคคล',
    developedBy: 'พัฒนาโดย',
    rights: 'สงวนลิขสิทธิ์'
  },
  EN: {
    navPortal: 'Portals',
    navContact: 'Contact',
    heroTitle: 'Supavut Insight',
    heroSubtitle: 'The Central Hub for Human Resources Applications',
    heroDesc: 'Access all modernized HR operational systems in one unified portal for fast, transparent, and highly efficient management.',
    scrollDown: 'Scroll to explore',
    enterBtn: 'View',
    contactTitle: 'Connect with us',
    contactDesc: 'For administrative inquiries or technical support regarding the Insight portals, please reach out to our HR department.',
    developedBy: 'Developed by',
    rights: 'All rights reserved.'
  }
};

// --- Project Data with Translations ---
const PROJECTS = [
  {
    id: 'penalty-bonus',
    title: { EN: 'SUPAVUT PENALTY & BONUS', TH: 'SUPAVUT PENALTY & BONUS' },
    tagline: { EN: 'Performance Management System', TH: 'ระบบจัดการและประเมินประสิทธิภาพ' },
    description: { 
      EN: 'Employee Score Management System with a dashboard for tracking data, reviewing summaries, and monitoring status clearly.', 
      TH: 'ระบบจัดการคะแนนพนักงาน พร้อมแดชบอร์ดสำหรับติดตามข้อมูล สรุปผล และตรวจสอบสถานะได้อย่างชัดเจน' 
    },
    // ใช้รูปภาพหรือ Screenshot ที่สื่อถึงเอกสาร/ข้อมูล
    video: `${BASE_URL}videos/supavut-penalty-bonus.mp4`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000', 
    link: 'http://192.168.7.12:8080/Supavut_penalty&bonus/public/index.php', 
    color: 'blue'
  },
  {
    id: 'assessment',
    title: { EN: 'SUPAVUT ASSESSMENT', TH: 'SUPAVUT ASSESSMENT' },
    tagline: { EN: 'Employee Evaluation', TH: 'ระบบประเมินและพัฒนาบุคลากร' },
    description: { 
      EN: 'Employee Evaluation and Development System with score-based weighted calculations and structured employee evaluation results.', 
      TH: 'ระบบประเมินและพัฒนาบุคลากร โดยมีการคำนวณตามสัดส่วนคะแนน และแสดงผลลัพธ์การประเมินพนักงานอย่างเป็นระบบ' 
    },
    video: `${BASE_URL}videos/supavut-assessment.mp4`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000', 
    link: 'http://192.168.7.12:8080/Supavut_Assessment/public/index.php',
    color: 'slate'
  },
  {
    id: 'okr-kpi',
    title: { EN: 'OKR-KPI SYSTEM', TH: 'OKR-KPI SYSTEM' },
    tagline: { EN: 'Objectives & KPI Management', TH: 'ระบบจัดการเป้าหมายและตัวชี้วัดผล' },
    description: {
      EN: 'A centralized platform for setting organizational goals, defining KPIs, and clearly tracking performance through measurable metrics.',
      TH: 'แพลตฟอร์มศูนย์กลางสำหรับกำหนดเป้าหมายองค์กร กำหนด KPI และติดตามผลการดำเนินงานอย่างชัดเจนด้วยตัวชี้วัดที่วัดผลได้'
    },
    video: `${BASE_URL}videos/okr-kpi-system.mp4`,
    image: `${BASE_URL}images/okr-kpi-system.jpg`,
    link: 'http://192.168.7.12:8080/okr-kpi-system/public/index.php',
    color: 'emerald'
  }
];

const VIDEO_OVERSCAN_SCALE = 1.06;
const PENALTY_VIDEO_SCALE = 1.1;
const PENALTY_VIDEO_SHIFT_X = '4.5%';
const PROJECT_MEDIA_SIZE_CLASS = 'w-full md:w-[110%] lg:w-[120%]';
const ASSESSMENT_MEDIA_SIZE_CLASS = 'w-full md:w-[118%] lg:w-[128%]';
const PROJECT_SECTION_MAX_WIDTH_CLASS = 'max-w-[90rem]';

const PROJECT_THEMES = {
  'penalty-bonus': {
    sectionBg: 'bg-white',
    sectionBorder: 'border-zinc-200',
    title: 'text-zinc-900',
    tagline: 'text-zinc-700',
    desc: 'text-zinc-600',
    mediaShell: 'bg-white',
    button: 'bg-zinc-900 text-white hover:bg-zinc-700 hover:shadow-zinc-500/30',
    glow: 'from-zinc-900/10 via-zinc-700/5 to-transparent',
  },
  assessment: {
    sectionBg: 'bg-zinc-950',
    sectionBorder: 'border-zinc-800',
    title: 'text-white',
    tagline: 'text-yellow-400',
    desc: 'text-zinc-300',
    mediaShell: 'bg-zinc-950',
    button: 'bg-yellow-400 text-zinc-950 hover:bg-yellow-300 hover:shadow-yellow-400/30',
    glow: 'from-yellow-400/20 via-yellow-300/5 to-transparent',
  },
  'okr-kpi': {
    sectionBg: 'bg-white',
    sectionBorder: 'border-pink-200',
    title: 'text-zinc-900',
    tagline: 'text-pink-300',
    desc: 'text-zinc-600',
    mediaShell: 'bg-white',
    button: 'bg-pink-500 text-white hover:bg-pink-400 hover:shadow-pink-500/35',
    glow: 'from-pink-500/20 via-pink-400/5 to-transparent',
  },
};

const ProjectSection = ({ project, index, lang, t }) => {
  const isEven = index % 2 === 0;
  const isPenaltyBonus = project.id === 'penalty-bonus';
  const isAssessment = project.id === 'assessment';
  const mediaSizeClass = isAssessment ? ASSESSMENT_MEDIA_SIZE_CLASS : PROJECT_MEDIA_SIZE_CLASS;
  const hasVideo = Boolean(project.video);
  const theme = PROJECT_THEMES[project.id] ?? PROJECT_THEMES['penalty-bonus'];
  const videoTransformStyle = isAssessment
    ? undefined
    : isPenaltyBonus
      ? { transform: `translateX(${PENALTY_VIDEO_SHIFT_X}) scale(${PENALTY_VIDEO_SCALE})` }
      : { transform: `scale(${VIDEO_OVERSCAN_SCALE})` };
  const videoRef = useRef(null);
  const [isLoopFading, setIsLoopFading] = useState(false);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = videoEl.play();
          if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
          }
          return;
        }
        videoEl.pause();
      },
      { threshold: 0.5 }
    );

    observer.observe(videoEl);
    return () => observer.disconnect();
  }, []);

  const handleVideoEnded = () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;
    setIsLoopFading(true);
    videoEl.currentTime = 0;
    const playPromise = videoEl.play();
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {});
    }
    window.setTimeout(() => setIsLoopFading(false), 220);
  };

  return (
    <section
      id={project.id}
      className={`relative min-h-screen flex items-center justify-center py-24 px-6 border-b transition-colors duration-700 ${theme.sectionBorder} ${theme.sectionBg}`}
      data-aos="fade"
      data-aos-duration="700"
      data-aos-easing="ease-out-cubic"
      data-aos-anchor-placement="top-bottom"
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b ${theme.glow}`} />
      <div className={`relative z-10 w-full ${PROJECT_SECTION_MAX_WIDTH_CLASS} mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}>
        
        {/* Image Side */}
        <div 
          className={`order-1 ${isEven ? 'lg:order-1' : 'lg:order-2'} flex justify-center`}
          data-aos={isEven ? "fade-right" : "fade-left"}
          data-aos-duration="1200"
          data-aos-easing="ease-out-expo"
        >
          <div className={`${mediaSizeClass} aspect-video overflow-hidden rounded-none ${theme.mediaShell}`}>
            {hasVideo ? (
              <video
                ref={videoRef}
                autoPlay
                muted
                preload="metadata"
                playsInline
                poster={project.image}
                onEnded={handleVideoEnded}
                style={videoTransformStyle}
                className={`block w-full h-full object-cover object-center bg-white will-change-transform transition-opacity duration-200 ease-in-out ${isLoopFading ? 'opacity-90' : 'opacity-100'}`}
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={project.image}
                alt={project.title[lang]}
                className="block w-full h-full object-cover object-center bg-white"
              />
            )}
          </div>
        </div>

        {/* Text Side */}
        <div 
          className={`order-2 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-expo"
        >
          <div className="space-y-6">
            <h2 className={`text-4xl md:text-5xl font-semibold leading-tight tracking-tight ${theme.title} ${isPenaltyBonus ? 'lg:whitespace-nowrap' : ''}`} data-aos="fade-up" data-aos-delay="200">
              {project.title[lang]}
            </h2>
            
            <p className={`text-xl font-medium ${theme.tagline}`} data-aos="fade-up" data-aos-delay="300">
              {project.tagline[lang]}
            </p>
            
            <p className={`text-lg leading-relaxed max-w-xl ${theme.desc}`} data-aos="fade-up" data-aos-delay="400">
              {project.description[lang]}
            </p>
            
            <div className="pt-8" data-aos="fade-up" data-aos-delay="500">
              <a 
                href={project.link}
                className={`inline-flex items-center gap-3 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:shadow-lg group ${theme.button}`}
              >
                {t.enterBtn}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const SupavutPortal = () => {
  const [lang, setLang] = useState('TH');
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const t = dict[lang];

  useEffect(() => {
    const previousRestoration = window.history.scrollRestoration;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    const resetToHeroTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    };

    resetToHeroTop();
    const rafId = window.requestAnimationFrame(resetToHeroTop);
    window.addEventListener('load', resetToHeroTop);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('load', resetToHeroTop);
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = previousRestoration;
      }
    };
  }, []);

  useEffect(() => {
    AOS.init({
      once: false, 
      mirror: true,
      offset: 100, // Trigger แอนิเมชันเร็วขึ้นเล็กน้อยเมื่อเลื่อนถึง
    });
  }, []);

  const scrollToSection = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    const navOffset = 96;
    const top = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: Math.max(top, 0), behavior: 'smooth' });
  };

  return (
    <div className={`bg-white text-slate-900 antialiased overflow-x-hidden ${lang === 'TH' ? 'font-thai' : 'font-sans'}`}>
      <CursorFocusRing />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-white transition-all duration-300">
        <div className="w-full px-2 md:px-4 h-20 grid grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
          
          {/* Logo */}
          <div
            className="h-14 w-64 md:h-16 md:w-72 flex items-center justify-start gap-3 overflow-hidden cursor-pointer justify-self-start"
            onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
          >
            <img
              src={`${BASE_URL}logo-supavut-insight.png`}
              alt="Supavut Insight Logo"
              className="h-11 w-11 md:h-12 md:w-12 object-contain shrink-0"
            />
            <span className="text-slate-600 text-xl md:text-2xl font-semibold tracking-tight">SUPAVUT INSIGHT</span>
          </div>
          
          {/* Center Menu */}
          <div className="hidden md:flex items-center justify-center gap-10 text-sm font-medium">
            
            {/* Apps Hub Dropdown */}
            <div
              className="relative py-6"
              onMouseEnter={() => setIsPortalOpen(true)}
              onMouseLeave={() => setIsPortalOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors px-1 py-1"
              >
                {t.navPortal} <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPortalOpen ? 'rotate-180' : ''}`} />
              </button>
               
              {/* Dropdown Menu */}
              <div className={`absolute top-full right-0 mt-0 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 transition-all duration-150 overflow-hidden ${isPortalOpen ? 'opacity-100 visible translate-y-0 pointer-events-auto' : 'opacity-0 invisible translate-y-2 pointer-events-none'}`}>
                <div className="p-2">
                  {PROJECTS.map((proj) => (
                    <a 
                      key={proj.id} 
                      href={`#${proj.id}`}
                      onClick={() => setIsPortalOpen(false)}
                      className="block px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      <div className="font-semibold text-sm">{proj.title[lang]}</div>
                      <div className="text-xs text-slate-400 mt-0.5 truncate">{proj.tagline[lang]}</div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="text-slate-600 hover:text-blue-600 transition-colors bg-transparent cursor-pointer"
            >
              {t.navContact}
            </button>
          </div>

          {/* Language Switch */}
          <div className="flex items-center justify-end gap-3 text-base font-semibold justify-self-end -translate-x-2 md:-translate-x-3">
            <button
              onClick={() => setLang('TH')}
              className={`transition-colors ${lang === 'TH' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600'}`}
            >
              TH
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`transition-colors ${lang === 'EN' ? 'text-blue-600 font-bold' : 'text-slate-600 hover:text-blue-600'}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video Background */}
      <header className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            preload="auto"
            playsInline 
            className="w-full h-full object-cover opacity-100 scale-105 brightness-110 contrast-110 saturate-110"
          >
            {/* คุณสามารถเปลี่ยน Source วิดีโอตรงนี้ได้ */}
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
          {/* Gradient overlay keeps edges dark while center stays clear for heading text */}
          <div className="hero-video-overlay absolute inset-0 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="hero-center-copy relative z-10 text-center px-6 max-w-4xl mx-auto w-full flex flex-col items-center">
          <h1 
            className="text-6xl md:text-8xl font-sans font-extrabold tracking-tight mb-8"
          >
            SUPAVUT <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              INSIGHT
            </span>
          </h1>

          <div className="w-full max-w-2xl min-h-[8.5rem] md:min-h-[6rem] mb-12">
            <p className={`text-xl md:text-2xl text-white leading-relaxed ${lang === 'EN' ? 'font-medium' : 'font-normal'}`}>
              {t.heroDesc}
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => document.getElementById(PROJECTS[0].id).scrollIntoView({ behavior: 'smooth' })}>
          <span className="text-xs font-semibold tracking-widest uppercase">{t.scrollDown}</span>
          <div className="w-8 h-12 rounded-full border-2 border-white/30 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </header>

      {/* Dynamic Project Sections */}
      <main className="relative z-20 bg-white">
        {PROJECTS.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} lang={lang} t={t} />
        ))}
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="scroll-mt-24 bg-slate-950 text-white py-24 px-6 relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20" data-aos="fade-up" data-aos-duration="1000">
            <div>
              <h3 className="text-4xl font-bold mb-6 tracking-tight">{t.contactTitle}</h3>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                {t.contactDesc}
              </p>
            </div>
            
            <div className="flex flex-col justify-center space-y-4">
              <a href="mailto:hr.manager@supavut.com" className="inline-flex items-center gap-3 text-slate-300 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors" />
                <div className="text-lg">hr.manager@supavut.com</div>
              </a>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-medium">
            <p>© {new Date().getFullYear()} Supavut Group. {t.rights}</p>
            <div className="flex items-center gap-8">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">{t.developedBy} Pumiput IT</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Supavut Insight Portal v2.0</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default SupavutPortal;
