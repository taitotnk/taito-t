export interface Post {
    id: string
    title: string
    createdAt: Date
    updatedAt: Date
    description: string
    content: string
    thumbnail: {
        url: string
    }
    // tags: [
    //     {
    //         id: string
    //         name: string
    //     }
    // ]
}