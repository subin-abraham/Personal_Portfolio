// components/Meta.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const routeTitleMap: Record<string, string> = {
    '/': 'Home',
    '/about': 'About',
    '/projects': 'Projects',
    '/blogs': 'Blogs',
};

export default function Meta() {
    const pathname: any = usePathname();

    useEffect(() => {
        const defaultTitle = 'My Portfolio';
        const title = routeTitleMap[pathname] || defaultTitle;
        document.title = `${title} | ${defaultTitle}`;

        const faviconUrl = '/Icons/favicon.png'; 
        const link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
        if (link) {
            link.href = faviconUrl;
        } else {
            const newLink = document.createElement('link');
            newLink.rel = 'icon';
            newLink.href = faviconUrl;
            document.head.appendChild(newLink);
        }
    }, [pathname]);

    return null;
}
