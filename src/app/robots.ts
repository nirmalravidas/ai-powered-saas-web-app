import { APP_DOMAIN } from '@/utils'
import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/payment/', '/api/', '/privacy-policy/', '/terms/', '/auth-callback/', '/dashboard/', '/cancellation-and-refund-policy/', '/conatct/'],  
    },
    sitemap: `${APP_DOMAIN}/sitemap.xml`,
  }
}