import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: 'https://mylinks-camposweb.vercel.app/sitemap.xml',
	}
}
