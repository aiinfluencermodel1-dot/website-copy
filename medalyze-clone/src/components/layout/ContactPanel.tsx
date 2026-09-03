"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ContactPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const fields = [
  { label: "First Name", required: true, placeholder: "Type in your first name", type: "text" },
  { label: "Last Name", required: true, placeholder: "Type in your last name", type: "text" },
  { label: "Email", required: true, placeholder: "Type in your email", type: "email" },
  { label: "Company", required: true, placeholder: "Type in your company name", type: "text" },
  { label: "Phone", required: false, placeholder: "Type in your phone number", type: "tel" },
  { label: "Title / Role", required: false, placeholder: "Type in your title", type: "text" },
  { label: "Message", required: false, placeholder: "Type in your message", type: "textarea" },
];

export default function ContactPanel({ isOpen, onClose }: ContactPanelProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[99999] overflow-auto bg-black/80 px-4 py-12 md:px-8 md:py-24">
      <button
        onClick={onClose}
        aria-label="Close"
        className="fixed right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10 hover:text-[#a8f4ff]"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2">
        {/* Left — accent column with stacked heading */}
        <div
          className="hidden flex-col items-center justify-center px-8 py-16 text-center text-white md:flex"
          style={{ backgroundColor: "#3351f1" }}
        >
          <h2 className="heading-cta !text-white">
            Let&apos;s
            <br />
            <span className="inline-block pl-[3rem]">&nbsp;get</span>
            <br />
            <span className="inline-block pl-[1.5rem]">&nbsp;in</span>
            <br />
            <span className="inline-block pl-[1.5rem]">&nbsp;touch</span>
          </h2>
        </div>

        {/* Right — form */}
        <div className="bg-white px-6 py-12 md:px-12">
          {submitted ? (
            <div className="flex h-full min-h-[50vh] items-center justify-center">
              <p className="max-w-sm text-center text-lg text-black">
                Thank you! Your submission has been received!
              </p>
            </div>
          ) : (
            <>
              <h3 className="heading-h3 !text-black">
                Drop in your information below and we&apos;ll be in touch.
              </h3>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                {fields.map((f) => (
                  <div key={f.label}>
                    <label className="mb-1 block text-[0.8rem] font-medium text-black">
                      {f.label}
                      {f.required && <span className="text-red-500"> *</span>}
                    </label>
                    {f.type === "textarea" ? (
                      <textarea
                        rows={4}
                        placeholder={f.placeholder}
                        className="w-full resize-none rounded border border-[#ededed] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
                      />
                    ) : (
                      <input
                        type={f.type}
                        required={f.required}
                        placeholder={f.placeholder}
                        className="w-full rounded border border-[#ededed] bg-[#f8f8f8] px-4 py-3 text-sm text-black outline-none transition-colors focus:border-[#a8f4ff] focus:ring-1 focus:ring-[#a8f4ff]"
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  className="btn btn-v2 w-full justify-center !rounded-lg py-4 text-base"
                >
                  Submit Form
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
