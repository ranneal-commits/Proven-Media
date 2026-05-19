import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface CTAProps {
  href: string;
  ctaLocation?: string;
  tier?: string;
  children: React.ReactNode;
  className?: string;
}

const buildHref = (baseHref: string, ctaLocation?: string, tier?: string) => {
  const [path, search] = baseHref.split("?");
  const params = new URLSearchParams(search || "");
  if (ctaLocation) params.set("cta", ctaLocation);
  if (tier) params.set("tier", tier);
  const queryString = params.toString();
  return queryString ? `${path}?${queryString}` : path;
};

const trackEvent = (eventName: string, params?: Record<string, any>) => {
  if (typeof window !== "undefined" && typeof (window as unknown as any).gtag === "function") {
    (window as unknown as any).gtag("event", eventName, params);
  }
};

export const PrimaryCTA: React.FC<CTAProps> = ({
  href,
  ctaLocation,
  tier,
  children,
  className = "",
}) => {
  const navigate = useNavigate();
  const finalHref = buildHref(href, ctaLocation, tier);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent("book_strategy_call_click", {
      cta_location: ctaLocation || "unknown",
      tier: tier || "none",
    });

    setTimeout(() => {
      if (href.startsWith("http")) {
        window.location.href = finalHref;
      } else {
        navigate(finalHref);
      }
    }, 100);
  };

  const aClassName = `inline-flex items-center justify-center bg-[#1e5bb8] text-white py-4 px-8 rounded-md font-semibold min-h-[48px] hover:bg-[#154691] transition-colors duration-200 ${className}`;

  if (href.startsWith("http")) {
    return (
      <a href={finalHref} onClick={handleClick} className={aClassName}>
        {children}
      </a>
    );
  }

  return (
    <a href={finalHref} onClick={handleClick} className={aClassName}>
      {children}
    </a>
  );
};

export const SecondaryCTA: React.FC<CTAProps> = ({
  href,
  ctaLocation,
  tier,
  children,
  className = "",
}) => {
  const navigate = useNavigate();
  const finalHref = buildHref(href, ctaLocation, tier);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackEvent("get_free_audit_click", {
      cta_location: ctaLocation || "unknown",
    });

    setTimeout(() => {
      if (href.startsWith("http")) {
        window.location.href = finalHref;
      } else {
        navigate(finalHref);
      }
    }, 100);
  };

  const aClassName = `inline-flex items-center justify-center bg-transparent border-2 border-[#1e5bb8] text-[#1e5bb8] py-4 px-8 rounded-md font-semibold min-h-[48px] hover:bg-[#1e5bb8] hover:text-white transition-colors duration-200 ${className}`;

  if (href.startsWith("http")) {
    return (
      <a href={finalHref} onClick={handleClick} className={aClassName}>
        {children}
      </a>
    );
  }

  return (
    <a href={finalHref} onClick={handleClick} className={aClassName}>
      {children}
    </a>
  );
};
