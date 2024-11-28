export async function sendBarcodeToApi(code: string) {
  const response = await fetch('https://zorte.com.br/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ code }),
  });

  if (!response.ok) {
    throw new Error('Failed to process barcode');
  }

  return response;
}