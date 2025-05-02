import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Star } from "lucide-react";

const FeedBack = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comments, setComments] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const feedbackLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];

  const handleEmailSend = () => {
    const serviceID = "service_yqjy5gk"; 
    const templateID = "template_5evkann"; 
    const publicKey = "-KAL8dhf9nwGDKtZQ"; 

    const formData = {
      name,
      email,
      rating: feedbackLabels[rating] || "No Rating",
      comments,
    };

    emailjs.init(publicKey);

    emailjs
      .send(serviceID, templateID, formData)
      .then(() => {
        alert("Feedback sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending feedback:", error);
        alert(`Failed to send feedback. Error: ${error.text || error}`);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    handleEmailSend();

    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setRating(0);
      setComments("");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0A0A0A] to-[#111] text-white">
      <div className="container mx-auto px-4 py-12 relative">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#B8860B]/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FFD700]/20 rounded-full blur-[128px] animate-pulse" />
        </div>

        {/* Main content */}
        <div className="relative max-w-xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block p-4 rounded-full bg-gradient-to-br from-[#B8860B] to-[#FFD700] shadow-[0_0_40px_rgba(184,134,11,0.5)] mb-6 animate-bounce">
              <Star className="w-12 h-12 text-black" />
            </div>
            <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#DAA520] bg-clip-text text-transparent animate-text">
              Your Feedback Matters
            </h1>
            <p className="text-gray-400 text-lg">
              Help us enhance your luxury travel experience
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-[#B8860B]/30 shadow-[0_8px_32px_rgba(184,134,11,0.25)]">
              {/* Shimmer */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 w-[200%] translate-x-[-50%] pointer-events-none bg-gradient-to-r from-transparent via-[#FFD700]/10 to-transparent animate-[shimmer_3s_infinite_linear]" />
              </div>

              {/* Form fields */}
              <div className="relative space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#FFD700] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#B8860B]/20 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 text-white placeholder:text-gray-500 transition-all duration-200 hover:shadow-lg"
                    placeholder="Your name"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#FFD700] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#B8860B]/20 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 text-white placeholder:text-gray-500 transition-all duration-200 hover:shadow-lg"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-[#FFD700] mb-3">
                    Rating
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onMouseEnter={() => setHover(star)}
                        onMouseLeave={() => setHover(0)}
                        onClick={() => setRating(star)}
                        className="transition-transform duration-200 hover:scale-110"
                      >
                        <Star
                          className={`w-8 h-8 transition-colors duration-200 ${
                            (hover || rating) >= star
                              ? "fill-[#FFD700] text-[#FFD700]"
                              : "fill-white/5 text-white/20"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-3 min-w-[80px] text-sm text-[#FFD700]">
                      {feedbackLabels[hover || rating]}
                    </span>
                  </div>
                </div>

                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-[#FFD700] mb-2">
                    Your Message
                  </label>
                  <textarea
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-[#B8860B]/20 focus:border-[#FFD700] focus:ring-2 focus:ring-[#FFD700]/50 text-white placeholder:text-gray-500 transition-all duration-200 resize-none hover:shadow-lg"
                    placeholder="Share your experience with us..."
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="w-full py-4 rounded-xl font-semibold text-lg bg-gradient-to-r from-[#B8860B] to-[#FFD700] text-black hover:from-[#FFD700] hover:to-[#B8860B] transform hover:scale-[1.02] transition-all duration-200 disabled:opacity-50 shadow-lg hover:shadow-[#FFD700]/20"
                >
                  {submitted ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Thank you!
                    </div>
                  ) : (
                    "Send Feedback"
                  )}
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
};

export default FeedBack;
