/** Fade-in delay (seconds) for the i-th item in a list, capped so long lists don't lag. */
export const stagger = (i: number): number => Math.min(i * 0.06, 0.3);
