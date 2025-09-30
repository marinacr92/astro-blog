import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: ({image}) => z.object({
        title: z.string(),
        date: z.date(),
        description: z.string(),
        image: image(),

        // Relación 
        author: reference('author'),

        // Relación
        tags: z.array(z.string())
    })
})

// La diferencia entre el "content" y la "data" es que la data no tiene estructura visual, es solo metadata. Podemos hacer relaciones entre colecciones, ya sean data o content

const authorCollection = defineCollection({
    type: "data",
    schema: ({image}) => z.object({
        name: z.string(),
        avatar: image()
    })
})


export const collections = {
    blog: blogCollection,
    author: authorCollection
}


