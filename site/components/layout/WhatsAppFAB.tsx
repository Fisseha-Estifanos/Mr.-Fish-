"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppFAB() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip automatically on mobile after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile) setShowTooltip(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fab-slide-in fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      style={{ isolation: "isolate" }}
    >
      {/* Tooltip */}
      {showTooltip && (
        <div
          className="rounded-xl px-4 py-3 text-sm shadow-lg max-w-[220px] text-right"
          style={{
            background: "var(--color-surface-raised)",
            border: "1px solid var(--color-border)",
            color: "var(--color-text-primary)",
          }}
        >
          <p className="font-medium">Chat with Mr. Fish on WhatsApp →</p>
          <p className="text-xs mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
            Typically replies within a few hours.
          </p>
        </div>
      )}

      {/* FAB button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Mr. Fish on WhatsApp"
        title="Message me directly on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full text-white shadow-lg transition-transform duration-200 hover:scale-[1.08] fab-pulse"
        style={{ background: "var(--color-whatsapp)" }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle size={26} strokeWidth={2} />
      </a>
    </div>
  );
}
