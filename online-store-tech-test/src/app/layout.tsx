import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { BagProvider } from '@/context/bag-context';
import { NotificationProvider } from '@/context/notification-context';
import Notifications from '@/components/shared/notification';

// const interFont = Inter({
// 	variable: '--font-inter',
// 	subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
	title: 'Online Tech Store',
	description:
		'Shop the latest tech gadgets, electronics, and accessories at unbeatable prices. Fast shipping, top brands, and great deals – all in one place!',
	icons: { icon: { url: '/favicon.png', type: 'image/png' } },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`antialiased pb-10`}>
				<NotificationProvider>
					<BagProvider>
						<Notifications />
						<Header />
						<main className='pt-16'>{children}</main>
						<Footer />
					</BagProvider>
				</NotificationProvider>
			</body>
		</html>
	);
}
