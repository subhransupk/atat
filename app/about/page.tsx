"use client";

import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import { Card, CardBody } from "@nextui-org/card";
import { Target, Eye, Heart, Shield, Ambulance, Users, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.5 }
};

const coreValues = [
  { icon: Heart, title: "Compassion", desc: "Treating every patient with care, empathy, and understanding" },
  { icon: Shield, title: "Safety", desc: "Prioritizing patient and staff safety in every transport" },
  { icon: Award, title: "Excellence", desc: "Maintaining the highest standards in medical transport services" },
  { icon: Clock, title: "Reliability", desc: "Available 24/7 with prompt and dependable service" }
];

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full bg-gradient-to-br from-white to-default-100 py-16 md:py-20"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 text-sm mb-4"
          >
            <Link href="/" className="text-default-500 hover:text-primary">
              Home
            </Link>
            <span className="text-default-500">/</span>
            <span className="text-primary">About</span>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl"
          >
            <h1 className={title({ size: "lg" })}>About Us</h1>
            <p className="text-default-500 text-lg mt-4">
              Learn more about our authorized ambulance service for SCB Medical College, Cuttack. We are committed to providing safe and reliable medical transport services.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Main Content */}
      <section className="w-full">
        <div className="max-w-[1280px] mx-auto px-6 py-12">
          {/* Mission & Vision Section */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-primary/5 border-none hover:scale-105 transition-transform duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-primary/10 rounded-xl"
                    >
                      <Target className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold">Our Mission</h2>
                  </div>
                  <p className="text-default-500 text-lg leading-relaxed">
                    To provide exceptional medical transport services with utmost care and professionalism, ensuring safe and timely transfers for patients to SCB Medical College through authorized channels.
                  </p>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-primary/5 border-none hover:scale-105 transition-transform duration-300">
                <CardBody className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-primary/10 rounded-xl"
                    >
                      <Eye className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold">Our Vision</h2>
                  </div>
                  <p className="text-default-500 text-lg leading-relaxed">
                    To be the most trusted and reliable medical transport service provider, setting the highest standards in patient care and emergency medical transportation in Odisha.
                  </p>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>

          {/* Core Values Section */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mb-16"
          >
            <motion.div 
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-default-500 text-lg max-w-2xl mx-auto">
                The principles that guide us in delivering exceptional medical transport services
              </p>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {coreValues.map((value) => (
                <motion.div key={value.title} variants={scaleIn}>
                  <Card className="bg-primary/5 border-none hover:scale-105 transition-transform duration-300">
                    <CardBody className="p-6 text-center">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex justify-center mb-4"
                      >
                        <div className="p-3 bg-primary/10 rounded-xl">
                          <value.icon className="w-6 h-6 text-primary" />
                        </div>
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-default-500">{value.desc}</p>
                    </CardBody>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* About Service Section */}
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="bg-primary/5 border-none hover:scale-105 transition-transform duration-300">
                <CardBody className="flex flex-row items-start gap-4 p-8">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-primary/10 rounded-xl"
                  >
                    <Ambulance className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authorized Service Provider</h3>
                    <p className="text-default-500">
                      We are an authorized ambulance service provider for SCB Medical College, Cuttack. Our service is exclusively for patient transfers from government medical facilities to SCB Medical College through proper referral channels.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="bg-primary/5 border-none hover:scale-105 transition-transform duration-300">
                <CardBody className="flex flex-row items-start gap-4 p-8">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-primary/10 rounded-xl"
                  >
                    <Users className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Professional Team</h3>
                    <p className="text-default-500">
                      We maintain a fleet of well-equipped ambulances and trained medical staff to ensure safe and comfortable patient transport.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
