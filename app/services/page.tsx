"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { 
  Ambulance, 
  HeartPulse, 
  Stethoscope, 
  Clock, 
  Shield, 
  Users,
  Phone
} from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-primary/5 via-white to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="flex flex-col gap-4">
            {/* Breadcrumb */}
            <nav className="flex gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-700">Services</span>
            </nav>

            {/* Hero Content */}
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col gap-4 sm:gap-6"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary">
                  Our Medical Transfer
                  <span className="text-primary"> Services</span>
                </h1>
                <p className="text-base sm:text-lg text-gray-600">
                  Specialized ambulance services for safe and reliable patient transfers to SCB Medical College, backed by experienced medical professionals and modern equipment.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    as={Link}
                    href="/contact"
                    className="bg-primary text-white font-medium px-6 sm:px-8 py-6 w-full sm:w-auto"
                    size="lg"
                    radius="full"
                  >
                    Contact Us
                  </Button>
                  <Button
                    as={Link}
                    href="tel:9437077773"
                    className="bg-white text-secondary border-2 border-secondary hover:bg-secondary hover:text-white font-medium px-6 sm:px-8 py-6 w-full sm:w-auto"
                    size="lg"
                    radius="full"
                    startContent={<Phone className="w-5 h-5" />}
                  >
                    9437077773
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  <Image
                    src="/images/ambulance.png"
                    alt="Ambulance Service"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 right-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-1/2 left-1/2 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-3xl"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive medical transfer services with a focus on patient safety and comfort.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Ambulance,
                title: "Advanced Life Support",
                description: "Fully equipped ambulances with advanced life support systems and monitoring equipment.",
                color: "primary"
              },
              {
                icon: HeartPulse,
                title: "Critical Care Transfer",
                description: "Specialized care for critical patients during transfer with expert medical staff.",
                color: "secondary"
              },
              {
                icon: Stethoscope,
                title: "Medical Supervision",
                description: "Continuous medical supervision by qualified healthcare professionals.",
                color: "primary"
              },
              {
                icon: Clock,
                title: "24/7 Availability",
                description: "Round-the-clock service for emergency medical transfers through proper channels.",
                color: "secondary"
              },
              {
                icon: Shield,
                title: "Safe Transport",
                description: "Ensuring patient safety with modern equipment and trained staff.",
                color: "primary"
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Experienced medical team trained in emergency care and patient transfer.",
                color: "secondary"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-14 h-14 ${service.color === "primary" ? "bg-primary/10" : "bg-secondary/10"} rounded-xl flex items-center justify-center mb-4`}>
                  <service.icon className={`w-7 h-7 ${service.color === "primary" ? "text-primary" : "text-secondary"}`} />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Process */}
      <div className="w-full bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              Our Service Process
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A streamlined process to ensure efficient and safe patient transfers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                step: "01",
                title: "Request Received",
                description: "Transfer request received from authorized medical facility."
              },
              {
                step: "02",
                title: "Verification",
                description: "Verification of transfer documents and patient requirements."
              },
              {
                step: "03",
                title: "Ambulance Dispatch",
                description: "Appropriate ambulance dispatched with medical team."
              },
              {
                step: "04",
                title: "Safe Transfer",
                description: "Safe transfer to SCB Medical College with proper care."
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 relative z-10">
                  <div className="text-5xl font-bold text-primary/20 mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600">
                    {process.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-8 h-8 z-0">
                    <svg className="w-full h-full text-primary/30" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-6 sm:p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
                  Need Our Services?
                </h2>
                <p className="text-gray-600 mb-6">
                  Contact us for authorized medical transfers to SCB Medical College. Available 24/7 for emergency transfers.
                </p>
                <Button
                  as={Link}
                  href="/contact"
                  className="bg-primary text-white font-medium px-6 sm:px-8 py-6 w-full sm:w-auto"
                  size="lg"
                  radius="full"
                >
                  Contact Us Now
                </Button>
              </div>
              <div className="relative">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  <Image
                    src="/images/ambulance.png"
                    alt="Contact Us"
                    fill
                    className="object-contain"
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 right-1/2 w-[300px] h-[300px] bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -z-10 bottom-1/2 left-1/2 w-[200px] h-[200px] bg-secondary/10 rounded-full blur-3xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 