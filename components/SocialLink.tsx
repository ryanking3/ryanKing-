export default function SocialLink({ href, children }: { href: string; children: React.ReactNode }) {
return (
<a href={href} className="text-sm subtle hover:text-white" target="_blank" rel="noreferrer">
{children}
</a>
)
}