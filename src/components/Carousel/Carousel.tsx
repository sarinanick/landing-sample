import React, { useRef, useState } from "react";
import "./Carousel.css";

export type CarouselVariant = "cards" | "hero" | "compact";

export type CarouselItem = {
  value: string;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  media?: React.ReactNode;
  content?: React.ReactNode;
  action?: React.ReactNode;
};

export type CarouselProps = {
  items: CarouselItem[];
  variant?: CarouselVariant;
  ariaLabel?: string;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
};

/**
 * Persian Material Carousel
 *
 * System target:
 * - Use for horizontal content collections, product cards, banners and recommendations.
 * - Supports cards, hero and compact variants.
 * - RTL-friendly horizontal scroll with controls and dots.
 */
export function Carousel({
  items,
  variant = "cards",
  ariaLabel = "اسلایدر محتوا",
  showControls = true,
  showDots = true,
  className = "",
}: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollToIndex(index: number) {
    const viewport = viewportRef.current;
    const item = viewport?.querySelector<HTMLElement>(`[data-carousel-index="${index}"]`);
    item?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setActiveIndex(index);
  }

  function move(direction: 1 | -1) {
    const next = Math.min(Math.max(activeIndex + direction, 0), items.length - 1);
    scrollToIndex(next);
  }

  return (
    <section
      className={[
        "pm-carousel",
        `pm-carousel--${variant}`,
        className,
      ].filter(Boolean).join(" ")}
      aria-label={ariaLabel}
      data-component="Carousel"
      data-variant={variant}
    >
      {showControls && items.length > 1 ? (
        <div className="pm-carousel__controls">
          <button
            type="button"
            className="pm-carousel__control"
            aria-label="آیتم قبلی"
            disabled={activeIndex === 0}
            onClick={() => move(-1)}
          >
            ‹
          </button>
          <button
            type="button"
            className="pm-carousel__control"
            aria-label="آیتم بعدی"
            disabled={activeIndex === items.length - 1}
            onClick={() => move(1)}
          >
            ›
          </button>
        </div>
      ) : null}

      <div
        ref={viewportRef}
        className="pm-carousel__viewport"
        tabIndex={0}
        onScroll={(event) => {
          const viewport = event.currentTarget;
          const children = Array.from(viewport.querySelectorAll<HTMLElement>(".pm-carousel__item"));
          if (!children.length) return;

          const viewportCenter = viewport.getBoundingClientRect().left + viewport.clientWidth / 2;
          let nearestIndex = 0;
          let nearestDistance = Number.POSITIVE_INFINITY;

          children.forEach((child, index) => {
            const rect = child.getBoundingClientRect();
            const center = rect.left + rect.width / 2;
            const distance = Math.abs(center - viewportCenter);
            if (distance < nearestDistance) {
              nearestDistance = distance;
              nearestIndex = index;
            }
          });

          setActiveIndex(nearestIndex);
        }}
      >
        {items.map((item, index) => (
          <article
            key={item.value}
            className="pm-carousel__item"
            data-carousel-index={index}
            aria-label={`${index + 1} از ${items.length}`}
          >
            {item.media ? <div className="pm-carousel__media">{item.media}</div> : null}

            {(item.title || item.subtitle || item.content || item.action) ? (
              <div className="pm-carousel__body">
                {item.title ? <h3 className="pm-carousel__title">{item.title}</h3> : null}
                {item.subtitle ? <p className="pm-carousel__subtitle">{item.subtitle}</p> : null}
                {item.content ? <div className="pm-carousel__content">{item.content}</div> : null}
                {item.action ? <div className="pm-carousel__action">{item.action}</div> : null}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {showDots && items.length > 1 ? (
        <div className="pm-carousel__dots" role="tablist" aria-label="انتخاب آیتم">
          {items.map((item, index) => (
            <button
              key={item.value}
              type="button"
              className={[
                "pm-carousel__dot",
                index === activeIndex ? "pm-carousel__dot--active" : "",
              ].filter(Boolean).join(" ")}
              aria-label={`رفتن به آیتم ${index + 1}`}
              aria-selected={index === activeIndex}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
