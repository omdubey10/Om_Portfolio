import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import AnimatedHobbyStickers from "./AnimatedHobbyStickers";
import portrait from "../assets/om-portrait.jpg";
import styles from "./ContactSection.module.css";

interface SocialCard {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  url?: string;
  previewUrl?: string;
  color: string;
  bgGradient: string;
}

function buildPreviewShot(url: string) {
  return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=540`;
}

const socials: SocialCard[] = [
  {
    id: "github",
    label: "GitHub",
    icon: FaGithub,
    url: "https://github.com/omdubey10",
    previewUrl: "https://github.com/omdubey10",
    color: "#f0f0f0",
    bgGradient: "linear-gradient(135deg, #333 0%, #0d1117 100%)",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/in/om-dubey-a26805254/",
    previewUrl: "https://www.linkedin.com/in/om-dubey-a26805254/",
    color: "#0A66C2",
    bgGradient: "linear-gradient(135deg, #0A66C2 0%, #004182 100%)",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/omdubeyyy/",
    previewUrl: "https://www.instagram.com/omdubeyyy/",
    color: "#E1306C",
    bgGradient:
      "linear-gradient(135deg, #f58529 0%, #dd2a7b 50%, #8134af 100%)",
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: FaFacebook,
    url: "https://www.facebook.com/profile.php?id=100030501679054&sk=directory_intro",
    previewUrl:
      "https://www.facebook.com/profile.php?id=100030501679054&sk=directory_intro",
    color: "#1877F2",
    bgGradient: "linear-gradient(135deg, #4b6cb7 0%, #1877F2 100%)",
  },
  {
    id: "gmail",
    label: "Gmail",
    icon: SiGmail,
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=omd24197@gmail.com",
    previewUrl: "https://mail.google.com/",
    color: "#EA4335",
    bgGradient: "linear-gradient(135deg, #EA4335 0%, #c5221f 100%)",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me/919691834543",
    previewUrl: "https://wa.me/919691834543",
    color: "#25D366",
    bgGradient: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
  },
];

// Fan positions: 3 left, center photo, 3 right
// Each card gets a rotation and x-offset from center
// Fan positions scaled up for larger cards
// Photo is 260x364, cards are 200x275
const fanPositions = [
  { rotate: -30, x: -400, y: 25 },
  { rotate: -18, x: -250, y: -12 },
  { rotate: -6, x: -115, y: -25 },
  { rotate: 6, x: 115, y: -25 },
  { rotate: 18, x: 250, y: -12 },
  { rotate: 30, x: 400, y: 25 },
];

export default function ContactSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [compactLayout, setCompactLayout] = useState(false);
  const [failedPreviews, setFailedPreviews] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 900px)");
    const sync = () => setCompactLayout(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const markPreviewFailed = (id: string) => {
    setFailedPreviews((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className={styles.contactRoot}>
      {/* Header with Stickers */}
      <div className={styles.contactHeader}>
        <AnimatedHobbyStickers color="white" />
        <h2 className={`section-title ${styles.contactTitle}`}>Find Me On</h2>
      </div>

      {/* Fanned cards + center card */}
      <div className={styles.fanDeck}>
        <motion.div
          className={styles.centerPhoto}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <img
            src={portrait}
            alt="Om Dubey"
            className={styles.centerImage}
            decoding="async"
          />
        </motion.div>

        {/* Social cards fanned around the photo */}
        {socials.map((social, i) => {
          const pos = fanPositions[i];
          const Icon = social.icon;
          const isHovered = hoveredId === social.id;
          const inactive = !social.url;
          const previewSrc = social.previewUrl
            ? buildPreviewShot(social.previewUrl)
            : "";
          const previewFailed =
            inactive || !social.previewUrl || !!failedPreviews[social.id];

          const motionProps = {
            className: `${styles.socialCard}${inactive ? ` ${styles.socialCardInactive}` : ""}`,
            style: {
              background: social.bgGradient,
              zIndex: isHovered ? 20 : i < 3 ? 5 - i : i,
              boxShadow: isHovered
                ? `0 20px 50px ${social.color}44`
                : "0 8px 30px rgba(0,0,0,0.3)",
            },
            initial: {
              x: compactLayout ? 0 : pos.x,
              y: compactLayout ? 0 : pos.y,
              rotate: compactLayout ? 0 : pos.rotate,
            },
            animate: {
              x: compactLayout ? 0 : isHovered ? pos.x * 1.15 : pos.x,
              y: compactLayout ? 0 : isHovered ? pos.y - 30 : pos.y,
              rotate: compactLayout
                ? 0
                : isHovered
                  ? pos.rotate * 0.5
                  : pos.rotate,
              scale: isHovered ? 1.12 : 1,
            },
            transition: {
              type: "spring" as const,
              stiffness: 300,
              damping: 22,
            },
            onMouseEnter: () => setHoveredId(social.id),
            onMouseLeave: () => setHoveredId(null),
          };

          const inner = (
            <>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className={styles.socialPreview}
                >
                  <div className={styles.previewChrome}>
                    <span
                      className={styles.chromeDot}
                      style={{ background: "#ff5f57" }}
                    />
                    <span
                      className={styles.chromeDot}
                      style={{ background: "#febc2e" }}
                    />
                    <span
                      className={styles.chromeDot}
                      style={{ background: "#28c840" }}
                    />
                    <span className={styles.previewUrl}>
                      {inactive
                        ? "Coming soon"
                        : (social.previewUrl ?? "").replace("https://", "")}
                    </span>
                  </div>
                  <div className={styles.previewBody}>
                    {previewFailed ? (
                      <div className={styles.previewFallback}>
                        <Icon size={22} color={social.color} />
                        <span>
                          {inactive ? "Coming soon" : `${social.label} Preview`}
                        </span>
                      </div>
                    ) : (
                      <img
                        src={previewSrc}
                        alt={`${social.label} preview`}
                        className={styles.previewImg}
                        onError={() => markPreviewFailed(social.id)}
                      />
                    )}
                  </div>
                </motion.div>
              )}
              <Icon size={40} color="white" />
              <span className={styles.socialLabel}>{social.label}</span>
            </>
          );

          if (inactive) {
            return (
              <motion.div
                key={social.id}
                {...motionProps}
                role="img"
                aria-label={`${social.label} — coming soon`}
              >
                {inner}
              </motion.div>
            );
          }

          return (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              {...motionProps}
            >
              {inner}
            </motion.a>
          );
        })}
      </div>

      <p className={styles.contactFooter}>
        Let&apos;s connect — a role, a dashboard, or a data problem worth
        digging into.
      </p>
    </div>
  );
}
