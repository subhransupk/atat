"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the data to your backend
      // For now, we'll just log it and show a success message
      console.log("Form submitted:", formData);
      alert("Thank you for your message. We will get back to you soon!");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-primary/5 via-white to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col gap-4">
            {/* Breadcrumb */}
            <nav className="flex gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-700">Contact</span>
            </nav>

            {/* Hero Content */}
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Get in <span className="text-primary">Touch</span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Contact us for authorized medical transfers to SCB Medical College. We're available 24/7 for emergency transfers.
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: Phone,
                title: "Phone Number",
                info: "9437077773",
                subInfo: "Available 24/7 for emergencies",
                link: "tel:9437077773"
              },
              {
                icon: Mail,
                title: "Email Address",
                info: "adidevtourstravels@gmail.com",
                subInfo: "Send us your queries anytime",
                link: "mailto:adidevtourstravels@gmail.com"
              },
              {
                icon: MapPin,
                title: "Location",
                info: "HIG 224, Kanan Vihar Phase-1",
                subInfo: "Chandrasekharpur, Bhubaneswar",
                link: "https://maps.google.com"
              },
              {
                icon: Clock,
                title: "Working Hours",
                info: "24 Hours / 7 Days",
                subInfo: "Including holidays",
                link: "#"
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-900 font-medium">
                  {contact.info}
                </p>
                <p className="text-gray-500 text-sm">
                  {contact.subInfo}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="w-full bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm order-2 lg:order-1"
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    type="text"
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter your name"
                    size="lg"
                    value={formData.fullName}
                    onChange={handleChange}
                    isRequired
                  />
                  <Input
                    type="email"
                    label="Email Address"
                    name="email"
                    placeholder="Enter your email"
                    size="lg"
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                  />
                </div>
                <Input
                  type="tel"
                  label="Phone Number"
                  name="phone"
                  placeholder="Enter your phone number"
                  size="lg"
                  value={formData.phone}
                  onChange={handleChange}
                  isRequired
                />
                <Input
                  type="text"
                  label="Subject"
                  name="subject"
                  placeholder="How can we help you?"
                  size="lg"
                  value={formData.subject}
                  onChange={handleChange}
                  isRequired
                />
                <Textarea
                  label="Message"
                  name="message"
                  placeholder="Type your message here..."
                  minRows={4}
                  value={formData.message}
                  onChange={handleChange}
                  isRequired
                />
                <Button
                  type="submit"
                  className="w-full bg-primary text-white font-medium"
                  size="lg"
                  endContent={<Send className="w-4 h-4" />}
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="h-[300px] sm:h-[400px] lg:h-full rounded-2xl overflow-hidden shadow-sm order-1 lg:order-2"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.2448941889654!2d85.81974731493582!3d20.350429986367497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1908e064769e73%3A0x9e9e17f0f84c8e39!2sKanan%20Vihar%20Phase%201%2C%20Chandrasekharpur%2C%20Bhubaneswar%2C%20Odisha%20751016!5e0!3m2!1sen!2sin!4v1645510615000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-100"
          >
            <h2 className="text-2xl font-semibold text-secondary mb-4">
              Important Notice
            </h2>
            <p className="text-gray-600">
              Our ambulance service is exclusively available for patient transfers from government medical facilities to SCB Medical College, Cuttack through proper referral channels. We do not provide direct services to the public. For emergency transfers, please ensure all required documentation is prepared through the referring medical facility.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 