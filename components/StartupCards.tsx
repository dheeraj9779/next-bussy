import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const StartupCards = ({ post }: { post: StartupTypeCard }) => {
    const { _id, views, _createdAt, author: { _id: authorId, name }, title, image, category,description } = post
    return (
        <li className="startup-card group" key={_id}>
            <div className="flex items-center justify-between">
                <p className="startup-card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-1 font-medium ">{views}</span>
                </div>

            </div>
            <div className="flex items-center justify-between">
                <div className="flex-1">
                    <Link href={`/user/${authorId}`}>
                        <p className="text-1 font-medium line-clamp-1">{name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-[26px] font-bold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${authorId}`}>
                    <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc line-clamp-2">{description}</p>
            </Link>
        </li>
    )
}

type StartupTypeCard = {
    _createdAt: Date,
    views: number,
    author: { _id: number, name: string },
    _id: number,
    description: string,
    image: String,
    category: String,
    title: string
}