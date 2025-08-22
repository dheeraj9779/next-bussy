
import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
// import { Button } from "./ui/button"
// import { Modal } from "./DialogBox"
// import { useState } from "react"

export const StartupCards = ({ post }: { post: StartupTypeCard }) => {
    const { _id, views, _createdAt, author, title, image, category,description } = post
    //   const [ openModal, setIsModalOpen ] = useState(false)
    // const authorId = author?._id ?? ''
    // const authorName = author?.name ?? ''
    // const authorImg = author?.image ?? 'https://placehold.co/48x48'
    return (
        <li className="startup-card" key={_id}>
            <div className="flex items-center justify-between">
                <p className="startup-card_date">{formatDate(_createdAt)}</p>
                <div className="flex gap-1.5 ">
                    <EyeIcon className="size-6 text-primary" />
                    <span className="text-1 font-medium ">{views}</span>
                </div>
                {/* <Button onClick={() =>setIsModalOpen(true)}>Open</Button>
                    <Modal  isOpen={openModal}
                        onClose={() => setIsModalOpen(false)}
                        title="My Modal">
                         <p>This is the content inside the modal.</p>
                         </Modal> */}

            </div>
            <div className="flex items-center justify-between mt-5">
                <div className="flex-1">
                    <Link href={`/user/${author?._id}`}>
                        <p className="text-1 font-medium line-clamp-1">{ author?.name}</p>
                    </Link>
                    <Link href={`/startup/${_id}`}>
                        <h3 className="text-[26px] font-bold line-clamp-1">{title}</h3>
                    </Link>
                </div>
                <Link href={`/user/${author?._id}`}>
                    <Image src={author?.image || ''} alt="placeholder" width={48} height={48} className="rounded-full" />
                </Link>
            </div>
            <Link href={`/startup/${_id}`}>
                <p className="startup-card_desc line-clamp-2 my-4">{description}</p>
                <img src={image} alt="placeholder" className=" w-full h-[164px] rounded-[10px] object-cover"/>
            </Link>
            <div className="flex justify-between items-center gap-3 mt-5">
                <Link href={`/dashboard/?query=${category.toLowerCase()}`}>
                    <p className="text-16 font-medium">{category}</p>
                </Link>
                <Button asChild>
                    <Link href={`/startup/${_id}`}>Details</Link>
                </Button>
            </div>

        </li>
    )
}

export type StartupTypeCard = {
    _createdAt: Date,
    views: number,
    author?: { _id: number, name: string, image: string, bio: string },
    _id: number,
    description: string,
    image: string,
    category: String,
    title: string
}