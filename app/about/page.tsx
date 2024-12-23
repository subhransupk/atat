"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Shield, Clock, Award, Users, Truck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden w-full bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5">
        {/* Content */}
        <div className="relative w-full py-16 sm:py-20">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center space-x-2 text-sm mb-8">
              <Link 
                href="/"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-primary font-medium">About Us</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary">
                  Trusted Medical <span className="text-primary">Transport</span> Partner
                </h1>
                <p className="text-lg text-gray-600">
                  Providing professional and reliable ambulance services in partnership with SCB Medical College, ensuring safe and comfortable patient transfers.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-gray-700 font-medium">Certified Service</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-gray-700 font-medium">24/7 Available</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[400px] sm:h-[500px]">
                  <Image
                    src="/images/ambulance.png"
                    alt="Adidev Ambulance Service"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 w-[300px] h-[300px] -translate-x-1/2 -translate-y-1/2">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full py-16 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: Users, label: "Patients Served", value: "1000+", color: "primary" },
              { icon: Truck, label: "Ambulances", value: "50+", color: "secondary" },
              { icon: Award, label: "Years Experience", value: "15+", color: "primary" },
              { icon: Heart, label: "Success Rate", value: "99%", color: "secondary" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className={`w-12 h-12 mx-auto rounded-xl bg-${stat.color}/10 flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-secondary">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Mission & Values */}
      <section className="w-full py-16 sm:py-20">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600">
              We are committed to providing safe and professional medical transfer services with the highest standards of care and compassion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description: "To provide reliable and professional medical transfer services to patients requiring specialized care at SCB Medical College.",
                icon: Heart,
                color: "primary"
              },
              {
                title: "Our Vision",
                description: "To be the most trusted medical transfer service provider, known for excellence and patient-centric approach.",
                icon: Shield,
                color: "secondary"
              },
              {
                title: "Our Values",
                description: "Commitment to safety, professionalism, and compassionate care in every patient transfer we undertake.",
                icon: Award,
                color: "primary"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0.5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-primary transition-colors duration-300">
                  <div className={`w-14 h-14 rounded-xl bg-${item.color}/10 flex items-center justify-center mb-6`}>
                    <item.icon className={`w-7 h-7 text-${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 sm:py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600">
              Experience the difference with our professional medical transfer services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Authorized Service",
                description: "Official partnership with SCB Medical College for patient transfers",
                icon: Shield
              },
              {
                title: "Expert Medical Staff",
                description: "Highly trained professionals with extensive experience",
                icon: Users
              },
              {
                title: "Modern Equipment",
                description: "State-of-the-art medical equipment in all ambulances",
                icon: Truck
              },
              {
                title: "24/7 Availability",
                description: "Round-the-clock service for emergency transfers",
                icon: Clock
              },
              {
                title: "Safe Transfers",
                description: "Prioritizing patient safety and comfort",
                icon: Heart
              },
              {
                title: "Professional Service",
                description: "Committed to excellence in patient care",
                icon: Award
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-6 rounded-xl border border-gray-100 hover:border-primary transition-colors duration-300">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-secondary mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
