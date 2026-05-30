/**
 * Inline maker mark — the widget's own identity.
 *
 * Distinct from the host application's brand (set via FEEDBACK_BRAND_NAME):
 *
 *   - The HOST brand (Capellai / Compliance Brain / etc.) shows up in
 *     email subjects, deep links, and anywhere FEEDBACK_BRAND_NAME is
 *     interpolated. It identifies the application the user is sending
 *     feedback ABOUT.
 *
 *   - The MAKER brand shows up on the floating launcher and in
 *     the panel header. It identifies the TOOL being used to send the
 *     feedback. Same idea as the "Powered by Stripe" mark on a checkout.
 *
 * The mark is inlined here so the widget folder stays self-contained:
 * extracting the widget into another web app preserves the maker
 * identity unless the new host explicitly forks this file. The visual is
 * a brand-neutral feedback glyph; host branding is injected separately
 * via FEEDBACK_BRAND_NAME.
 */

export interface MakerMarkProps {
  className?: string;
  /** Override the gradient ID so multiple marks on one page don't collide. */
  gradientId?: string;
}

export function MakerMark({
  className,
  // gradientId kept on the props for backward compat — the gradient
  // itself was removed when the mark switched to flat brand.
  gradientId: _gradientId = "feedback-grad",
}: MakerMarkProps): React.ReactElement {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Feedback"
    >
      {/* Brand-neutral maker mark — black rounded square with a white
          speech-bubble glyph. No wordmark, no brand; host branding is
          injected via FEEDBACK_BRAND_NAME. The gradientId prop is kept
          for backward compat with older host code that referenced it. */}
      <rect width="32" height="32" rx="8" fill="#000000" />
      <path
        d="M11 9h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5l-4 3v-3h-1a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z"
        fill="#ffffff"
      />
    </svg>
  );
}
