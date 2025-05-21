
export function LandingFooter() {
  return (
    <footer className="w-full bg-white border-t py-6 px-6 flex items-center justify-between mt-10 text-gray-500 text-sm">
      <span>© {new Date().getFullYear()} FrontCops. All rights reserved.</span>
      <a href="https://lovable.app" target="_blank" rel="noopener" className="underline text-primary">Built with Lovable</a>
    </footer>
  );
}
