import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
	weight: ['400', '500', '700'],
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Leandro Campos | Desenvolvedor',
	description:
		'Aqui você encontre informaçãos profissionais sobre mim e meu portfólio',
	robots: {
		index: true,
	},
	keywords: [
		'react',
		'desenvolvedor',
		'nextjs',
		'next.js',
		'dev',
		'camposweb',
		'camposweb@gmail.com',
		'front-end',
		'Front-end',
		'Desenvolvedor Salvador',
		'Salvador',
	],
	openGraph: {
		type: 'website',
		url: 'https://mylinks-camposweb.vercel.app/',
		locale: 'pt-BR',
		title: 'Leandro Campos | Desenvolvedor',
		description:
			'Aqui você encontra informaçãos profissionais sobre mim e meu portfólio',
		siteName: 'Leandro Campos | Desenvolvedor',
		images: [
			{
				url: '/public/opengraph-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Leandro Campos | Desenvolvedor',
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${roboto.variable} antialiased bg-zinc-800 font-roboto`}
			>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
