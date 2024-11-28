interface ScannerOverlayProps {
  error: string | null;
}

export function ScannerOverlay({ error }: ScannerOverlayProps) {
  return (
    <>
      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-500 text-white p-4 rounded-lg">
          {error}
        </div>
      )}
      <div className="absolute top-4 left-4 right-4 text-center">
        <p className="text-white text-lg bg-black/50 p-2 rounded-lg">
          Please rotate your device to landscape mode
        </p>
      </div>
    </>
  );
}