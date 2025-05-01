import React from "react";

const PrivacyAndPolicy = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200 mb-4 tracking-tight">
            Privacy & Policy
          </h1>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        </div>

        {/* Section: General Rental Payments */}
        <div className="mb-8 bg-gradient-to-b from-zinc-800/90 to-zinc-800/70 p-8 rounded-2xl shadow-2xl border border-zinc-700/50 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
            General Rental Payments
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>• All rental payments must be made via <span className="text-yellow-400 font-semibold">Cash</span> or <span className="text-yellow-400 font-semibold">Bank Transfer</span>.</li>
            <li>• For outstation trips, a <span className="text-yellow-400 font-semibold">30% non-refundable advance</span> is required. The remaining balance will be collected at pickup.</li>
            <li>• Please secure your belongings before leaving the vehicle. Vaishnavi Tours is not responsible for any loss.</li>
            <li>• Delays due to traffic, breakdowns, weather, or other external factors are not Vaishnavi Tours' responsibility.</li>
          </ul>
        </div>

        {/* Section: Online Payments */}
        <div className="mb-8 bg-gradient-to-b from-zinc-800/90 to-zinc-800/70 p-8 rounded-2xl shadow-2xl border border-zinc-700/50 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
            Online Payments
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>• If online payment fails, contact Vaishnavi Tours at least <span className="text-yellow-400 font-semibold">72 hours before</span> departure for alternate options.</li>
            <li>• Payments may take <span className="text-yellow-400 font-semibold">24–36 hours</span> to reflect. Bookings are confirmed only after payment is received.</li>
          </ul>
        </div>

        {/* Section: Complete Tour Packages */}
        <div className="mb-8 bg-gradient-to-b from-zinc-800/90 to-zinc-800/70 p-8 rounded-2xl shadow-2xl border border-zinc-700/50 backdrop-blur-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500 mb-6">
            Complete Tour Packages (Hotels + Car)
          </h2>
          <ul className="space-y-4 text-gray-300">
            <li>• Payments accepted via <span className="text-yellow-400">Cash</span>, <span className="text-yellow-400">Bank Transfer</span>, <span className="text-yellow-400">Credit/Debit Card</span>, and <span className="text-yellow-400">Net Banking</span>.</li>
            <li>• <span className="text-yellow-400 font-semibold">60% non-refundable advance</span> is required. Balance to be paid at pickup.</li>
            <li>• Vaishnavi Tours is not responsible for lost items in cabs or hotels.</li>
            <li>• Vaishnavi Tours may modify itineraries for passenger safety during emergencies.</li>
            <li>• Carry valid ID (e.g., Passport) during travel and check-in. Issues from invalid IDs are not our responsibility.</li>
            <li>• Hotel check-in is at <span className="text-yellow-400">1 PM</span>, check-out at <span className="text-yellow-400">11 AM</span>. Early/late check-in may cost extra.</li>
          </ul>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 pb-8">
          <div className="bg-zinc-800/30 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/30">
            <p className="text-sm text-gray-400">
              © {currentYear}{' '}
              <a
                href="https://vaishnavitours.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:underline"
              >
                Vaishnavi Tours
              </a>. All Rights Reserved.
            </p>
          </div>
        </footer>
      </div>

      {/* Blurred Gradient Backgrounds */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-[800px] h-[800px] bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
