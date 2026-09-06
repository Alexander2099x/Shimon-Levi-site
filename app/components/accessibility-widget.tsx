'use client';

import { useEffect, useRef, useState } from 'react';
import { Accessibility, RotateCcw, X } from 'lucide-react';

type Prefs = {
  text: 'normal' | 'large' | 'xlarge';
  contrast: boolean;
  grayscale: boolean;
  links: boolean;
  spacing: boolean;
  motion: boolean;
};

const initial: Prefs = {
  text: 'normal',
  contrast: false,
  grayscale: false,
  links: false,
  spacing: false,
  motion: false,
};
const storageKey = 'lavi-a11y-prefs';

function applyPrefs(prefs: Prefs) {
  const root = document.documentElement;
  [...root.classList].forEach((name) => {
    if (name.startsWith('a11y-')) root.classList.remove(name);
  });
  if (prefs.text !== 'normal') root.classList.add(`a11y-text-${prefs.text}`);
  if (prefs.contrast) root.classList.add('a11y-high-contrast');
  if (prefs.grayscale) root.classList.add('a11y-grayscale');
  if (prefs.links) root.classList.add('a11y-links');
  if (prefs.spacing) root.classList.add('a11y-spacing');
  if (prefs.motion) root.classList.add('a11y-stop-motion');
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(initial);
  const closeRef = useRef<HTMLButtonElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const next = { ...initial, ...JSON.parse(saved) } as Prefs;
        setPrefs(next);
        applyPrefs(next);
      }
    } catch {
      localStorage.removeItem(storageKey);
    }
  }, []);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>('button, a[href]'),
        ).filter((element) => !element.hasAttribute('disabled'));
        const first = focusable[0];
        const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  function update(next: Prefs) {
    setPrefs(next);
    applyPrefs(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  }

  function toggle(key: keyof Omit<Prefs, 'text'>) {
    update({ ...prefs, [key]: !prefs[key] });
  }

  function closePanel() {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  }

  return (
    <>
      <button
        ref={launcherRef}
        className="a11y-launcher"
        type="button"
        aria-label="פתיחת אפשרויות נגישות"
        aria-haspopup="dialog"
        aria-controls="a11y-panel"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <Accessibility aria-hidden="true" />
        <span>נגישות</span>
      </button>
      {open && (
        <div
          className="a11y-layer"
          role="presentation"
          onMouseDown={closePanel}
        >
          <section
            ref={panelRef}
            id="a11y-panel"
            className="a11y-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="a11y-panel-head">
              <h2 id="a11y-title">אפשרויות נגישות</h2>
              <button
                ref={closeRef}
                type="button"
                aria-label="סגירת אפשרויות נגישות"
                onClick={closePanel}
              >
                <X aria-hidden="true" />
              </button>
            </div>
            <fieldset className="a11y-size-group">
              <legend>גודל טקסט</legend>
              {(
                [
                  ['normal', 'רגיל'],
                  ['large', 'גדול'],
                  ['xlarge', 'גדול מאוד'],
                ] as const
              ).map(([value, label]) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={prefs.text === value}
                  onClick={() => update({ ...prefs, text: value })}
                >
                  {label}
                </button>
              ))}
            </fieldset>
            <div className="a11y-options">
              <button
                type="button"
                aria-pressed={prefs.contrast}
                onClick={() => toggle('contrast')}
              >
                ניגודיות גבוהה
              </button>
              <button
                type="button"
                aria-pressed={prefs.grayscale}
                onClick={() => toggle('grayscale')}
              >
                גווני אפור
              </button>
              <button
                type="button"
                aria-pressed={prefs.links}
                onClick={() => toggle('links')}
              >
                הדגשת קישורים
              </button>
              <button
                type="button"
                aria-pressed={prefs.spacing}
                onClick={() => toggle('spacing')}
              >
                ריווח קריא
              </button>
              <button
                type="button"
                aria-pressed={prefs.motion}
                onClick={() => toggle('motion')}
              >
                עצירת תנועה
              </button>
            </div>
            <button
              className="a11y-reset"
              type="button"
              onClick={() => update(initial)}
            >
              <RotateCcw size={17} aria-hidden="true" /> איפוס הגדרות
            </button>
            <a className="a11y-statement-link" href="/accessibility">
              להצהרת הנגישות המלאה
            </a>
          </section>
        </div>
      )}
    </>
  );
}
