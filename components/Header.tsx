import Link from 'next/link';

export default function Header() {
  return (
    <header className="mb-12 flex items-center justify-between">
      <Link href="/" className="inline-block">
        <img
          src="/images/beautifulworld.jpg"
          alt="beautifulworld"
          className="w-24 h-24 rounded-full border border-neon hover:border-blue-400 transition"
        />
      </Link>
    </header>
  );
}
