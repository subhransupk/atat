"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Ambulance, Users, Clock, Award,
  Stethoscope, HeartPulse, Bed, 
  Syringe, BadgeHelp, Microscope 
} from "lucide-react";

function Counter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const percentage = Math.min(progress / duration, 1);
        
        setCount(Math.floor(end * percentage));

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}+</span>;
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      quote: "Their ambulance service has been instrumental in ensuring smooth and safe patient transfers to SCB Medical College. The staff is highly professional and well-trained.",
      author: "Dr. Rajesh Kumar",
      position: "Chief Medical Officer",
      facility: "District Hospital, Cuttack",
      rating: 5
    },
    {
      quote: "Exceptional service with state-of-the-art medical equipment. Their quick response time and expert medical team have made critical patient transfers seamless.",
      author: "Dr. Priya Patel",
      position: "Emergency Department Head",
      facility: "City General Hospital",
      rating: 5
    },
    {
      quote: "A reliable partner in medical transfers. Their dedication to patient care and safety protocols is commendable. Always our first choice for patient transfers.",
      author: "Dr. Amit Singh",
      position: "Medical Superintendent",
      facility: "Regional Health Center",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Hero Section */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 pt-2">
            {/* Left Content */}
            <motion.div 
              className="flex-1 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">
                Professional
                <span className="text-primary"> Medical Transfer</span> Services
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                In partnership with SCB Medical College, Cuttack, providing specialized ambulance services for inter-facility medical transfers.
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-primary hover:bg-primary-hover text-white font-medium px-8 py-6"
                  size="lg"
                  radius="full"
                >
                  Contact Us
                </Button>
                <Button
                  as={Link}
                  href="/services"
                  className="bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white font-medium px-8 py-6"
                  size="lg"
                  radius="full"
                >
                  Our Services
                </Button>
              </div>
              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-secondary">24/7 Service</h3>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-secondary">Expert Staff</h3>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100">
                  <h3 className="font-semibold text-secondary">Quick Response</h3>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div 
              className="flex-1 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                <Image
                  src="/images/ambulance.png"
                  alt="Ambulance Service"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -z-10 top-1/2 right-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 bottom-1/2 left-1/2 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl"></div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* Counter Section */}
      <div className="w-full bg-gradient-to-r from-secondary/5 via-primary/5 to-secondary/5">
        <motion.div 
          className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div 
              className="flex flex-col items-center text-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <Ambulance className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary">
                <Counter end={50} />
              </h3>
              <p className="text-gray-600 font-medium">Ambulances</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary">
                <Counter end={1000} />
              </h3>
              <p className="text-gray-600 font-medium">Patients Served</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary">
                <Counter end={24} />
              </h3>
              <p className="text-gray-600 font-medium">Hours Service</p>
            </motion.div>

            <motion.div 
              className="flex flex-col items-center text-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-4xl font-bold text-secondary">
                <Counter end={15} />
              </h3>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Key Features */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-secondary">Authorized Transfers</h3>
              <p className="text-gray-600">
                Specialized in transferring patients from government medical facilities to SCB Medical College.
              </p>
            </div>
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-secondary">Professional Service</h3>
              <p className="text-gray-600">
                Experienced staff and well-equipped ambulances for safe and comfortable patient transfers.
              </p>
            </div>
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-primary transition-colors">
              <h3 className="text-xl font-semibold mb-2 text-secondary">24/7 Availability</h3>
              <p className="text-gray-600">
                Round-the-clock service for emergency medical transfers through proper referral channels.
              </p>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Our Other Medical Services */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Other Medical Services
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              In addition to our ambulance services, we provide various medical support services to ensure comprehensive healthcare assistance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6">
            {[
              {
                icon: Stethoscope,
                title: "Medical Consultation",
                description: "Expert medical consultation services with experienced healthcare professionals.",
                color: "primary"
              },
              {
                icon: HeartPulse,
                title: "Emergency Care",
                description: "24/7 emergency medical care and monitoring during patient transfers.",
                color: "secondary"
              },
              {
                icon: Bed,
                title: "Patient Support",
                description: "Comprehensive patient support services including mobility assistance.",
                color: "primary"
              },
              {
                icon: Syringe,
                title: "Medical Equipment",
                description: "Advanced medical equipment and supplies for critical care during transport.",
                color: "secondary"
              },
              {
                icon: BadgeHelp,
                title: "Medical Assistance",
                description: "Professional medical assistance and care coordination services.",
                color: "primary"
              },
              {
                icon: Microscope,
                title: "Diagnostic Support",
                description: "Mobile diagnostic support and monitoring during patient transfers.",
                color: "secondary"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 hover:border-transparent transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)"
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="relative">
                  <div className={`w-14 h-14 ${service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`w-7 h-7 ${service.color === "primary" ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Types of Ambulance */}
      <div className="w-full bg-gradient-to-b from-white to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Types of Ambulance GoAid Provide
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              We offer different types of ambulances equipped with modern medical facilities to handle various medical transfer needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
            {[
              {
                title: "Basic Life Support",
                features: [
                  "Basic medical equipment",
                  "Trained medical staff",
                  "Oxygen support",
                  "First aid facilities"
                ],
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M22 12H2M22 12C22 17.5228 17.5228 22 12 22M22 12C22 6.47715 17.5228 2 12 2M2 12C2 17.5228 6.47715 22 12 22M2 12C2 6.47715 6.47715 2 12 2M12 2V22" 
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              },
              {
                title: "Advanced Life Support",
                features: [
                  "Advanced medical equipment",
                  "Specialized medical team",
                  "Critical care facilities",
                  "Advanced monitoring systems"
                ],
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: "Patient Transport",
                features: [
                  "Comfortable transportation",
                  "Basic medical support",
                  "Trained attendants",
                  "Safe patient handling"
                ],
                icon: (
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 12L17 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M7 8L13 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M3 20.5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                )
              }
            ].map((type, index) => (
              <motion.div
                key={type.title}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0.5 bg-gradient-to-r from-primary to-secondary opacity-50 blur-2xl group-hover:opacity-75 transition-opacity duration-500 rounded-3xl" />
                <div className="relative bg-white p-8 rounded-3xl hover:shadow-xl transition-shadow duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 flex items-center justify-center bg-secondary/10 text-secondary rounded-2xl">
                      {type.icon}
                    </div>
                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full text-xl font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">{type.title}</h3>
                  <ul className="space-y-3">
                    {type.features.map((feature, i) => (
                      <motion.li 
                        key={feature}
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + i * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
                What Medical Facilities Say
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Trusted by leading medical facilities for reliable and professional patient transfer services.
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="relative">
              <div className="overflow-hidden">
                <motion.div 
                  className="flex transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.author}
                      className="relative group min-w-full"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="relative bg-white/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 hover:border-primary/20 transition-all duration-300 mx-4">
                        {/* Quote Icon */}
                        <div className="absolute -top-4 right-8">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                            </svg>
                          </div>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                          ))}
                        </div>

                        {/* Quote Text */}
                        <p className="text-gray-600 mb-6 italic">
                          "{testimonial.quote}"
                        </p>

                        {/* Author Info */}
                        <div className="flex flex-col">
                          <span className="font-semibold text-secondary">
                            {testimonial.author}
                          </span>
                          <span className="text-sm text-gray-500">
                            {testimonial.position}
                          </span>
                          <span className="text-sm text-primary font-medium">
                            {testimonial.facility}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 
                      ${index === currentSlide ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/50'}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Navigation Arrows - Hide on mobile */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -left-4 sm:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -right-4 sm:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-secondary hover:text-primary transition-colors"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="w-full bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-secondary mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              FAQ's Adidev Tours And Travels
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Find answers to commonly asked questions about our medical transfer services
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* FAQ Accordion - Full width on mobile */}
            <motion.div
              className="space-y-4 w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[
                {
                  question: "How do I book an ambulance transfer?",
                  answer: "Ambulance transfers can only be booked through authorized government medical facilities. The referring facility needs to contact us with proper documentation and patient details."
                },
                {
                  question: "What types of ambulances do you provide?",
                  answer: "We provide Basic Life Support (BLS), Advanced Life Support (ALS), and Patient Transport ambulances, each equipped with specific medical facilities based on patient needs."
                },
                {
                  question: "Do you provide direct services to the public?",
                  answer: "No, our services are exclusively for patient transfers from government medical facilities to SCB Medical College, Cuttack, through proper referral channels."
                },
                {
                  question: "What medical equipment is available in your ambulances?",
                  answer: "Our ambulances are equipped with essential medical equipment including oxygen support, monitoring devices, emergency medications, and life-saving equipment based on the ambulance type."
                },
                {
                  question: "What is your response time?",
                  answer: "We prioritize quick response times and typically dispatch ambulances immediately upon receiving authorized transfer requests from medical facilities."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <motion.div
                    className="group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <button
                      className="flex items-center justify-between w-full p-6 text-left"
                      onClick={() => {
                        const details = document.getElementById(`faq-${index}`) as HTMLDetailsElement;
                        if (details) {
                          details.open = !details.open;
                        }
                      }}
                    >
                      <span className="font-semibold text-secondary group-hover:text-primary transition-colors">
                        {faq.question}
                      </span>
                      <div className="relative ml-4 flex-shrink-0 w-6 h-6">
                        <div className="absolute inset-0 transform group-hover:rotate-180 transition-transform duration-300">
                          <svg 
                            className="w-6 h-6 text-primary"
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                          >
                            <path 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth={2} 
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <details id={`faq-${index}`} className="group-hover:bg-gray-50/50">
                      <summary className="hidden">Details</summary>
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </details>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>

            {/* Creative Right Side - Hide on mobile, show on larger screens */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Decorative Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              {/* FAQ Illustration */}
              <div className="relative">
                <div className="absolute top-10 right-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-secondary/20 rounded-full animate-float-delay" />
                
                {/* Central Icon */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20">
                  <div className="w-32 h-32 bg-white rounded-3xl shadow-xl flex items-center justify-center mb-8 rotate-12 animate-slight-rotate">
                    <svg className="w-16 h-16 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="text-center max-w-xs">
                    <h3 className="text-xl font-bold text-secondary mb-2">Need More Help?</h3>
                    <p className="text-gray-600">Contact our support team for detailed assistance with your medical transfer needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.section 
            className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-secondary">Important Notice</h2>
            <p className="text-gray-600">
              Our ambulance service is exclusively available for patient transfers from government medical facilities to SCB Medical College, Cuttack through proper referral channels. We do not provide direct services to the public.
            </p>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
