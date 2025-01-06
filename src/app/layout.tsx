import type { Metadata } from 'next'
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
	keywords: ['react', 'desenvolvedor', 'nextjs', 'next.js', 'dev'],
	openGraph: {
		type: 'website',
		url: '',
		locale: 'pt-BR',
		title: 'Leandro Campos | Desenvolvedor',
		description:
			'Aqui você encontra informaçãos profissionais sobre mim e meu portfólio',
		siteName: 'Leandro Campos | Desenvolvedor',
		images: [
			{
				url: '',
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
			</body>
		</html>
	)
}
