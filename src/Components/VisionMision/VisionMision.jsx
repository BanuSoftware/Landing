import { useEffect, useRef, useState } from "react";
import monoArriba from "./assets/MonoArriba.png";
import monoAbajo from "./assets/MonoAbajo.png";

export default function VisionMision() {
  const SETTINGS = {
    bg: "#D9888F",

    textMaxWidth: 944,
    textSizeDesktop: 48,
    textSizeMobile: 26,
    lineHeight: 0.94,
    letterSpacingEm: -0.07,

    ctaSize: 16,
    ctaLetterSpacingEm: -0.08,

    monoArriba: { left: "35%", top: "75%", w: 392, rot: 82 },
    monoAbajo: { left: "48%", top: "107%", w: 375, rot: -112, endRot: -180 },

    sectionScrollLengthVh: 300,
    fallStart: 0.36,

    groupParallaxPx: 240,

    fallDistancePx: 950,
    fallCurve: 0.85,

    followTargetRatio: 0.62,
    followBlend: 0.95,
    followSmoothMin: 0.05,
    followSmoothMax: 0.22,

    followBandTop: 0.28,
    followBandBottom: 0.84,

    followStart: 0.48,
    followFull: 0.7,

    // ✅ CTA tweak (left + down)
    ctaShiftX: -250, // más a la izquierda
    ctaShiftY: 18,  // un poco más abajo
  };

  const sectionRef = useRef(null);
  const rafRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [sceneY, setSceneY] = useState(0);
  const sceneYRef = useRef(0);

  const clamp01 = (x) => Math.min(Math.max(x, 0), 1);
  const clamp = (x, a, b) => Math.min(Math.max(x, a), b);
  const smoothstep = (t) => t * t * (3 - 2 * t);
  const lerp = (a, b, t) => a + (b - a) * t;

  useEffect(() => {
    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

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

      const monkeyFallExtra = fallEase * SETTINGS.fallDistancePx;

      const baseTopPx = (parseFloat(SETTINGS.monoAbajo.top) / 100) * viewportH;
      const monkeyYWorld = baseTopPx + groupParallaxY + monkeyFallExtra;

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

  const monkeyFallExtra = fallEase * SETTINGS.fallDistancePx;
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
              {/* ✅ IMPORTANTE: QUITAMOS z-10 AQUÍ para no encerrar el texto en un stacking context */}
              <div className="relative flex h-full w-full flex-col items-center justify-center">
                <h2
                  className="text-center font-medium text-white"
                  style={{
                    maxWidth: SETTINGS.textMaxWidth,
                    fontSize: `clamp(${SETTINGS.textSizeMobile}px, 4vw, ${SETTINGS.textSizeDesktop}px)`,
                    lineHeight: SETTINGS.lineHeight,
                    letterSpacing: `${SETTINGS.letterSpacingEm}em`,
                  }}
                >
                  En Banu simplificamos lo digital. Creamos soluciones a tu medida que
                  combinan diseño y tecnología para convertir tus ideas en{" "}
                  {/* ✅ Split exacto: experien arriba (z alto), cias normal (debajo del mono) */}
                  <span className="inline">
                    <span
                      className="relative"
                      style={{ zIndex: 50 }} // arriba del mono
                    >
                      experien
                    </span>
                    <span>cias</span>
                  </span>{" "}
                  claras y funcionales.
                </h2>

                <a
                  href={null}
                  onClick={(e) => e.preventDefault()}
                  className="mt-10 self-end text-white underline"
                  style={{
                    fontSize: SETTINGS.ctaSize,
                    letterSpacing: `${SETTINGS.ctaLetterSpacingEm}em`,
                    transform: `translate(${SETTINGS.ctaShiftX}px, ${SETTINGS.ctaShiftY}px)`,
                  }}
                >
                  Aprende mas sobre nosotros →
                </a>
              </div>

              {/* ✅ Mono arriba: arriba del texto por defecto, pero "experien" ya trae zIndex 50 */}
              <img
                src={monoArriba}
                alt="Mono arriba"
                draggable={false}
                className="pointer-events-none absolute select-none"
                style={{
                  left: SETTINGS.monoArriba.left,
                  top: SETTINGS.monoArriba.top,
                  width: SETTINGS.monoArriba.w,
                  transform: `translate(-50%, -50%) rotate(${SETTINGS.monoArriba.rot}deg)`,
                  zIndex: 20, // mano sobre texto normal (incluye "cias")
                }}
              />

              <img
                src={monoAbajo}
                alt="Mono abajo"
                draggable={false}
                className="pointer-events-none absolute select-none"
                style={{
                  left: SETTINGS.monoAbajo.left,
                  top: SETTINGS.monoAbajo.top,
                  width: SETTINGS.monoAbajo.w,
                  transform: `translate(-50%, -50%) translateY(${monkeyFallExtra}px) rotate(${currentRot}deg)`,
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