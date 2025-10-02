import Link from 'next/link';

type HeaderButtonsProps = {
  activePath: string;
};

export default function HeaderButtons({ activePath }: HeaderButtonsProps) {
  const buttons = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/tools', label: 'Tools' },
  ];

  return (
    <>
      {buttons.map((btn) => (
        <Link
          key={btn.href}
          href={btn.href}
          className={`border px-4 py-2 transition ${
            activePath === btn.href ? 'border-neon text-neon' : 'hover:border-neon text-[var(--fg)]'
          }`}
        >
          {btn.label}
        </Link>
      ))}
    </>
  );
}
