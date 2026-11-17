// Reconstructed readable fragment from the supplied recording.
// The leading edge goes first, the trailing edge catches up.
const st = host.__st ?? { ...prev };

const vertical = Math.abs(to.t - prev.t) > Math.abs(to.l - prev.l);
const fwd = vertical ? to.t > prev.t : to.l > prev.l;
const [lead, trail] = vertical
  ? (fwd ? ['b', 't'] : ['t', 'b'])
  : (fwd ? ['r', 'l'] : ['l', 'r']);
const cross = vertical ? ['l', 'r'] : ['t', 'b'];
const paint = () => gsap.set(pill, { clipPath: clip(st) });

gsap.to(st, { [lead]: to[lead], duration: 0.36,
  ease: 'power3.out', onUpdate: paint });
gsap.to(st, { [trail]: to[trail], duration: 0.55,
  ease: 'power3.inOut', onUpdate: paint });
gsap.to(st, {
  [cross[0]]: to[cross[0]], [cross[1]]: to[cross[1]],
  duration: 0.45, ease: 'power3.inOut', onUpdate: paint
});

// `host`, `prev`, `to`, `pill`, `clip` and `gsap` are
// supplied by the surrounding application in the original snippet.
// This fragment is preserved as a reference and is not imported by
// the dependency-free HTML/CSS/JS demo.
