export default function ParticleBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none bg-[#050816]"
      style={{
        backgroundImage: 'linear-gradient(rgba(145, 94, 255, 0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(145, 94, 255, 0.055) 1px, transparent 1px)',
        backgroundSize: '56px 56px'
      }}
    />
  );
}
