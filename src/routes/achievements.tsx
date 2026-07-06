import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Award,
  Trophy,
  Medal,
  Star,
  Sparkles,
  Camera,
  Calendar,
  MapPin,
  Users,
  Heart,
  ArrowRight,
  ZoomIn,
  ChevronLeft,
  ChevronRight,
  Grid3x3,
  LayoutGrid,
  X,
  Home,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      {
        title: "Achievements - Karan Kumar Bind",
      },
      {
        name: "description",
        content:
          "Achievements and milestones of Karan Kumar Bind including SVUM 2026 Trade Show, certifications, and more.",
      },
      {
        property: "og:title",
        content: "Achievements - Karan Kumar Bind",
      },
      {
        property: "og:description",
        content:
          "Explore my achievements, certifications, and milestones in the journey of becoming a Full Stack Developer.",
      },
    ],
  }),
  component: AchievementsPage,
});

// Type Definitions
interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  description: string;
  category: "certification" | "competition" | "exhibition" | "recognition";
  img: string;
  images: string[];
  stats?: { label: string; value: string }[];
  highlights: string[];
  color: string;
  bgGradient: string;
}

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
};

// Achievement Data
const achievements: Achievement[] = [
  {
    id: "svum-2026",
    title: "SVUM 2026 Trade Show",
    subtitle: "Product Showcase Participant",
    date: "February 2026",
    location: "Ahmedabad, Gujarat",
    category: "exhibition",
    description:
      "Represented product innovation at the SVUM 2026 Trade Show, Presented WisperWays - a travel and tourism platform designed to make travel discovery and planning more accessible and convenient. At the SVUM 2026 Trade Show, we demonstrated the platform's features, discussed its use cases, and connected with industry professionals and international delegates.",
    images: [
      "/svum/1.jpg",
      "/svum/2.jpg",
      "/svum/3.jpg",
      "/svum/4.jpg",
      "/svum/5.jpg",
      "/svum/6.jpg",
      "/svum/7.jpg",
      "/svum/8.jpg",
      "/svum/9.jpg",
      "/svum/10.jpg",
      "/svum/11.jpg",
      "/svum/12.jpg",
    ],
    stats: [
      { label: "Delegates Met", value: "50+" },
      { label: "Product Demos", value: "20+" },
      { label: "Countries", value: "10+" },
    ],
    highlights: [
      "Showcased WisperWays, a travel and tourism platform, to international delegates, industry professionals, and business visitors",
      "Connected with foreign delegates and exchanged ideas about travel, tourism, and digital platform opportunities",
      "Presented the platform's vision, key features, functionality, and potential use cases to diverse audiences",
      "Received multiple business offers, collaboration proposals, and expressions of interest from visitors and professionals",
      "Explored potential partnerships and future collaboration opportunities with industry representatives",
      "Demonstrated the platform and answered questions from both technical and non-technical audiences",
      "Received valuable feedback, suggestions, and business insights for improving the platform and its future direction",
      "Built meaningful professional connections with delegates, entrepreneurs, and industry professionals",
      "Gained practical experience in product pitching, business communication, negotiation, and professional networking",
      "Improved confidence in presenting a digital product to international and industry-focused audiences",
    ],
    img: "/svum.jpg",
    color: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/5",
  },
];

// Photo Viewer Component - Responsive & Smaller
const PhotoViewer: React.FC<{
  images: string[];
  title: string;
  subtitle: string;
  onClose: () => void;
}> = ({ images, title, subtitle, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    setTouchEnd(e.changedTouches[0].clientX);
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextImage() : prevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    // Outer overlay — always centers content, no page scroll allowed
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 shadow-2xl backdrop-blur-3xl sm:p-4">
      {/* Modal box — height capped to viewport, everything inside fits */}
      <div className="relative flex h-[60dvh] sm:h-[80vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-border bg-background/80 shadow-2xl backdrop-blur-xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-2 top-2 sm:right-4 sm:top-4 z-20 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>

        {/* Header — fixed height */}
        <div className="flex-shrink-0 px-4 pt-3 pb-2 sm:px-6 sm:pt-4">
          <h3 className="text-sm sm:text-lg font-semibold text-white pr-8">{title}</h3>
          <p className="text-xs sm:text-sm text-white/60">{subtitle}</p>
        </div>

        {/* Image area — takes remaining space, image shrinks to fit, never overflows */}
        <div
          className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={images[currentIndex]}
            alt={`${title} ${currentIndex + 1}`}
            className="max-h-full max-w-full object-contain"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1.5 sm:p-2 text-white hover:bg-white/20"
              >
                <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-1.5 sm:p-2 text-white hover:bg-white/20"
              >
                <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom controls — fixed height */}
        <div className="flex-shrink-0 px-3 pb-3 pt-2 sm:px-6 sm:pb-4">
          <p className="mb-2 text-center text-xs text-white/60">
            {currentIndex + 1} / {images.length}
          </p>

            <div
            className="
                flex
                w-full
                flex-nowrap
                items-center
                justify-start
                gap-1.5
                overflow-x-auto
                overflow-y-hidden
                px-1
                py-2
                sm:gap-2
                scrollbar-hide
            "
            >
            {images.map((image, idx) => (
                <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`
                    relative
                    h-10 w-10
                    shrink-0
                    overflow-hidden
                    rounded-md
                    border-2
                    transition-all
                    duration-300
                    sm:h-12 sm:w-12
                    md:h-14 md:w-14

                    ${
                    idx === currentIndex
                        ? "scale-105 border-primary"
                        : "border-white/20 hover:border-white/50"
                    }
                `}
                >
                <img
                    src={image}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
                />
                </button>
            ))}
            </div>

          <p className="mt-2 hidden text-center text-[10px] text-white/40 sm:block">
            ← → Arrow keys · ESC to close
          </p>
        </div>
      </div>
    </div>
  );
};

// Image Gallery Component - Responsive
const ImageGallery: React.FC<{ images: string[]; title: string; subtitle: string }> = ({ 
  images, 
  title,
  subtitle 
}) => {
  const [showViewer, setShowViewer] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const visibleImages = images.slice(0, 3);
  const remainingCount = images.length - 3;

  const openViewer = (index: number) => {
    setSelectedIndex(index);
    setShowViewer(true);
  };

  const closeViewer = () => {
    setShowViewer(false);
  };

  return (
    <>
      <div className="mt-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h3 className="flex items-center gap-2 text-xs sm:text-sm font-semibold">
            <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            Gallery
            <span className="text-[10px] sm:text-xs font-normal text-muted-foreground">
              ({images.length} photos)
            </span>
          </h3>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden sm:grid sm:grid-cols-4 gap-2 md:gap-3">
          {visibleImages.map((image, idx) => (
            <div
              key={idx}
              className="group/image relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-border/50 transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => openViewer(idx)}
            >
              <img
                src={image}
                alt={`${title} - Photo ${idx + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                <ZoomIn className="h-6 w-6 sm:h-8 sm:w-8 text-white opacity-80" />
              </div>
              <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 rounded bg-black/70 px-1.5 py-0.5 text-[8px] sm:text-[10px] text-white">
                {idx + 1}
              </div>
            </div>
          ))}

          {/* Stacked Images Card */}
          {remainingCount > 0 && (
            <div
              className="group/image relative aspect-square cursor-pointer overflow-hidden rounded-lg border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 transition-all hover:border-primary/60 hover:shadow-lg hover:shadow-primary/10"
              onClick={() => openViewer(0)}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2 sm:p-4 text-center">
                <span className="text-2xl sm:text-4xl font-bold text-primary">+{remainingCount}</span>
                <p className="text-[8px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">More photos</p>
                <div className="mt-1 sm:mt-2 flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="h-5 w-5 sm:h-8 sm:w-8 rounded-full border-2 border-background bg-primary/20"
                    />
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                <Grid3x3 className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
            </div>
          )}
        </div>

        {/* Mobile Gallery - Grid */}
        <div className="grid grid-cols-3 gap-1.5 sm:hidden">
          {images.slice(0, 3).map((image, idx) => (
            <div
              key={idx}
              className="group/image relative aspect-square cursor-pointer overflow-hidden rounded-lg border border-border/50 transition-all hover:border-primary/50"
              onClick={() => openViewer(idx)}
            >
              <img
                src={image}
                alt={`${title} - Photo ${idx + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover/image:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
                <ZoomIn className="h-5 w-5 text-white" />
              </div>
              {idx === 2 && images.length > 3 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                  <span className="text-lg font-bold text-white">+{images.length - 3}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        {images.length > 3 && (
          <div className="mt-2 sm:hidden">
            <button
              onClick={() => openViewer(0)}
              className="w-full rounded-lg border border-primary/30 bg-primary/5 py-2 text-xs font-medium text-primary transition-all hover:bg-primary/10"
            >
              View All {images.length} Photos
            </button>
          </div>
        )}
      </div>

      {/* Photo Viewer Modal */}
      {showViewer && (
        <PhotoViewer
          images={images}
          title={title}
          subtitle={subtitle}
          onClose={closeViewer}
        />
      )}
    </>
  );
};

// Achievement Card Component
const AchievementCard: React.FC<{ achievement: Achievement; index: number }> = ({
  achievement,
  index,
}) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });
  const [showStats, setShowStats] = useState(false);
  const [showAllHighlights, setShowAllHighlights] = useState(false);

    const visibleHighlights = showAllHighlights
    ? achievement.highlights
    : achievement.highlights.slice(0, 5);

  return (
    <div
      ref={ref}
      className={`relative rounded-xl sm:rounded-2xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden transition-all duration-700 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/10 animate-fade-in-up ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Gradient background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

      {/* Category Badge */}
      <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
        <span className="inline-flex items-center gap-1 rounded-full bg-background/90 px-1.5 py-0.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium uppercase tracking-wider backdrop-blur-sm">
          <span className={`h-0.5 w-0.5 sm:h-1.5 sm:w-1.5 text-xs rounded-full bg-gradient-to-r ${achievement.color}`} />
          {achievement.category}
        </span>
      </div>

      <div className="relative p-3 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 xs:flex-row sm:gap-5">
          {/* Logo Image */}
          <div className="h-16 w-16 sm:h-24 sm:w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-lg sm:rounded-xl">
            <img
              src={achievement.img}
              alt={`${achievement.title} logo`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex-1">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold break-words">
              {achievement.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-sm font-medium text-primary break-words">
              {achievement.subtitle}
            </p>

            <div className="mt-1 sm:mt-2 flex flex-wrap items-center gap-1.5 sm:gap-3 text-[8px] sm:text-xs text-muted-foreground">
              <span className="flex items-center gap-0.5 sm:gap-1 text-xs">
                <Calendar className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                {achievement.date}
              </span>

              <span className="hidden h-2 w-px bg-border xs:block" />

              <span className="flex items-center gap-0.5 sm:gap-1 text-xs">
                <MapPin className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                {achievement.location}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
          {achievement.description}
        </p>

        {/* Image Gallery */}
        <ImageGallery 
          images={achievement.images} 
          title={achievement.title}
          subtitle={achievement.subtitle}
        />

        {/* Stats */}
        {achievement.stats && (
          <div className="mt-3 sm:mt-6">
            <button
              onClick={() => setShowStats(!showStats)}
              className="flex items-center gap-2 text-[10px] sm:text-sm font-medium text-primary hover:opacity-80 transition-opacity w-full sm:w-auto justify-center sm:justify-start cursor-pointer"
            >
              <span className="h-px flex-1 bg-primary/20" />
              <span className="whitespace-nowrap">{showStats ? "Hide Stats" : "View Stats"}</span>
              <ArrowRight className={`h-3 w-3 sm:h-4 sm:w-4 transition-transform ${showStats ? "rotate-90" : ""}`} />
            </button>
            {showStats && (
              <div className="mt-2 sm:mt-4 grid grid-cols-3 gap-1.5 sm:gap-3 animate-slide-down">
                {achievement.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-lg border border-border/50 bg-background/50 p-1.5 sm:p-3 text-center transition-all hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="text-sm sm:text-lg font-bold text-primary">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Highlights */}
        <div className="mt-4 sm:mt-6">
        <h4
            className="
            mb-2
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            sm:mb-3
            sm:text-sm
            "
        >
            <Sparkles className="h-4 w-4 text-primary" />

            Key Highlights
        </h4>


        <ul className="space-y-1 sm:space-y-2">
            {visibleHighlights.map((highlight, idx) => (
            <li
                key={`${highlight}-${idx}`}
                className="
                group/item
                flex
                items-start
                gap-2
                rounded-lg
                p-1.5
                transition-all
                duration-300
                hover:bg-primary/5
                sm:p-2
                "
            >
                <span
                className="
                    mt-0.5
                    flex
                    h-5
                    w-5
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-primary/10
                    text-primary
                "
                >
                <Heart className="h-3 w-3" />
                </span>

                <span
                className="
                    text-xs
                    leading-6
                    text-muted-foreground
                    transition-colors
                    group-hover/item:text-foreground
                    sm:text-sm
                    md:text-base
                "
                >
                {highlight}
                </span>
            </li>
            ))}
        </ul>


        {/* SHOW MORE / SHOW LESS */}

        {achievement.highlights.length > 5 && (
            <button
            type="button"
            onClick={() =>
                setShowAllHighlights((previous) => !previous)
            }
            className="
                group
                mt-3
                inline-flex
                cursor-pointer
                items-center
                gap-2
                rounded-lg
                border
                border-primary/20
                bg-primary/5
                px-3
                py-2
                text-xs
                font-medium
                text-primary
                transition-all
                duration-300
                hover:border-primary/50
                hover:bg-primary/10
                sm:ml-7
            "
            >
            {showAllHighlights ? (
                <>
                Show less

                <ChevronRight
                    className="
                    h-4
                    w-4
                    -rotate-90
                    transition-transform
                    "
                />
                </>
            ) : (
                <>
                +{achievement.highlights.length - 5} more highlights

                <ChevronRight
                    className="
                    h-4
                    w-4
                    rotate-90
                    transition-transform
                    group-hover:translate-y-0.5
                    "
                />
                </>
            )}
            </button>
        )}
        </div>
      </div>
    </div>
  );
};

// Category Filter Component
const CategoryFilter: React.FC<{ active: string; onChange: (category: string) => void }> = ({
  active,
  onChange,
}) => {
  const categories = [
    { value: "all", label: "All" },
    { value: "exhibition", label: "Exhibitions" },
    { value: "competition", label: "Competitions" },
    { value: "recognition", label: "Recognitions" },
  ];

  return (
    <div className="flex flex-wrap gap-1 sm:gap-2 rounded-xl border border-border/50 bg-surface/30 p-1 sm:p-2 backdrop-blur-sm">
      {categories.map((category) => (
        <button
          key={category.value}
          onClick={() => onChange(category.value)}
          className={`rounded-lg px-2 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all flex-1 sm:flex-none cursor-pointer ${
            active === category.value
              ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
              : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

function AchievementsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const filteredAchievements = activeCategory === "all"
    ? achievements
    : achievements.filter((a) => a.category === activeCategory);

  const totalAchievements = achievements.length;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SiteHeader />

      <PageHeader
        eyebrow="Achievements"
        title="My Journey & Milestones"
        description="A collection of achievements, certifications, and memorable moments from my journey as a developer."
      />

      {/* Achievements Grid */}
      <section className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-6 lg:py-8">
        <div className="mb-3 sm:mb-6 lg:mb-8">
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />
        </div>

        <div className="space-y-3 sm:space-y-6 lg:space-y-8">
          {filteredAchievements.length === 0 ? (
            <div className="rounded-xl sm:rounded-2xl border border-border bg-surface p-6 sm:p-12 text-center">
              <p className="text-sm sm:text-base text-muted-foreground">
                No achievements found in this category.
              </p>
            </div>
          ) : (
            filteredAchievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))
          )}
        </div>

        {/* Bottom decorative element */}
        {filteredAchievements.length > 0 && (
          <div className="mt-6 sm:mt-12 text-center">
            <div className="inline-flex items-center gap-1.5 sm:gap-3 rounded-full border border-border/50 bg-surface/50 px-3 py-1.5 sm:px-6 sm:py-3 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
              <span className="text-[10px] sm:text-sm text-muted-foreground">
                {totalAchievements} achievements and counting
              </span>
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
            </div>
          </div>
        )}
      </section>

      <SiteFooter />
    </div>
  );
}