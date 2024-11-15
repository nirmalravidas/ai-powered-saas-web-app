// pages/privacy-policy.tsx
import { APP_NAME } from '@/utils';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 text-white">
      <h1 className="text-3xl font-bold mb-4 ">Privacy Policy</h1>
      
      <p className="mb-4">
        Welcome to {APP_NAME} (the &quot;Platform,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). This Privacy Policy explains how we collect, 
        use, share, and protect information about our users (“you,” “your”) when you use our image generation SaaS Platform. 
        By using our Platform, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">1. Information We Collect</h2>
      <p className="mb-4">
        We collect various types of information in order to provide and improve our services, including:
      </p>

      <h3 className="text-xl font-semibold mb-2 ">a) Personal Information</h3>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Account Information</strong>: When you create an account, we collect your name, email address, and other registration details.</li>
        <li><strong>Payment Information</strong>: Payments are securely handled by third-party processors like Razorpay.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">b) Usage Information</h3>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Log Data</strong>: We collect IP addresses, browser types, and other log data to analyze usage and maintain security.</li>
        <li><strong>Platform Activity</strong>: Data about your feature usage, actions (e.g., image generations), and activity frequency/duration.</li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">c) Generated Content</h3>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Generated Images</strong>: We may store generated images to provide access and enhance our models.</li>
        <li><strong>Metadata</strong>: Generation parameters and other metadata help us improve the Platform.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">2. How We Use Your Information</h2>
      <p className="mb-4">
        Collected information is used for purposes like service delivery, personalization, billing, and analytics.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">3. How We Share Your Information</h2>
      <p className="mb-4">
        We do not share personal information with third parties, except in cases such as service providers, legal compliance, business transfers, or with your consent.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">4. Data Security</h2>
      <p className="mb-4">
        We implement industry-standard security measures to protect your data, but no method is 100% secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">5. Data Retention</h2>
      <p className="mb-4">
        Personal data is retained only as long as necessary or as required by law. Account deletion requests will be honored according to our policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">6. Your Rights and Choices</h2>
      <p className="mb-4">
        You may have rights like data access, correction, deletion, and opting out of certain communications. Contact us to exercise these rights.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">7. Cookies and Tracking</h2>
      <p className="mb-4">
        We use cookies to enhance your experience. You can control cookies through browser settings.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">8. Children’s Privacy</h2>
      <p className="mb-4">
        Our Platform is not intended for children under 18, and we do not knowingly collect their data.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">9. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy. Changes will be posted here with a new effective date.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3 ">10. Contact Us</h2>
      <p className="mb-4">
        For questions, please contact us at <a href="mailto:contact@yourdomain.com" className=" underline">contact@{APP_NAME}.com</a> or at our address.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
