import React, { useState } from "react";
import {
  Send,
  Loader2,
  CarTaxiFrontIcon as Taxi,
  Phone,
  Mail,
  User,
  MessageSquare,
  CheckCircle,
} from "lucide-react";
import emailjs from "@emailjs/browser";


export default function Ans() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    enquiryType: "Rates",
    query: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({});

    try {
      const serviceID = "service_yqjy5gk";
      const templateID = "template_5evkann";
      const publicKey = "-KAL8dhf9nwGDKtZQ";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        contact_number: formData.contactNumber,
        enquiry_type: formData.enquiryType,
        message: formData.query,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitStatus({
        success: true,
        message: "Your enquiry has been submitted successfully! We'll be in touch soon.",
      });

      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        enquiryType: "Rates",
        query: "",
      });
    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmitStatus({
        success: false,
        message: "Failed to submit your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20 px-4 relative overflow-hidden font-sans">
      {/* Taxi-themed Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 right-0 h-20 opacity-5 grid grid-cols-12">
          {[...Array(24)].map((_, i) => (
            <div key={i} className={i % 2 === 0 ? "bg-yellow-400" : "bg-gray-900"}></div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 opacity-5 grid grid-cols-12">
          {[...Array(24)].map((_, i) => (
            <div key={i} className={i % 2 === 0 ? "bg-gray-900" : "bg-yellow-400"}></div>
          ))}
        </div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-2"
          style={{
            backgroundImage: `repeating-linear-gradient(
                 45deg,
                 rgba(255, 213, 0, 0.1),
                 rgba(255, 213, 0, 0.1) 10px,
                 transparent 10px,
                 transparent 20px
               )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="bg-gray-900 rounded-lg border border-gray-800 shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-8 border-b border-gray-800">
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <Taxi className="w-full h-full text-yellow-400" />
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-400 p-3 rounded-full">
                <Taxi className="h-8 w-8 text-gray-900" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white">
                  <span className="text-yellow-400">Raise</span> Enquiry
                </h2>
                <p className="text-gray-400 text-sm">Get a quote or book your ride today</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8">
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center space-x-3 ${
                  submitStatus.success
                    ? "bg-green-900/20 text-green-400 border border-green-800"
                    : "bg-red-900/20 text-red-400 border border-red-800"
                }`}
              >
                {submitStatus.success ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <div className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">!</div>
                )}
                <p className="text-sm">{submitStatus.message}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<User className="h-4 w-4 mr-2 text-yellow-400" />}
                  label="Your Name:"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <InputField
                  icon={<Mail className="h-4 w-4 mr-2 text-yellow-400" />}
                  label="Your Email:"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Phone + Enquiry */}
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  icon={<Phone className="h-4 w-4 mr-2 text-yellow-400" />}
                  label="Contact Number:"
                  name="contactNumber"
                  type="tel"
                  value={formData.contactNumber}
                  onChange={handleChange}
                />
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-300">
                    <Taxi className="h-4 w-4 mr-2 text-yellow-400" />
                    Enquiry for:
                  </label>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-500 text-white"
                  >
                    <option value="Rates">Rates & Pricing</option>
                    <option value="Booking">Book a Taxi</option>
                    <option value="Airport">Airport Transfer</option>
                    <option value="Corporate">Corporate Account</option>
                    <option value="Other">Other Services</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-300">
                  <MessageSquare className="h-4 w-4 mr-2 text-yellow-400" />
                  Explain Your Query:
                </label>
                <textarea
                  name="query"
                  value={formData.query}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-500 text-white"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="animate-spin mr-2 h-5 w-5" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Create Enquiry
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Input
function InputField({ icon, label, name, type, value, onChange }) {
  return (
    <div className="space-y-2">
      <label className="flex items-center text-sm font-medium text-gray-300">
        {icon}
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-md focus:ring-2 focus:ring-yellow-500 text-white"
      />
    </div>
  );
}
