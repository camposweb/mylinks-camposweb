import Image from 'next/image'
import Link from 'next/link'

import profile from './assets/perfil-compact.jpg'

import {
	GithubLogo,
	LinkedinLogo,
	WhatsappLogo,
	EnvelopeSimple,
} from '@phosphor-icons/react/dist/ssr'

export default function Home() {
	return (
		<main className="flex flex-col justify-center items-center pt-10 py-8 px-8 lg:px-80">
			<Image
				src={profile}
				alt="profile"
				className="object-cover rounded-full w-40 h-40"
				quality={100}
				width={150}
				height={150}
			/>
			<h1 className="font-bold text-4xl mt-10 text-white">Leandro Campos</h1>
			<span className="font-medium text-lg text-gray-100">Desenvolvedor</span>
			<section className="flex flex-col justify-center items-center gap-1 mt-4">
				<Link
					href={'mailto:camposweb@gmail.com'}
					className="flex items-center gap-2 hover:underline font-roboto text-gray-100"
				>
					<EnvelopeSimple size={22} /> camposweb@gmail.com
				</Link>
				<Link
					href={'https://wa.me/5571991470062'}
					target="_blank"
					className="flex items-center gap-2 hover:underline font-roboto text-gray-100"
				>
					<WhatsappLogo size={22} /> (71) 99147-0062
				</Link>
				<Link
					href={'https://www.linkedin.com/in/camposdev/'}
					target="_blank"
					className="flex items-center gap-2 hover:underline font-roboto text-gray-100"
				>
					<LinkedinLogo size={22} /> linkedin.com/in/camposdev
				</Link>
				<Link
					href={'https://github.com/camposweb'}
					target="_blank"
					className="flex items-center gap-2 hover:underline font-roboto text-gray-100"
				>
					<GithubLogo size={22} /> github.com/camposweb
				</Link>
			</section>
			<article className="px-8 py-4 bg-gray-900 rounded-md mt-8">
				<p className="text-center md:text-left text-base font-roboto text-gray-300 leading-relaxed">
					Desenvolvedor Front-End com ampla experiência na criação de interfaces
					modernas e otimizadas utilizando ReactJS, Next.js e ferramentas de
					estilização como TailwindCSS e styled-components. Hábil na criação de
					aplicações responsivas e otimizadas, garantindo fidelidade ao design
					no Figma e foco na experiência do usuário. Conhecimento em testes
					unitários e end-to-end com Cypress e React Testing Library e
					gerenciamento de estado com ContextAPI, Redux, React Query. Possuo
					também habilidades complementares em back-end com Java e Spring Boot
					Web, integrando front-end a APIs robustas e escaláveis. Experiência em
					metodologias ágeis (Scrum, Kanban) e no uso de ferramentas como GIT e
					Docker, com certificações em ReactJS, Java e AWS que reforçam meu
					compromisso com a qualidade e aprendizado contínuo.
				</p>
			</article>
		</main>
	)
}
