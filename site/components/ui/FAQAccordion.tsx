"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/data/faq";

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden transition-all duration-250"
            style={{
              border: `1px solid ${isOpen ? "var(--color-accent)" : "var(--color-border)"}`,
              background: "var(--color-surface)",
            }}
          >
            <button
              className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-trigger-${item.id}`}
              onClick={() => toggle(item.id)}
            >
              <span className="flex items-start gap-3">
                <span
                  className="text-sm font-bold flex-shrink-0 mt-0.5"
                  style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--color-accent)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                  {item.question}
                </span>
              </span>
              <ChevronDown
                size={18}
                className="flex-shrink-0 transition-transform duration-250 mt-0.5"
                style={{
                  color: "var(--color-text-secondary)",
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-trigger-${item.id}`}
              hidden={!isOpen}
            >
              <div
                className="px-6 pb-5 pl-[3.25rem] text-sm leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
