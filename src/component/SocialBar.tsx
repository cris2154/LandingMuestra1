export default function SocialBar() {
  return (
    <div className="hidden md:flex flex-col items-center gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-50">
      
      {/* Facebook */}
      <a href="#" className="text-white hover:text-[#70E000] transition">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.8h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12"/>
        </svg>
      </a>

      {/* Twitter / X */}
      <a href="#" className="text-white hover:text-[#70E000] transition">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26L22.5 21.75h-6.843l-4.462-5.833-5.11 5.833H2.777l7.73-8.815L1.5 2.25h6.984l4.034 5.326 5.726-5.326Zm-1.161 17.52h1.833L7.084 4.356H5.117l11.966 15.414Z" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="#" className="text-white hover:text-[#70E000] transition">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1a4.1 4.1 0 0 1 3.7-2c4 0 4.8 2.6 4.8 6v6.3h-4V15c0-1.7 0-4-2.4-4-2.4 0-2.8 1.8-2.8 3.9v6.1h-4V9Z" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="#" className="text-white hover:text-[#70E000] transition">
        <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm0 2h10c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3Zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5Zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5Zm4.4-3.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1Z" />
        </svg>
      </a>

    </div>
  );
}
