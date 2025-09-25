import { useState, useCallback } from 'react';

export function useClipboardToast() {
  const [toast, setToast] = useState<string | null>(null);
  
  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setToast('Email copied to clipboard');
    } catch {
      setToast('Copy failed');
    }
    setTimeout(() => setToast(null), 1600);
  }, []);
  
  return { toast, copy };
}
