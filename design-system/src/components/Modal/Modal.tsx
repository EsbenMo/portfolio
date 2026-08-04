import { useEffect, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Tag } from '../Tag/Tag';
import './Modal.css';

export type ModalProps = {
  open: boolean;
  onClose: () => void;
  number?: ReactNode;
  title: ReactNode;
  org?: ReactNode;
  description: ReactNode;
  tags?: string[];
  titleId?: string;
};

export function Modal({ open, onClose, number, title, org, description, tags, titleId = 'ds-modal-title' }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    modalRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div
      className="ds-modal-overlay ds-modal-overlay--open"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="ds-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        ref={modalRef}
      >
        <button className="ds-modal-close" aria-label="Close" onClick={onClose}>
          ✕
        </button>
        {number && <div className="ds-modal-n">{number}</div>}
        <h2 className="ds-modal-title" id={titleId}>{title}</h2>
        {org && <div className="ds-modal-org">{org}</div>}
        <p className="ds-modal-desc">{description}</p>
        {tags && tags.length > 0 && (
          <div className="ds-modal-tags">
            {tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        )}
      </div>
    </div>,
    document.body,
  );
}
