"use client";

import { statsData } from "../constants/stats";
import { Stat } from "../types";

export default function Stats() {
  return (
    <section className="py-4 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/* Section Header */}
          <div>
            <p className="section-eyebrow">
              01 · By the numbers
            </p>

            <h2
              className="font-bold tracking-tight"
              style={{
                fontSize: "clamp(20px, 3vw, 26px)",
                color: "var(--text-primary)",
              }}
            >
              A decade building scalable systems in Africa
            </h2>
          </div>

          {/* Stats Cards */}
          <div className="mt-10 grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {statsData.map((stat: Stat, index) => (
              <div
                key={index}
                className="

                  p-7
                  transition-all
                  duration-200
                  hover:-translate-y-px
                "
                style={{
                  background: "#f3f4f6",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                {/* Category */}
                <p
                  className="
                    mb-3
                    font-mono
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.1em]
                  "
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {stat.sub}
                </p>

                {/* Number */}
                <div
                  className="
                    mb-4
                    text-4xl
                    font-bold
                    tracking-tight
                  "
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {stat.value}
                </div>

                {/* Divider */}
                <div
                  className="mb-4 h-px w-full"
                  style={{
                    background: "rgba(0,0,0,0.08)",
                  }}
                />

                {/* Title */}
                <p
                  className="text-sm font-semibold"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  {stat.label}
                </p>

                {/* Description */}
                <p
                  className="text-sm leading-6"
                  style={{
                    color: "var(--text-muted)",
                  }}
                >
                  {stat.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}