export function lerp(a1, a2, alpha) {
    return a1 * (1 - alpha) + a2 * alpha;
}
export function normalize(val, valMin, valMax, limMin, limMax) {
    return limMin + ((val - valMin) * (limMax - limMin)) / (valMax - valMin);
}