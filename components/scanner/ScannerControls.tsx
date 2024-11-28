'use client';

interface ScannerControlsProps {
  onCancel: () => void;
}

export function ScannerControls({ onCancel }: ScannerControlsProps) {
  return (
    <button
      onClick={onCancel}
      className="absolute top-4 right-4 px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-lg"
    >
      Cancel
    </button>
  );
}