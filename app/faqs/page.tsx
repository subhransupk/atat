"use client";

import { motion } from "framer-motion";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { Search, Phone, Mail, MapPin } from "lucide-react";

// FAQ Categories and their questions
const faqCategories = [
  {
    category: "General Information",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        question: "What services does Adidev Tours And Travels provide?",
        answer: "We provide specialized ambulance services for patient transfers from government medical facilities to SCB Medical College, Cuttack. Our services include advanced life support, critical care transfer, and medical supervision during transport."
      },
      {
        question: "How can I book your ambulance service?",
        answer: "Our ambulance services can only be booked through authorized government medical facilities. The referring facility needs to contact us with proper documentation and patient details."
      },
      {
        question: "Do you provide direct services to the public?",
        answer: "No, our services are exclusively for patient transfers from government medical facilities to SCB Medical College, Cuttack, through proper referral channels."
      }
    ]
  },
  {
    category: "Services & Equipment",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    questions: [
      {
        question: "What types of ambulances do you provide?",
        answer: "We provide Basic Life Support (BLS), Advanced Life Support (ALS), and Patient Transport ambulances, each equipped with specific medical facilities based on patient needs."
      },
      {
        question: "What medical equipment is available in your ambulances?",
        answer: "Our ambulances are equipped with essential medical equipment including oxygen support, monitoring devices, emergency medications, and life-saving equipment based on the ambulance type."
      },
      {
        question: "Do you have trained medical staff?",
        answer: "Yes, all our ambulances are staffed with qualified healthcare professionals trained in emergency care and patient transfer protocols."
      }
    ]
  },
  {
    category: "Operations & Timing",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    questions: [
      {
        question: "What are your operating hours?",
        answer: "We operate 24/7, providing round-the-clock service for emergency medical transfers through proper channels."
      },
      {
        question: "What is your response time?",
        answer: "We prioritize quick response times and typically dispatch ambulances immediately upon receiving authorized transfer requests from medical facilities."
      },
      {
        question: "Do you operate on holidays?",
        answer: "Yes, our services are available 365 days a year, including all holidays and weekends."
      }
    ]
  }
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter FAQs based on search query and selected category
  const filteredFAQs = faqCategories
    .filter(category => 
      selectedCategory === "all" || category.category === selectedCategory
    )
    .map(category => ({
      ...category,
      questions: category.questions.filter(
        qa => 
          qa.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          qa.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }))
    .filter(category => category.questions.length > 0);

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
              <span className="text-gray-700">FAQs</span>
            </nav>

            {/* Hero Content */}
            <div className="text-center max-w-3xl mx-auto">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-secondary mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Frequently Asked <span className="text-primary">Questions</span>
              </motion.h1>
              <motion.p 
                className="text-gray-600 text-lg mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Find answers to common questions about our medical transfer services and operations.
              </motion.p>

              {/* Search Bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-xl mx-auto"
              >
                <Input
                  placeholder="Search FAQs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  startContent={<Search className="text-gray-400" />}
                  size="lg"
                  radius="full"
                  className="w-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Categories */}
      <div className="w-full">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Category Tabs */}
          <motion.div 
            className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setSelectedCategory("all")}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === "all"
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Categories
            </button>
            {faqCategories.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category.category}
              </button>
            ))}
          </motion.div>

          {/* FAQ Accordion */}
          <div className="grid gap-6 sm:gap-8">
            {filteredFAQs.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-secondary">
                    {category.category}
                  </h2>
                </div>

                <div className="grid gap-3 sm:gap-4">
                  {category.questions.map((qa, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <h3 className="text-lg font-semibold text-secondary mb-3">
                        {qa.question}
                      </h3>
                      <p className="text-gray-600">
                        {qa.answer}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gradient-to-br from-white via-primary/5 to-secondary/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please contact us using the information below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Phone,
                title: "Call Us",
                info: "9437077773",
                link: "tel:9437077773"
              },
              {
                icon: Mail,
                title: "Email Us",
                info: "adidevtourstravels@gmail.com",
                link: "mailto:adidevtourstravels@gmail.com"
              },
              {
                icon: MapPin,
                title: "Visit Us",
                info: "HIG 224, Kanan Vihar Phase-1, Chandrasekharpur, Bhubaneswar",
                link: "https://maps.google.com"
              }
            ].map((contact, index) => (
              <motion.a
                key={contact.title}
                href={contact.link}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-center group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <contact.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {contact.title}
                </h3>
                <p className="text-gray-600">
                  {contact.info}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 