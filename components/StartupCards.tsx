export const StartupCards = ({post}: {post: StartupTypeCard}) => {
    return (
        <li className="startup-card group">{post.category}</li>
    )
}

type StartupTypeCard = {
    _createdAt: string,
        views: number,
        author: {},
        _id: number,
        description: string,
        image: String,
        category: String,
        title: string
}