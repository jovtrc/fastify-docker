import Fastify from 'fastify'
import cors from '@fastify/cors'

const fastify = Fastify({
    logger: true
})

await fastify.register(cors, {
    origin: true
})

fastify.get('/', async function handler (request, reply) {
    return [
        {
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultrices velit at condimentum semper",
            author: "John Doe",
            image: "https://picsum.photos/300/300",
            content: "Integer congue varius eros eget vehicula. Nam rutrum elit quis rhoncus cursus. Aliquam ac iaculis tortor, eu ornare ex. Duis luctus odio non posuere vehicula. Nullam nisi velit, pellentesque ut consequat quis, tincidunt vitae tellus. Vivamus mollis eu dui bibendum porta. Morbi nec euismod nunc. Suspendisse eu sapien ultrices, egestas libero ac, egestas eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean tincidunt posuere eros ac blandit. Integer finibus commodo orci non cursus. Proin id neque et mauris mattis commodo. Nam suscipit congue eros at tristique. Morbi quis erat varius, maximus justo ut, rutrum metus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."
        }
    ]
})

try {
    await fastify.listen({ host: "0.0.0.0", port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}