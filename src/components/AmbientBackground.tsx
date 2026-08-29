export default function AmbientBackground() {
  return (
    <>
      <div className="aurora" aria-hidden="true">
        <span className="aurora-blob aurora-blob--ember" />
        <span className="aurora-blob aurora-blob--mist" />
        <span className="aurora-blob aurora-blob--ember2" />
      </div>
      <div className="grain" aria-hidden="true" />
    </>
  );
}
