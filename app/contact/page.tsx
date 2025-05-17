import React from 'react';
import { ContactForm } from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-primary text-title py-25 justify-between">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-sm font-medium text-description mb-2">Contact Me</p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          I&apos;d love to hear from you
        </h1>
        <p className="text-sm text-neutral-500">
          I&apos;ll be flexible in Ho Chi Minh, Viet Nam
        </p>
      </div>
 
        <div className="flex flex-col md:flex-row justify-center items-center">
             {/* Map Section */}
              <div className="hidden md:block w-190 h-190 py-5">
                <img
                  src="/maplg.png"
                  alt="World map"
                  className="w-full h-full rounded-xl"
                />
                <div className="absolute top-[33%] left-[46%]">
                  <div className="w-8 h-8 bg-[var(--ring)] rounded-full shadow-md animate-ping" />
                  <div className="w-4 h-4 bg-[var(--accent)] border-5 border-b-blue-950 rounded-full absolute top-2 left-2" />
                </div>
              </div>

                <div>
                  <ContactForm/>
                </div>

      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <p className="text-sm text-neutral-500 mb-1">
            Our friendly team is here to help.
          </p>
          <a
            href="mailto:support@untitledui.com"
            className="text-description hover:underline text-sm"
          >
            support@untitledui.com
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Sales</h3>
          <p className="text-sm text-neutral-500 mb-1">
            Questions or queries? Get in touch!
          </p>
          <a
            href="mailto:sales@untitledui.com"
            className="text-description hover:underline text-sm"
          >
            sales@untitledui.com
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Phone</h3>
          <p className="text-sm text-neutral-500 mb-1">
            Mon–Fri from 8am to 5pm.
          </p>
          <a
            href="tel:+16560000000"
            className="text-description hover:underline text-sm"
          >
            +1 (656) 000-0000
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
