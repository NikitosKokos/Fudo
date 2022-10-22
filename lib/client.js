import SanityClient from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
   projectId: '8go97qgb',
   dataset: 'production',
   apiVersion: '2022-10-16',
   useCdn: true,
   token: 'skSTxpwM5aWc6hdSYWGqqS6SlswJXrXuk9C2qWEVccyWC5JOl4x1wCCD37ZnXvgeCqk1GpDWbu8EQUyRbnmcWtrIMnlHieexr5dffaOTuh3AohSMWdOsOxcdH4WSlSV9KRe9RkExLUR40WHZ0MDWvlQTawk5jIBPSbFOs1pVsAPoKJlXs2Go'
})

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);