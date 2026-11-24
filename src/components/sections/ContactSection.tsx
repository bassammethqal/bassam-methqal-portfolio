"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { portfolioData } from "@/data/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  Instagram,
  Mail,
  MessageCircle,
  Activity,
  Sparkles,
  Github,
  ExternalLink,
} from "lucide-react";

export function ContactSection() {
  const { t, language } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedWhatsapp, setCopiedWhatsapp] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = portfolioData.profile.email;
  const whatsapp = portfolioData.profile.whatsapp;

  const handleCopyEmail = () => {
    if (email) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyWhatsapp = () => {
    if (whatsapp) {
      navigator.clipboard.writeText(whatsapp);
      setCopiedWhatsapp(true);
      setTimeout(() => setCopiedWhatsapp(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      const data = await res.json();

      if (res.ok && data?.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      clearTimeout(timeoutId);
      setFormStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-slate-50 dark:bg-[#080B11] border-t border-slate-200 dark:border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Background Watermark */}
      <div className="absolute top-12 start-6 sm:start-12 text-[10rem] sm:text-[16rem] font-mono font-black text-slate-900/[0.03] dark:text-white/[0.02] select-none pointer-events-none -z-0 leading-none">
        07
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          number={t.contact.sectionNumber}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
          lead={t.contact.lead}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Direct Contact & Details Dossier */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold uppercase tracking-widest block">
                [ COM // DIRECT TELEMETRY DISPATCH ]
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-950 dark:text-white tracking-tight font-serifDisplay">
                {t.contact.directTitle}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {t.contact.directDesc}
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              {/* Email (Clickable mailto + Copy button) */}
              {email ? (
                <div className="group p-4 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.2)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 transition-all duration-300">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-[#2563EB] dark:text-[#3B82F6] group-hover:border-[#2563EB]/50 transition-colors shrink-0 shadow-xs">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        {t.contact.info.emailLabel}
                      </span>
                      <a
                        href={`mailto:${email}`}
                        dir="ltr"
                        className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors break-all sm:truncate block font-mono"
                        title={email}
                      >
                        {email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="self-end sm:self-auto inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#080B11] hover:bg-slate-200 dark:hover:bg-[#131B2D] border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/40 transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
                    aria-label="Copy email address"
                    title={t.contact.info.emailLabel}
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                        <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">{t.contact.info.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>{t.contact.info.copy}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : null}

              {/* WhatsApp Account Card */}
              {whatsapp ? (
                <div className="group p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:cyber-card-shadow hover:border-[#2563EB]/50 hover:shadow-[0_15px_35px_rgba(37,99,235,0.2)] flex items-center justify-between gap-4 transition-all duration-300">
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-[#2563EB] dark:text-[#3B82F6] group-hover:border-[#2563EB]/50 transition-colors shrink-0 shadow-xs">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                        {t.contact.info.whatsappLabel}
                      </span>
                      <a
                        href="https://wa.me/967773461637"
                        target="_blank"
                        rel="noopener noreferrer"
                        dir="ltr"
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-colors font-mono inline-block"
                        title="Chat on WhatsApp"
                      >
                        {whatsapp}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyWhatsapp}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white bg-slate-100 dark:bg-[#080B11] hover:bg-slate-200 dark:hover:bg-[#131B2D] border border-slate-200 dark:border-white/10 hover:border-[#2563EB]/40 transition-all cursor-pointer shrink-0 shadow-xs active:scale-95"
                    aria-label="Copy WhatsApp handle"
                    title={t.contact.info.whatsappLabel}
                  >
                    {copiedWhatsapp ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#2563EB] dark:text-[#3B82F6]" />
                        <span className="text-[#2563EB] dark:text-[#60A5FA] font-bold">{t.contact.info.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" />
                        <span>{t.contact.info.copy}</span>
                      </>
                    )}
                  </button>
                </div>
              ) : null}

              {/* Location Stamp */}
              <div className="p-4 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:cyber-card-shadow flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-[#2563EB] dark:text-[#3B82F6] shrink-0 shadow-xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    {t.contact.info.locationLabel}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-mono flex flex-wrap items-center gap-1.5">
                    <span>{language === "ar" ? "اليمن — مأرب" : "Marib, Yemen"}</span>
                    <span dir="ltr" className="text-[#2563EB] dark:text-[#60A5FA]">(15°26&apos;N 45°19&apos;E)</span>
                  </span>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 backdrop-blur-xl shadow-sm dark:cyber-card-shadow flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-[#080B11] border border-slate-200 dark:border-white/10 text-[#2563EB] dark:text-[#3B82F6] shrink-0 mt-0.5 shadow-xs">
                  <Activity className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
                    {t.contact.info.availabilityLabel}
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mt-1">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2563EB]" />
                    </span>
                    {t.contact.info.availabilityValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Channels Quick Direct Links */}
            <div className="pt-6 border-t border-slate-200 dark:border-white/10 space-y-3">
              <span className="text-[11px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest block">
                [ {t.contact.socialTitle} ]
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/bassammethqal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-900 dark:text-white hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-all duration-200 shadow-xs"
                >
                  <Github className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>GitHub (@bassammethqal)</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
                <a
                  href="https://www.instagram.com/bassam.methqal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-[#0D131F] border border-slate-200 dark:border-white/10 text-xs font-bold text-slate-900 dark:text-white hover:border-[#2563EB]/50 hover:text-[#2563EB] dark:hover:text-[#60A5FA] transition-all duration-200 shadow-xs"
                >
                  <Instagram className="w-4 h-4 text-[#2563EB] dark:text-[#3B82F6]" />
                  <span>Instagram (@bassam.methqal)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Interactive Dispatch Terminal Form with Repeating Scroll */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-12 rounded-3xl bg-white/95 dark:bg-[#0D131F]/80 border border-slate-200/80 dark:border-white/10 border-s-4 border-s-[#2563EB] backdrop-blur-xl shadow-lg dark:cyber-card-shadow relative overflow-hidden">
              <div className="flex items-center justify-between pb-5 border-b border-slate-200 dark:border-white/10 mb-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3B82F6] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563EB]" />
                  </span>
                  <span className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    DISPATCH_CONSOLE // DIRECT
                  </span>
                </div>
                <span className="text-[10px] font-mono text-[#2563EB] dark:text-[#60A5FA] font-bold">
                  ENCRYPTED_TRANSMISSION
                </span>
              </div>

              {formStatus === "success" ? (
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-[#080B11] border border-[#2563EB]/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#2563EB]/10 dark:bg-[#2563EB]/15 border border-[#2563EB]/30 dark:border-[#2563EB]/40 text-[#2563EB] dark:text-[#3B82F6] flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-950 dark:text-white font-thmanyah">
                    {t.contact.form.successMessage}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {language === "ar"
                      ? "تم استلام رسالتك بنجاح، وسأقوم بالرد عليك في أقرب وقت ممكن."
                      : "Your message has been dispatched successfully. I will get back to you shortly."}
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    variant="secondary"
                    size="sm"
                  >
                    {language === "ar" ? "إرسال رسالة أخرى" : "Send Another"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === "error" && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#2563EB]/10 border border-[#2563EB]/30 text-sm text-slate-800 dark:text-slate-200 space-y-3">
                      <p className="font-bold text-slate-950 dark:text-white">
                        {language === "ar"
                          ? "لضمان وصول رسالتك فوراً وبشكل مباشر، يمكنك إرسالها الآن بضغطة زر:"
                          : "To guarantee instant delivery, send your pre-filled message directly via:"}
                      </p>
                      <div className="flex flex-wrap items-center gap-2.5">
                        <a
                          href={`mailto:${email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`الاسم: ${formData.name}\nالبريد: ${formData.email}\n\n${formData.message}`)}`}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-xs font-bold shadow-[0_0_15px_rgba(37,99,235,0.35)] transition-all"
                        >
                          <Mail className="w-3.5 h-3.5" />
                          <span>{language === "ar" ? "إرسال عبر الإيميل (Gmail)" : "Send via Email"}</span>
                        </a>
                        <a
                          href={`https://wa.me/967773461637?text=${encodeURIComponent(`مرحباً بسام،\nالاسم: ${formData.name}\nالبريد: ${formData.email}\nالموضوع: ${formData.subject}\n\n${formData.message}`)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-[#080B11] border border-slate-200 dark:border-white/15 hover:border-[#2563EB]/50 text-slate-900 dark:text-white text-xs font-bold transition-all"
                        >
                          <MessageCircle className="w-3.5 h-3.5 text-[#2563EB]" />
                          <span>{language === "ar" ? "إرسال فوري عبر واتساب" : "Send via WhatsApp"}</span>
                        </a>
                      </div>
                    </div>
                  )}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        {t.contact.form.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder={t.contact.form.name}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                        {t.contact.form.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder={t.contact.form.email}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                      {t.contact.form.subject} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder={t.contact.form.subject}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase">
                      {t.contact.form.message} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder={t.contact.form.message}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-[#080B11] border border-slate-300 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={formStatus === "submitting"}
                    icon={<Send className="w-4 h-4 rtl:rotate-180" />}
                    className="w-full"
                  >
                    {formStatus === "submitting"
                      ? t.contact.form.sending
                      : t.contact.form.send}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
