
import React, { useState, useEffect, useRef } from 'react';
import type { Product, CardInfo, Feature } from './types';
import { Award, Beef, ChevronLeft, Eye, Globe, Grape, MessageSquare, Phone, Send, ShieldCheck, ShoppingCart, Target, ThumbsUp, User, Wheat, Zap, Mail, MapPin, Linkedin, Twitter, Instagram, Smartphone } from 'lucide-react';
import heroBackground from './maleha-bg.jpg';
import partnershipBackground from './hero-bg.jpeg';

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
                        <button className="px-8 py-3 bg-[#450505] text-white rounded-lg gold-border-glow text-lg font-semibold w-full sm:w-auto">
                            اكتشف منتجاتنا
                        </button>
                        <button className="px-8 py-3 bg-gradient-to-r from-[#E5C690] to-[#C9A86A] text-[#450505] rounded-lg font-semibold text-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                            تواصل معنا
                        </button>
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
    { id: 4, name: 'حبوب وبقوليات عضوية', category: 'المواد الجافة', icon: Wheat },
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
                        <div className="relative p-2 border-2 border-[#C9A86A]/30 rounded-2xl">
                             <div className="absolute -inset-2 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,106,0.2)_0%,_transparent_60%)] -z-10"></div>
                             <img src={partnershipBackground} alt="Maliha Salami" className="rounded-xl w-full h-auto object-cover" />
                        </div>
                    </AnimatedSection>
                    <AnimatedSection className="text-white">
                        <div className="inline-flex items-center gap-3 bg-[#450505] text-[#E5C690] px-4 py-2 rounded-full border border-[#C9A86A]/50 mb-6">
                            <Award className="w-5 h-5"/>
                            <span className="font-semibold">شراكة حصرية</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">الوكيل الرسمي لشركة <span className="gold-text">مليحة للسلامي</span></h2>
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

// SECTION: Contact Us
const ContactSection: React.FC = () => {
    return (
        <section className="py-20 bg-[#FFF8F1]" id="contact">
            <div className="container mx-auto px-4">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#3A2417] mb-4">تواصل معنا</h2>
                    <div className="w-24 h-1 bg-[#C9A86A] mx-auto"></div>
                </AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <AnimatedSection>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                <input type="text" placeholder="الاسم الكامل" className="w-full bg-white/50 backdrop-blur-sm border border-[#C9A86A]/40 rounded-lg py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                            </div>
                            <div className="relative">
                                <Mail className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                <input type="email" placeholder="البريد الإلكتروني" className="w-full bg-white/50 backdrop-blur-sm border border-[#C9A86A]/40 rounded-lg py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                            </div>
                             <div className="md:col-span-2 relative">
                                <Phone className="absolute top-1/2 -translate-y-1/2 right-4 w-5 h-5 text-[#C9A86A]" />
                                <input type="tel" placeholder="رقم الهاتف" className="w-full bg-white/50 backdrop-blur-sm border border-[#C9A86A]/40 rounded-lg py-3 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A]" />
                            </div>
                            <div className="md:col-span-2 relative">
                                <MessageSquare className="absolute top-5 right-4 w-5 h-5 text-[#C9A86A]" />
                                <textarea placeholder="رسالتك" rows={5} className="w-full bg-white/50 backdrop-blur-sm border border-[#C9A86A]/40 rounded-lg py-4 pr-12 pl-4 text-[#3A2417] placeholder:text-[#3A2417]/60 focus:outline-none focus:ring-2 focus:ring-[#C9A86A] resize-none"></textarea>
                            </div>
                             <div className="md:col-span-2 text-center">
                                <button type="submit" className="px-10 py-4 bg-[#450505] text-white rounded-lg gold-border-glow text-lg font-semibold w-full sm:w-auto flex items-center justify-center gap-2 mx-auto">
                                    <span>إرسال الرسالة</span>
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>
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
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-[#C9A86A]" /><span>الرياض، المملكة العربية السعودية</span></li>
                            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-[#C9A86A]" /><span>info@renewed-system.com</span></li>
                            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-[#C9A86A]" /><span>+966 11 123 4567</span></li>
                        </ul>
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
            href="https://wa.me/966111234567" // Replace with actual number
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
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App;
