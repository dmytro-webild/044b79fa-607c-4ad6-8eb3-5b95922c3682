"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import FooterSimple from '@/components/sections/footer/FooterSimple';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="smallMedium"
        sizing="mediumLarge"
        background="none"
        cardStyle="inset"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Portfolio",          id: "portfolio"},
        {
          name: "About",          id: "about"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="Kinza Graphic Designer"
      button={{
        text: "Get a Quote",        href: "#contact"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars"}}
      title="Professional Graphic Design That Helps Your Business Stand Out"
      description="Kinza Graphic Designer provides creative, reliable branding and design services to local businesses. Get noticed and grow your brand with expert design solutions tailored to you."
      testimonials={[
        {
          name: "Alice Johnson",          handle: "@smallbiz",          testimonial: "Kinza completely transformed our brand. The results were professional and delivered fast.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-smiling_107420-84734.jpg"},
        {
          name: "Mark Stevens",          handle: "@localstore",          testimonial: "Excellent graphic design service. Understood exactly what our business needed.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-engineer-using-tablet-design-building-model-maquette-work-man-builder-working-with-digital-device-plan-construction-project-blueprints-urban-development_482257-27902.jpg"},
        {
          name: "Sarah Lee",          handle: "@marketinglead",          testimonial: "Highly recommended for any business looking for standout branding and graphic support.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-man-holding-smart-phone_23-2147935571.jpg"},
        {
          name: "David Park",          handle: "@startupinc",          testimonial: "Creative, reliable, and professional. Kinza is our go-to for design projects.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/confident-businessman-with-beard-smiling-camera-generated-by-ai_188544-33152.jpg"},
        {
          name: "Elena Ross",          handle: "@elena_design",          testimonial: "Truly exceptional service. Kinza makes the process seamless and the design aesthetic is always on-point.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-female-office-workers-thumbing-up-smiling-two-cheerful-professional-businesswomen-standing-together-posing-meeting-room-teamwork-business-success-cooperation-concept_74855-7378.jpg"},
      ]}
      buttons={[
        {
          text: "Get a Free Quote",          href: "#contact"},
        {
          text: "Call Now",          href: "tel:+1555010203"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/still-life-office-desk-mess_23-2150164868.jpg"
      imageAlt="Kinza Graphic Designer workstation"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/closeup-smiling-beautiful-adult-businesswoman_1262-1760.jpg",          alt: "Client 1"},
        {
          src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",          alt: "Client 2"},
        {
          src: "http://img.b2bpic.net/free-photo/smiling-african-american-man-posing-library_74855-1619.jpg",          alt: "Client 3"},
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-smiling-black-man-wool-suit_613910-16049.jpg",          alt: "Client 4"},
        {
          src: "http://img.b2bpic.net/free-photo/afro-american-woman-smiling-close-up_23-2148336947.jpg",          alt: "Client 5"},
      ]}
      marqueeItems={[
        {
          type: "text",          text: "Logos"},
        {
          type: "text",          text: "Branding"},
        {
          type: "text",          text: "Print Design"},
        {
          type: "text",          text: "Social Media"},
        {
          type: "text",          text: "UI/UX"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Crafting Visual Stories That Drive Success"
      buttons={[
        {
          text: "Learn More",          href: "#about"},
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "TechInnovate",        "LocalGrind",        "UrbanVibe",        "GreenHealth",        "PrimeBoutique"]}
      title="Trusted by Local Businesses"
      description="We are honored to have worked with these incredible local brands."
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Logo Design",          description: "Memorable logos that capture your business identity.",          imageSrc: "http://img.b2bpic.net/free-photo/golden-lightning-bolt-icon-glowing-textured-brown-background_84443-91489.jpg"},
        {
          title: "Branding & Identity",          description: "Cohesive brand systems that build trust and loyalty.",          imageSrc: "http://img.b2bpic.net/free-photo/white-grey-business-cards_23-2148500495.jpg"},
        {
          title: "Social Media Graphics",          description: "Engagement-driven visuals for your platforms.",          imageSrc: "http://img.b2bpic.net/free-vector/marketing-designs-collection_1209-75.jpg"},
        {
          title: "Print Design",          description: "Professional flyers, brochures, and cards.",          imageSrc: "http://img.b2bpic.net/free-photo/view-party-decorations-arrangement_23-2148698114.jpg"},
        {
          title: "Website/UI Graphics",          description: "Clean, conversion-ready design for digital interfaces.",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-photographer-hands-using-graphic-tablet-stylus-while-retouching-pictures-photography-studio-artist-doing-retouch-work-with-editing-software-computer-equipment_482257-38106.jpg"},
        {
          title: "Custom Design Assets",          description: "Tailored solutions for your specific marketing needs.",          imageSrc: "http://img.b2bpic.net/free-photo/digital-graphic-tablet-laptop-mock-up-with-office-objects-white-background_23-2147880630.jpg"},
      ]}
      title="Our Expert Design Services"
      description="Comprehensive creative services tailored to help your brand grow and connect with your audience."
    />
  </div>

  <div id="portfolio" data-section="portfolio">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "1",          name: "Branding Project Alpha",          price: "Logo Design",          imageSrc: "http://img.b2bpic.net/free-photo/stationery-concept_23-2147800657.jpg"},
        {
          id: "2",          name: "Social Campaign Beta",          price: "Social Graphics",          imageSrc: "http://img.b2bpic.net/free-psd/flat-design-thrift-store-template_23-2150082692.jpg"},
        {
          id: "3",          name: "Print Series Gamma",          price: "Print Collateral",          imageSrc: "http://img.b2bpic.net/free-photo/office-desktop-with-mobile-phone-paint_23-2148166776.jpg"},
        {
          id: "4",          name: "Web UI Delta",          price: "UI Design",          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-editor-occupation-wearing-headphones_482257-10564.jpg"},
        {
          id: "5",          name: "Identity Project Epsilon",          price: "Branding",          imageSrc: "http://img.b2bpic.net/free-vector/corporate-brand-design-set-envelopes-tshirts-stationary-more-black-colour_613284-218.jpg"},
        {
          id: "6",          name: "Marketing Visual Zeta",          price: "Design Asset",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-still-life-with-water_23-2149199598.jpg"},
      ]}
      title="Our Creative Work"
      description="A showcase of branding, print, and digital projects for our clients."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",          title: "Great Experience",          quote: "Fantastic attention to detail.",          name: "Alice Johnson",          role: "Owner, SmallBiz",          imageSrc: "http://img.b2bpic.net/free-photo/closeup-smiling-middle-aged-business-leader_1262-4845.jpg"},
        {
          id: "2",          title: "Highly Professional",          quote: "Professional, fast, and creative work.",          name: "Mark Stevens",          role: "CEO, LocalStore",          imageSrc: "http://img.b2bpic.net/free-photo/indoor-portrait-handsome-happy-enthusiastic-guy-striped-shirt-sitting-kitchen-table-with-arms-crossed_343059-3858.jpg"},
        {
          id: "3",          title: "Top Notch Quality",          quote: "Our brand identity has never looked better.",          name: "Sarah Lee",          role: "Marketing Director",          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-corporate-woman-looks-dreamy-smiles-stands-outside-street-leans-her-head-hands_1258-193990.jpg"},
        {
          id: "4",          title: "Exceeded Expectations",          quote: "Exceeded all our goals for the project.",          name: "David Park",          role: "Lead Startup Dev",          imageSrc: "http://img.b2bpic.net/free-photo/couple-watching-online-recipe-laptop-kitchen-vegetables-salad-man-helping-woman-prepare-healthy-organic-dinner-cooking-together-romantic-cheerful-love-relationship_482257-12127.jpg"},
        {
          id: "5",          title: "Friendly & Efficient",          quote: "Easy to communicate with and super helpful.",          name: "Jane Doe",          role: "Client",          imageSrc: "http://img.b2bpic.net/free-photo/beauty-style-fashion-age-concept-close-up-portrait-positive-elegant-50-year-old-female-with-gray-hair-wrinkled-face-posing-against-white-brick-wall_344912-1852.jpg"},
      ]}
      title="Client Success Stories"
      description="Don't just take our word for it—see what local business owners have to say about working with Kinza."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",          title: "How do I get a quote?",          content: "Just click the 'Get a Free Quote' button on any page and fill out the quick form."},
        {
          id: "f2",          title: "What is your turnaround time?",          content: "Turnaround depends on the project scope, but we aim for fast delivery for every request."},
        {
          id: "f3",          title: "Do you offer revisions?",          content: "Yes, we include revisions to ensure complete satisfaction with the design results."},
      ]}
      sideTitle="Frequently Asked Questions"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Let's Get Started"
      description="Have a project in mind? Reach out and we'll help bring your brand to life. For urgent requests, call us at (555) 010-203."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "phone",          type: "tel",          placeholder: "Your Phone Number",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "project",        placeholder: "Tell us about your project",        rows: 4,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/determined-businesswoman-speaking-phone-call-ensure-project-development_482257-124032.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterSimple
      columns={[
        {
          title: "Kinza Designer",          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Portfolio",              href: "#portfolio"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Contact",              href: "#contact"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      bottomLeftText="© 2024 Kinza Graphic Designer."
      bottomRightText="Crafted with creativity."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
