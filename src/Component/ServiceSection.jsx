import React, { useState } from "react";
import { Check } from "lucide-react";

const plansData = [
  {
    name: "Free",
    desc: "Have a go and test your superpowers",
    monthly: "$0",
    yearly: "$0",
    features: [
      "2 Users",
      "2 Files",
      "Public Share & Comments",
      "Chat Support",
      "New income apps",
    ],
  },
  {
    name: "Pro",
    desc: "For those who want to take it to the next level",
    monthly: "$8",
    yearly: "$80", // yearly discounted
    span: "Save $16 a year",
    features: [
      "2 Users",
      "All apps",
      "Unlimited editable exports",
      "Folders and collaboration",
      "All incoming apps",
    ],
  },
  {
    name: "Business",
    desc: "Unveil new superpowers and join the Design League",
    monthly: "$16",
    yearly: "$160", // yearly discounted
    features: [
      "All the features of pro plan",
      "Account Success Manager",
      "Single Sign-On (SSO)",
      "Co-conception program",
      "Collaboration - Soon",
    ],
  },
];

const ServiceSection = () => {
  const [billing, setBilling] = useState("monthly"); // monthly or yearly

  return (
    <section
      id="service"
      className="service-area py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Choose Plan That’s Right For You
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">
          Choose the plan that works best for you. Feel free to contact us.
        </p>

        {/* Billing toggle */}
        <div className="flex gap-2 bg-white dark:bg-gray-800 rounded-lg shadow p-2 w-max mb-10 mx-auto">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-1 rounded ${
              billing === "monthly"
                ? "bg-secondary text-white"
                : "dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          >
            Bill Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-1 rounded ${
              billing === "yearly"
                ? "bg-secondary text-white"
                : "dark:bg-gray-700 text-gray-900 dark:text-white"
            }`}
          >
            Bill Yearly
          </button>
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {plansData.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl shadow p-6 flex flex-col transition ${
                plan.name === "Pro"
                  ? "bg-green-50 dark:bg-green-900 border-2 border-green-500"
                  : "bg-white dark:bg-gray-800"
              }`}
            >
              <h3 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-center text-gray-700 dark:text-gray-300 mb-1">
                {plan.desc}
              </p>
              <p className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-2">
                {billing === "monthly" ? plan.monthly : plan.yearly}
              </p>
              {plan.span && billing === "yearly" && (
                <span className="block text-center text-fourth text-sm mb-2">
                  {plan.span}
                </span>
              )}

              <div className="grid bg-gray-200 dark:bg-gray-700 rounded-2xl p-6 mb-6">
                <ul className="mb-6 space-y-2 text-gray-600 dark:text-gray-300 mt-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check size={16} className="text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href=""
                    className={`block w-full text-center px-4 py-2 rounded-xl ${
                      plan.name === "Pro"
                        ? "bg-green-500 text-white"
                        : plan.name === "Business"
                        ? "bg-gray-50 text-black dark:bg-gray-300 dark:text-black"
                        : "bg-white dark:bg-gray-300 dark:text-black"
                    }`}
                  >
                    {plan.name === "Free"
                      ? "Signup For Free"
                      : `Go to ${plan.name}`}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
