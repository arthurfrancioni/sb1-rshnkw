'use client';

import { Barcode } from 'lucide-react';
import { useState } from 'react';
import BarcodeScanner from '@/components/scanner/BarcodeScanner';
import { ScannerControls } from '@/components/scanner/ScannerControls';

export default function Home() {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-100">
      {!isScanning ? (
        <button
          onClick={() => setIsScanning(true)}
          className="w-64 h-64 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center gap-4 transition-transform hover:scale-105 active:scale-95"
        >
          <Barcode size={64} className="text-gray-700" />
          <span className="text-lg font-medium text-gray-700">
            Scan Barcode
          </span>
        </button>
      ) : (
        <div className="fixed inset-0 z-50">
          <BarcodeScanner />
          <ScannerControls onCancel={() => setIsScanning(false)} />
        </div>
      )}
    </main>
  );
}