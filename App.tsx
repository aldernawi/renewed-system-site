
import React, { useState, useEffect, useRef } from 'react';
import type { Product, CardInfo, Feature } from './types';
import { Award, AtSign, Beef, ChevronLeft, Eye, Globe, Grape, MapPin, MessageSquare, Phone, PhoneCall, Send, ShieldCheck, ShoppingCart, Target, ThumbsUp, User, Wheat, Zap, Mail, Linkedin, Twitter, Instagram, Smartphone } from 'lucide-react';
import heroBackground from './maleha-bg.jpg';
import partnershipBackground from './hero-bg.jpeg';
import maleha1 from './maleha1.jpeg';
import maleha2 from './maleha2.jpeg';
import maleha3 from './maleha3.jpeg';
import maleha4 from './maleha4.jpeg';
import maleha5 from './maleha5.jpeg';
import maleha6 from './maleha6.jpeg';

// HELPER: Scroll Animation Component
const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${className} ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-10 blur-sm'}`}
        >
            {children}
        </div>
    );
};

// SECTION: Hero
const HeroSection: React.FC = () => {
    const [parallaxOffset, setParallaxOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.pageYOffset;
            setParallaxOffset(offset * 0.3);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden" id="home">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${heroBackground})`,
                    transform: `translateY(${parallaxOffset}px) scale(1.1)`,
                }}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#450505] via-black/70 to-transparent"></div>
            <div className="relative z-10 text-center px-4">
                <AnimatedSection>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 gold-text">
                        شركة النظام المتجدد
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-[#FFF8F1] mb-8">
                        رواد استيراد أجود المواد الغذائية، والمواشي، واللحوم الطازجة والمجمدة.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#products" className="px-8 py-3 bg-[#450505] text-white rounded-lg gold-border-glow text-lg font-semibold w-full sm:w-auto text-center block">
                            اكتشف منتجاتنا
                        </a>
                        <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-[#E5C690] to-[#C9A86A] text-[#450505] rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto text-center block">
                            تواصل معنا
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

// SECTION: About Us
const aboutCards: CardInfo[] = [
    {
        icon: MessageSquare,
        title: 'رسالتنا',
        description: 'توفير منتجات غذائية عالية الجودة تلبي أعلى المعايير العالمية، والمساهمة في تحقيق الأمن الغذائي.',
    },
    {
        icon: Eye,
        title: 'رؤيتنا',
        description: 'أن نكون الشركة الرائدة في قطاع استيراد وتوزيع المواد الغذائية في المنطقة، مع الالتزام بالتميز والابتكار.',
    },
    {
        icon: Target,
        title: 'أهدافنا',
        description: 'بناء شراكات استراتيجية عالمية، وتوسيع شبكة التوزيع، وضمان رضا عملائنا عبر تقديم الأفضل دائمًا.',
    },
];

const AboutSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#FFF8F1]" id="about">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3A2417] mb-4">هويتنا العريقة</h2>
                    <div className="w-24 h-1 bg-[#C9A86A] mx-auto"></div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {aboutCards.map((card, index) => (
                        <AnimatedSection key={index} className="group">
                             <div className="relative bg-white p-8 rounded-xl shadow-[0_10px_40px_rgba(58,36,23,0.05)] h-full overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(58,36,23,0.1)] hover:-translate-y-2 border border-transparent hover:border-[#E5C690]/50 card-sheen">
                                <div className="relative z-10">
                                    <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#E5C690] to-[#C9A86A] rounded-full">
                                        <card.icon className="w-8 h-8 text-[#450505]" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#3A2417] mb-3">{card.title}</h3>
                                    <p className="text-[#3A2417]/70 leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SECTION: Products
const products: Product[] = [
    { id: 1, name: 'لحوم مجمدة فاخرة', category: 'تشكيلات مميزة', icon: Beef },
    { id: 2, name: 'فاكهة استوائية مختارة', category: 'الفواكه النادرة', icon: Grape },
    { id: 3, name: 'مواشي حية ممتازة', category: 'سلالات عالمية', icon: Zap },
    { id: 4, name: 'حبوب وبقوليات ', category: 'المواد الجافة', icon: Wheat },
];

const ProductsSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#3A2417]" id="products">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#FFF8F1] mb-4">منتجاتنا الملكية</h2>
                    <div className="w-24 h-1 bg-[#C9A86A] mx-auto"></div>
                    <p className="text-[#FFF8F1]/70 mt-4 max-w-3xl mx-auto">
                        تشكيلات خاصة مختارة بعناية لتلائم أرقى متطلبات الضيافة والفنادق والمطاعم الفاخرة.
                    </p>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map(product => (
                        <AnimatedSection key={product.id}>
                            <div className="group relative rounded-2xl bg-gradient-to-br from-[#FFFBF2] to-[#F9F1DF] border border-[#E5C690]/60 p-8 shadow-[0_15px_45px_rgba(58,36,23,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(201,168,106,0.25)]">
                                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ boxShadow: '0 0 25px rgba(201,168,106,0.35)' }}></div>
                                <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border border-[#C9A86A]/50 bg-white/70 text-[#C9A86A] transition-transform duration-500 group-hover:scale-110">
                                        <product.icon className="w-12 h-12" />
                                    </div>
                                    <div>
                                        <p className="text-sm tracking-[0.3em] text-[#B48D4E] mb-2">{product.category}</p>
                                        <h3 className="text-2xl font-bold text-[#3A2417]">{product.name}</h3>
                                    </div>
                                    <div className="w-14 h-px bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"></div>
                                    <p className="text-[#3A2417]/70 text-sm">
                                        نضمن لكم توازناً مثالياً بين الجودة والنقاء والانتقاء اليدوي لكل صنف فاخر.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SECTION: Why Choose Us
const features: Feature[] = [
    { icon: ShieldCheck, title: 'جودة عالمية', description: 'نلتزم بأعلى معايير الجودة في جميع منتجاتنا.' },
    { icon: Globe, title: 'مصادر موثوقة', description: 'شبكة واسعة من الموردين الموثوقين حول العالم.' },
    { icon: ThumbsUp, title: 'رضا العملاء', description: 'نسعى دائمًا لتحقيق رضا عملائنا وتجاوز توقعاتهم.' },
    { icon: Award, title: 'خبرة عريقة', description: 'سنوات من الخبرة في مجال الاستيراد والتوزيع.' },
];

const WhyUsSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#450505] relative overflow-hidden" id="why-us">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.08)_0%,_transparent_70%)]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">لماذا تختارنا؟</h2>
                     <div className="w-24 h-1 bg-[#C9A86A] mx-auto"></div>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <AnimatedSection key={index} className="text-center">
                            <div className="mb-6 inline-block p-5 border-2 border-[#C9A86A]/50 rounded-full bg-[#5E0A0A]/30">
                                <feature.icon className="w-12 h-12 text-[#E5C690]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-[#FFF8F1]/70">{feature.description}</p>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};


// SECTION: Partnership
const PartnershipSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#3A2417]" id="partnership">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <AnimatedSection>
                        <div className="relative p-2 border-2 border-[#C9A86A]/30 rounded-2xl overflow-hidden">
                             <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.2)_0%,_transparent_60%)] -z-10"></div>
                             <img src={partnershipBackground} alt="Maliha Salami" className="rounded-xl w-full h-auto object-cover" />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="text-white">
                        <div className="inline-flex items-center gap-3 bg-[#450505] text-[#E5C690] px-4 py-2 rounded-full border border-[#C9A86A]/50 mb-6">
                            <Award className="w-5 h-5"/>
                            <span className="font-semibold">شراكة حصرية</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">الوكيل الرسمي لشركة <span className="gold-text">مليحة </span></h2>
                        <p className="text-lg text-[#FFF8F1]/80 mb-8 leading-relaxed">
                            نفخر بكوننا الشريك الحصري والوكيل الرسمي لعلامة "مليحة" التجارية، نقدم لكم أفخر أنواع السلامي المصنعة وفقًا لأعلى معايير الجودة العالمية والطعم الأصيل.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-[#C9A86A] rounded-full mt-2 shrink-0"></div>
                                <span>مكونات طبيعية 100% ومختارة بعناية.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-3 h-3 bg-[#C9A86A] rounded-full mt-2 shrink-0"></div>
                                <span>نكهة فريدة ومذاق لا يضاهى.</span>
                            </li>
                            <li className="flex items-start gap-3">
                               <div className="w-3 h-3 bg-[#C9A86A] rounded-full mt-2 shrink-0"></div>
                                <span>متوفرة بتشكيلة واسعة لتناسب جميع الأذواق.</span>
                            </li>
                        </ul>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

// SECTION: Exclusive Products Gallery
const malehaProducts = [
    { id: 1, image: maleha1 },
    { id: 2, image: maleha2 },
    { id: 3, image: maleha3 },
    { id: 4, image: maleha4 },
    { id: 5, image: maleha5 },
    { id: 6, image: maleha6 },
];

const ExclusiveProductsSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#2B1710]" id="exclusive-products">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <span className="px-4 py-2 rounded-full bg-[#5A0F0F] text-[#E5C690] tracking-[0.2em] text-xs">منتجاتنا</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">تشكيلة مليحة الحصرية</h2>
                    <p className="text-white/70 max-w-3xl mx-auto">مجموعة مختارة بعناية من منتجات مليحة للسلامي، تمثل قمة الإبداع في الصناعات الغذائية الفاخرة.</p>
                </AnimatedSection>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {malehaProducts.map(product => (
                        <AnimatedSection key={product.id}>
                            <div className="group relative rounded-[32px] overflow-hidden border border-transparent bg-gradient-to-b from-[#4B1D12] to-[#1C0E08] shadow-[0_25px_65px_rgba(0,0,0,0.35)] transition-all duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 border border-[#C9A86A]/30 rounded-[32px] opacity-50 group-hover:opacity-100 blur-sm group-hover:blur-0 transition duration-500"></div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 mix-blend-multiply"></div>
                                <img src={product.image} alt={`منتج مليحة ${product.id}`} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-700 bg-gradient-to-t from-[#E5C690]/25 via-transparent to-transparent"></div>
                                </div>
                                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#E5C690] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
};

// SECTION: Contact Us
const ContactSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#FFF8F1]" id="contact">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3A2417] mb-4">تواصل معنا</h2>
                    <div className="w-24 h-1 bg-[#C9A86A] mx-auto"></div>
                </AnimatedSection>
                <div className="max-w-6xl mx-auto">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/80 backdrop-blur rounded-3xl p-8 shadow-[0_20px_50px_rgba(58,36,23,0.12)]">
                                <div className="relative">
                                    <User className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                    <input type="text" placeholder="الاسم الكامل" className="w-full bg-white border border-[#C9A86A]/30 rounded-xl py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                    <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-white border border-[#C9A86A]/30 rounded-xl py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                                </div>
                                <div className="md:col-span-2 relative">
                                    <Phone className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                    <input type="tel" placeholder="رقم الهاتف" className="w-full bg-white border border-[#C9A86A]/30 rounded-xl py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                                </div>
                                <div className="md:col-span-2 relative">
                                    <MessageSquare className="absolute top-5 right-4 w-5 h-5 text-[#C9A86A]" />
                                    <textarea placeholder="رسالتك" rows={5} className="w-full bg-white border border-[#C9A86A]/30 rounded-xl py-4 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] resize-none"></textarea>
                                </div>
                                <div className="md:col-span-2 text-center">
                                    <button type="submit" className="px-10 py-4 bg-[#450505] text-white rounded-xl gold-border-glow text-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-2 mx-auto">
                                        <span>إرسال الرسالة</span>
                                        <Send className="w-5 h-5" />
                                    </button>
                                </div>
                            </form>
                            <div className="w-full space-y-6">
                                <div className="rounded-3xl border border-[#C9A86A]/30 overflow-hidden shadow-[0_20px_45px_rgba(58,36,23,0.12)]">
                                    <iframe
                                        title="Tripoli Office Map"
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3352.3189998277912!2d13.270770584816429!3d32.83680448095392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCsDUwJzEyLjUiTiAxM8KwMTYnMDYuOSJF!5e0!3m2!1sar!2sly!4v1763370998065!5m2!1sar!2sly"
                                        className="w-full h-[350px] border-0"
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    );
};

// SECTION: Footer
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#450505] text-[#FFF8F1]/80 pt-16 pb-8 border-t-4 border-[#C9A86A]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 gold-text">شركة النظام المتجدد</h3>
                        <p className="text-sm leading-loose">
                            رواد استيراد المواد الغذائية والمواشي واللحوم، ملتزمون بالجودة والتميز منذ التأسيس.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">روابط سريعة</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#home" className="hover:text-[#E5C690] transition-colors">الرئيسية</a></li>
                            <li><a href="#about" className="hover:text-[#E5C690] transition-colors">من نحن</a></li>
                            <li><a href="#products" className="hover:text-[#E5C690] transition-colors">منتجاتنا</a></li>
                            <li><a href="#contact" className="hover:text-[#E5C690] transition-colors">تواصل معنا</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">معلومات الاتصال</h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex items-center gap-4 bg-[#5a0f0f] text-white rounded-full px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black"><AtSign className="w-5 h-5" /></span>
                                <span className="font-semibold break-all">Mahmoudbushaala4@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-4 bg-[#5a0f0f] text-white rounded-full px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black"><PhoneCall className="w-5 h-5" /></span>
                                <span className="font-semibold" dir="ltr">+218 92 515 6487</span>
                            </div>
                            <div className="flex items-center gap-4 bg-[#5a0f0f] text-white rounded-full px-4 py-3 shadow-[0_10px_25px_rgba(0,0,0,0.15)]">
                                <span className="flex items-center justify-center w-10 h-10 rounded-2xl bg-black"><MapPin className="w-5 h-5" /></span>
                                <div>
                                    <p className="font-semibold">طرابلس / ليبيا</p>
                                    <p className="text-white/70 text-xs">Tripoli - Libya</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div>
                        <h4 className="text-xl font-semibold text-white mb-4">تابعنا</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="p-2 border border-[#C9A86A]/50 rounded-full hover:bg-[#C9A86A]/20 transition-colors"><Twitter className="w-5 h-5 text-[#E5C690]" /></a>
                            <a href="#" className="p-2 border border-[#C9A86A]/50 rounded-full hover:bg-[#C9A86A]/20 transition-colors"><Linkedin className="w-5 h-5 text-[#E5C690]" /></a>
                            <a href="#" className="p-2 border border-[#C9A86A]/50 rounded-full hover:bg-[#C9A86A]/20 transition-colors"><Instagram className="w-5 h-5 text-[#E5C690]" /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-[#C9A86A]/30 pt-6 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} شركة النظام المتجدد. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

// FLOATING COMPONENT: WhatsApp Button
const WhatsAppButton: React.FC = () => {
    return (
        <a
            href="https://wa.me/218925156487"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg text-white transition-transform hover:scale-110"
        >
            <Smartphone className="w-8 h-8"/>
        </a>
    );
};


function App() {
  return (
    <div className="bg-[#3A2417] text-white antialiased">
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <WhyUsSection />
        <PartnershipSection />
        <ExclusiveProductsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App;
