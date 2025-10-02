export type Project = {
id: string
title: string
description: string
href?: string
tech?: string[]
}


export const projects: Project[] = [
{
id: '1',
title: 'icy.wtf',
description: 'This portfolio / blog site',
href: '#',
tech: ['Next.js', 'Typescript', 'Vercel', 'TailwindCSS'],
},
{
id: '2',
title: 'Monero exchange',
description: 'WIP Chrome extension to see prices in XMR',
href: '#',
tech: ['JSON', 'TypeScript'],
},
{
id: '3',
title: 'Poker Leage Management System',
description: 'WIP Poker management system',
href: 'https://github.com/w1r3less/qubpoker',
tech: ['Typescript', 'Kotlin', 'Supabase', 'betterauth'],
},
{
id: '4',
title: 'Neovim config',
description: 'Config I use, some experiments with plugins',
href: 'https://github.com/ryanking3/Nvconfig',
tech: ['Nvim', 'lua'],
},
{
    id: '5',
    title: 'Chaos Encryption Demo',
    description: 'Interactive demo of chaos theory–based image encryption',
    href: '#',
    tech: ['TypeScript', 'React', 'TailwindCSS'],
  },
]