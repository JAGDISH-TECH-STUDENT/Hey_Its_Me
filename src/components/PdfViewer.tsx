import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FaFilePdf, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

type PdfViewerProps = {
  onClose: () => void;
};

const PdfViewer: React.FC<PdfViewerProps> = ({ onClose }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset: number) => {
    if (!numPages) return;
    const newPage = pageNumber + offset;
    if (newPage >= 1 && newPage <= numPages) {
      setPageNumber(newPage);
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '900px',
      height: '88vh',
      background: 'var(--color-card)',
      borderRadius: '20px',
      border: '1px solid var(--color-border)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      position: 'relative'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '18px 24px',
        background: 'var(--color-bg-secondary)',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--color-text)', fontWeight: '600', fontSize: '15px' }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #dc2626, #ef4444)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <FaFilePdf size={18} color="white" />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: '600', color: 'var(--color-text)', lineHeight: 1.3 }}>Resume</div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-muted)', fontWeight: '400' }}>View Only</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {numPages && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--color-text-muted)', fontSize: '13px' }}>
              <button
                onClick={() => changePage(-1)}
                disabled={pageNumber <= 1}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'all 0.2s'
                }}
              >
                <FaChevronLeft size={14} />
              </button>
              <span style={{ fontVariantNumeric: 'tabular-nums' }}>{pageNumber} / {numPages}</span>
              <button
                onClick={() => changePage(1)}
                disabled={pageNumber >= numPages}
                style={{
                  background: 'var(--color-bg)',
                  border: '1px solid var(--color-border)',
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--color-text-muted)',
                  transition: 'all 0.2s'
                }}
              >
                <FaChevronRight size={14} />
              </button>
            </div>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--color-text-muted)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-bg-tertiary)';
              e.currentTarget.style.color = 'var(--color-text)';
              e.currentTarget.style.borderColor = 'var(--color-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-bg)';
              e.currentTarget.style.color = 'var(--color-text-muted)';
              e.currentTarget.style.borderColor = 'var(--color-border)';
            }}
          >
            <FaTimes size={16} />
          </button>
        </div>
      </div>

      <div style={{ flex: 1, background: 'var(--color-bg)', position: 'relative', overflow: 'auto', display: 'flex', justifyContent: 'center', padding: '24px' }}>
        <Document
          file="/Resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          loading={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--color-text-muted)' }}>
              Loading resume...
            </div>
          }
          error={
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#ef4444' }}>
              Failed to load resume.
            </div>
          }
        >
          <Page 
            pageNumber={pageNumber} 
            width={Math.min(800, window.innerWidth - 80)}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
};

export default PdfViewer;
