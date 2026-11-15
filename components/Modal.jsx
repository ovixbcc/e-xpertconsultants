'use client';

import { useEffect, useRef } from 'react';

export default function Modal({ open, onClose, label, children, wide = false }) {
  const box = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    box.current?.focus();
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = prev; };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div className="modal-back" onClick={onClose}>
      <div
        className={`modal${wide ? ' modal-wide' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={label}
        tabIndex={-1}
        ref={box}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="modal-x" onClick={onClose} aria-label="Close">×</button>
        {children}
      </div>
    </div>
  );
}
