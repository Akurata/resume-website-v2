/**
 * Site footer — copyright notice and subtle branding.
 */

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-xs text-white/25">
      <p>&copy; {new Date().getFullYear()} Alex Kurata. All rights reserved.</p>
    </footer>
  );
}
