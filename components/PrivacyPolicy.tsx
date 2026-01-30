import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-slate-700">
          <p className="mb-4"><strong>Last Updated:</strong> January 30, 2026</p>
          
          <p className="mb-6">At Mission MLT, accessible from missionmlt.in, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Mission MLT and how we use it.</p>
          
          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-4">If you register on our site or purchase an ebook, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Personal Identification Information:</strong> Name, email address, and phone number.</li>
            <li><strong>Log Files:</strong> We follow a standard procedure of using log files to monitor website traffic (IP addresses, browser type, etc.).</li>
            <li><strong>Payment Data:</strong> If you purchase an ebook, payments are processed via Razorpay. We do not store your credit card details on our servers.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>To provide, operate, and maintain our web-based mock test platform.</li>
            <li>To deliver the Mission MLT ebook and exam resources.</li>
            <li>To send you updates regarding AIIMS CRE and other government job notifications.</li>
            <li>To improve and personalize your learning experience.</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">Data Storage and Security</h2>
          <p className="mb-6">We use secure, professional-grade cloud infrastructure to host our platform and store user data. We prioritize the security of your personal information and utilize encrypted protocols (HTTPS/SSL) to protect data during transmission. We are committed to using platforms that comply with international security standards, such as ISO 27001 and SOC 2.</p>
        </div>
      </div>
    </section>
  );
};