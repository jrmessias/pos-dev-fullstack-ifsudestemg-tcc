import { useEffect, useState } from "react";

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

export default function useCountUp({ target = 0, duration = 900, startWhen = true }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!startWhen) {
            setValue(0);
            return;
        }

        const safeTarget = Number.isFinite(target) ? Math.max(0, target) : 0;

        if (typeof window !== "undefined") {
            const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReducedMotion || duration <= 0) {
                setValue(Math.round(safeTarget));
                return;
            }
        }

        let frame = 0;
        const start = performance.now();

        const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = easeOutCubic(progress);
            setValue(Math.round(safeTarget * eased));

            if (progress < 1) {
                frame = requestAnimationFrame(animate);
            }
        };

        frame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(frame);
    }, [target, duration, startWhen]);

    return value;
}
