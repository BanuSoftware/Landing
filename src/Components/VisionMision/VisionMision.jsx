import { useEffect, useRef, useState } from "react";
import monoArriba from "./assets/MonoArriba.png";
import monoAbajo from "./assets/MonoAbajo.png";

export default function VisionMision() {
  // Design reference: at 1440px viewport, text is 944px wide, text is 48px
  const DESIGN_REF = {
    viewportWidth: 1440,
    textContainerWidth: 944,
    fontSize: 48,
  };

  const SETTINGS = {
    bg: "#D9888F",

    textMaxWidth: 944,
    textSizeDesktop: 48,
    textSizeMobile: 26,
    lineHeight: 0.94,
    letterSpacingEm: -0.07,

    ctaSize: 16,
    ctaLetterSpacingEm: -0.08,

    // Monkey positions in pixels at design size (1440px viewport, 48px font)
    // monoArriba is now RELATIVE to the text container
    monoArriba: {
      leftPx: -210,     
      topPx: 230,    
      widthPx: 392,
      rot: 82,
    },
    // monoAbajo stays VIEWPORT-based (from viewport center)
    monoAbajo: {
      leftPx: -20,    
      topPx: 450,    
      widthPx: 375,
      rot: -112,
      endRot: -180,
    },

    sectionScrollLengthVh: 300,
    fallStart: 0.36,

    groupParallaxPx: 240,

    fallDistancePx: 1600,
    fallCurve: 0.85,

    followTargetRatio: 0.62,
    followBlend: 0.95,
    followSmoothMin: 0.05,
    followSmoothMax: 0.22,

    followBandTop: 0.28,
    followBandBottom: 0.84,

    followStart: 0.48,
    followFull: 0.7,

    ctaShiftX: -250,
    ctaShiftY: 18,
  };

  const sectionRef = useRef(null);
  const textContainerRef = useRef(null);
  const rafRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [sceneY, setSceneY] = useState(0);
  const [scaleFactor, setScaleFactor] = useState(1);
  const sceneYRef = useRef(0);

  const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
  const smoothstep = (t) => t * t * (3 - 2 * t);
  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      // Calculate scale factor based on viewport width
      // Scale down to fit the text container within the viewport with padding
      const viewportWidth = window.innerWidth;
      const availableWidth = viewportWidth - 48; // 24px padding on each side (px-6)
      const currentScale = Math.min(availableWidth / SETTINGS.textMaxWidth, 1);
      setScaleFactor(currentScale);

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;

      const scrollable = el.offsetHeight - viewportH;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 1));
      const p = scrollable > 0 ? scrolled / scrollable : 0;
      setProgress(p);

      const groupParallaxY = -p * SETTINGS.groupParallaxPx;

      const rawFall = (p - SETTINGS.fallStart) / (1 - SETTINGS.fallStart);
      const fallP = clamp01(rawFall);
      const curved = Math.pow(fallP, SETTINGS.fallCurve);
      const fallEase = smoothstep(curved);

      const monkeyFallExtra = fallEase * SETTINGS.fallDistancePx * currentScale;

      // Calculate monkey's position in viewport space (scaled)
      // Note: NOT adding groupParallaxY here so monkey only moves down
      const monkeyTopScaled = (SETTINGS.monoAbajo.topPx * currentScale) + (viewportH / 2);
      const monkeyYWorld = monkeyTopScaled + monkeyFallExtra;

      const targetY = SETTINGS.followTargetRatio * viewportH;
      const desiredFollowY = -(monkeyYWorld - targetY);
      const desiredSceneY = desiredFollowY * SETTINGS.followBlend;

      const followRamp = clamp01(
        (p - SETTINGS.followStart) / (SETTINGS.followFull - SETTINGS.followStart)
      );
      const followWeight = smoothstep(followRamp);

      let targetSceneY = desiredSceneY * followWeight;

      if (followWeight > 0) {
        const bandTopPx = SETTINGS.followBandTop * viewportH;
        const bandBottomPx = SETTINGS.followBandBottom * viewportH;

        const minSceneY = bandTopPx - monkeyYWorld;
        const maxSceneY = bandBottomPx - monkeyYWorld;

        targetSceneY = clamp(targetSceneY, minSceneY, maxSceneY);
      }

      const smooth = lerp(SETTINGS.followSmoothMin, SETTINGS.followSmoothMax, followWeight);

      const current = sceneYRef.current;
      const next = current + (targetSceneY - current) * smooth;

      sceneYRef.current = next;
      setSceneY(next);
    };

    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const groupParallaxY = -progress * SETTINGS.groupParallaxPx;

  const rawFall = (progress - SETTINGS.fallStart) / (1 - SETTINGS.fallStart);
  const fallP = clamp01(rawFall);
  const curved = Math.pow(fallP, SETTINGS.fallCurve);
  const fallEase = smoothstep(curved);

  const monkeyFallExtra = fallEase * SETTINGS.fallDistancePx * scaleFactor;
  const currentRot = lerp(SETTINGS.monoAbajo.rot, SETTINGS.monoAbajo.endRot, fallEase);

  return (
    <section
      ref={sectionRef}
      id="mision-vision"
      className="relative w-full"
      style={{
        backgroundColor: SETTINGS.bg,
        fontFamily: "Indivisible",
        minHeight: `${SETTINGS.sectionScrollLengthVh}vh`,
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          className="relative h-full w-full"
          style={{
            transform: `translateY(${sceneY}px)`,
            willChange: "transform",
          }}
        >
          <div className="relative mx-auto h-full w-full max-w-[1440px] px-6 py-16">
            <div
              className="relative h-full w-full"
              style={{
                transform: `translateY(${groupParallaxY}px)`,
                willChange: "transform",
              }}
            >
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                {/* Text group container - this is where monoArriba lives with the text */}
                {/* Using transform scale to maintain exact layout at all sizes */}
                <div 
                  className="relative" 
                  style={{ 
                    width: SETTINGS.textMaxWidth,
                    transform: `scale(${scaleFactor})`,
                    transformOrigin: 'center center',
                  }}
                >
                  <h2
                    ref={textContainerRef}
                    className="text-center font-medium text-white"
                    style={{
                      fontSize: SETTINGS.textSizeDesktop,
                      lineHeight: SETTINGS.lineHeight,
                      letterSpacing: `${SETTINGS.letterSpacingEm}em`,
                    }}
                  >
                    En Banu simplificamos lo digital. Creamos soluciones a tu medida que
                    combinan diseño y tecnología para convertir tus ideas en{" "}
                    <span className="inline">
                      <span
                        className="relative"
                        style={{ zIndex: 50 }}
                      >
                        experien
                      </span>
                      <span>cias</span>
                    </span>{" "}
                    claras y funcionales.
                  </h2>

                  {/* monoArriba - grouped with text, positioned relative to text container */}
                  <img
                    src={monoArriba}
                    alt="Mono arriba"
                    draggable={false}
                    className="pointer-events-none absolute select-none"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: SETTINGS.monoArriba.widthPx,
                      transform: `translate(calc(-50% + ${SETTINGS.monoArriba.leftPx}px), calc(-50% + ${SETTINGS.monoArriba.topPx}px)) rotate(${SETTINGS.monoArriba.rot}deg)`,
                      zIndex: 20,
                    }}
                  />
                </div>

                <a
                  href={null}
                  onClick={(e) => e.preventDefault()}
                  className="self-end text-white underline"
                  style={{
                    fontSize: SETTINGS.ctaSize,
                    letterSpacing: `${SETTINGS.ctaLetterSpacingEm}em`,
                    transform: `scale(${scaleFactor}) translate(${SETTINGS.ctaShiftX}px, ${SETTINGS.ctaShiftY}px)`,
                    transformOrigin: 'right center',
                    marginTop: `${10 * scaleFactor}px`,
                  }}
                >
                  Aprende mas sobre nosotros →
                </a>
              </div>

              {/* monoAbajo - NOT grouped with text, positioned relative to viewport center, scales with same factor */}
              <img
                src={monoAbajo}
                alt="Mono abajo"
                draggable={false}
                className="pointer-events-none absolute select-none"
                style={{
                  left: '50%',
                  top: '50%',
                  width: SETTINGS.monoAbajo.widthPx,
                  transform: `scale(${scaleFactor}) translate(calc(-50% / ${scaleFactor} + ${SETTINGS.monoAbajo.leftPx}px), calc(-50% / ${scaleFactor} + ${SETTINGS.monoAbajo.topPx}px + ${monkeyFallExtra / scaleFactor}px)) rotate(${currentRot}deg)`,
                  transformOrigin: 'center center',
                  willChange: "transform",
                  zIndex: 10,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}