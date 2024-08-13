import React from 'react';

interface ContactButtonProps {
  content: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({ content }) => {
  return (
    <button
      className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 p-px text-xl font-semibold leading-7 text-white inline-block"
      style={{ borderRadius: '0.5rem' }}
    >
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 rounded-full bg-[radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div
        className="relative flex space-x-2 items-center z-10 bg-zinc-950 py-1 px-5 ring-1 ring-white/10"
        style={{ borderRadius: '0.5rem' }}
      >
        <span className='p-1'>{content}</span>
        <svg
          fill="none"
          height="20"
          viewBox="0 0 24 24"
          width="20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.75 8.75L14.25 12L10.75 15.25"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  );
};

export default ContactButton;