import Navbar from "@/components/Navbar";
import ServiceCard from "@/components/ServiceCard";
import FeatureCard from "@/components/FeatureCard";
import BrandingIcon from "@/components/icons/BrandingIcon";
import WebsiteIcon from "@/components/icons/WebsiteIcon";
import MediaIcon from "@/components/icons/MediaIcon";
import AdvertisingIcon from "@/components/icons/AdvertisingIcon";
import ExperientialIcon from "@/components/icons/ExperientialIcon";
import CreativeIcon from "@/components/icons/CreativeIcon";
import TailoredIcon from "@/components/icons/TailoredIcon";
import TransparentIcon from "@/components/icons/TransparentIcon";
import PassionateIcon from "@/components/icons/PassionateIcon";
import collaborationImage1 from "@/assets/collaboration-1.jpg";
import collaborationImage2 from "@/assets/collaboration-2.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          {/* Yonile Services Badge */}
          <div className="inline-block mb-8">
            <div className="bg-secondary/50 backdrop-blur-sm border border-border/50 rounded-full px-6 py-2 text-sm text-foreground">
              Yonile Services
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>

          {/* Subheading */}
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
            Your brand's needs, all in one place. Helping brands tell their story, engage audiences, and create memorable experiences through strategy, design, and media.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Our <span className="text-primary">Services</span>
          </h2>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<BrandingIcon />}
              title="Branding & Strategy"
              description="Distinctive identities that leave an impression."
            />
            <ServiceCard
              icon={<WebsiteIcon />}
              title="Website Design"
              description="Seamless, engaging digital experiences."
            />
            <ServiceCard
              icon={<BrandingIcon />}
              title="Branding & Strategy"
              description="Distinctive identities that leave an impression."
            />
            <ServiceCard
              icon={<MediaIcon />}
              title="Media Production"
              description="Visual storytelling that reaches and resonates."
            />
            <ServiceCard
              icon={<AdvertisingIcon />}
              title="Advertising"
              description="Strategic placements that maximize reach and ROI."
            />
            <ServiceCard
              icon={<ExperientialIcon />}
              title="Experiential Marketing"
              description="Immersive events that connect and engage."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Yonile Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-transparent to-background/50">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Why Choose <span className="text-primary">Yonile</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Think of us as more than an agency; we're your growth partners.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<CreativeIcon />}
              title="Creative meets strategy."
              description="We design visuals that convert."
            />
            <FeatureCard
              icon={<TailoredIcon />}
              title="Tailored, not templated."
              description="Everything we do is custom-built for you."
            />
            <FeatureCard
              icon={<TransparentIcon />}
              title="Transparent collaboration."
              description="You're always in the loop, never in the dark."
            />
            <FeatureCard
              icon={<PassionateIcon />}
              title="Passionate, local team."
              description="Dedicated to your brand's vision and success."
            />
          </div>
        </div>
      </section>

      {/* Collaboration CTA Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Interested in collaboration with us?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                We will help you reach your business goal
              </p>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-primary/20 text-lg font-medium">
                Contact Us
              </button>
            </div>

            {/* Right Images */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-3xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <img
                    src={collaborationImage1}
                    alt="Professional collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative h-64 rounded-3xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300 mt-8">
                  <img
                    src={collaborationImage2}
                    alt="Creative workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-8 border-t border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            {/* Logo */}
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold text-xl">O</span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {["Lorem", "Lorem", "Lorem", "Lorem"].map((title, index) => (
              <div key={index}>
                <h4 className="text-foreground font-semibold mb-4">{title}</h4>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30 gap-4">
            <p className="text-muted-foreground text-sm">
              © Copyright 2022, All Rights Reserved by Yonile
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
