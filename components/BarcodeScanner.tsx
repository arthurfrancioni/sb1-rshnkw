'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useScreenOrientation } from '@/hooks/useScreenOrientation';
import { sendBarcodeToApi } from '@/lib/api';
import { ScannerOverlay } from './scanner/ScannerOverlay';

export default function BarcodeScanner() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useScreenOrientation();

  const handleScanComplete = async (err: any, result: any) => {
    if (result) {
      try {
        await sendBarcodeToApi(result.text);
        router.push(`/occurrence?code=${encodeURIComponent(result.text)}`);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to process the barcode');
      }
    }
    if (err) {
      console.error('Scan Error:', err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black">
      <div className="relative w-screen h-screen">
        <BarcodeScannerComponent
          width="100%"
          height="100%"
          onUpdate={handleScanComplete}
          torch={false}
        />
        <ScannerOverlay error={error} />
      </div>
    </div>
  );
}