import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client"
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries"
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import markdownit from 'markdown-it'
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { View } from "@/components/View";
const md = markdownit()


export const experimental_ppr = true
export default async function Startup({params} : {params : Promise<{id: string}>})  {
    const id = (await params).id
    const startup = await client.fetch(STARTUP_BY_ID_QUERY,{id});
    const startup_pitch = md.render(startup?.pitch || '');
    if(!startup) return notFound()
    return(

        <>
            <section className="pattern  !min-h-[330px] bg-blue-600 flex_center flex-col px-4 py-2">
                <p className="tag">{formatDate(startup?._createdAt)}</p>
                <h1 className="heady text-[46px] mt-2">{startup?.title}</h1>
                <p className="!max-w-5xl my-3 font-medium text-[20px] text-white  text-center break-words">{startup?.description}</p>
            </section>

            <section className="section-container px-6 py-10 max-w-7xl mx-auto">
                <img src={startup?.image} alt="thumbnail" className="w-full h-auto rounded-xl"/>
                <div className="space-y-5 mt-10 max-w-4xl mx-auto">
                    <div className="flex justify-between items-center gap-5">
                        <Link href={`/user/${startup.author?._id}`} className="flex gap-2 items-center mb-3">
                            <Image src={startup.author?.image || ''} alt="avatar" width={64} height={64} className="rounded-full drop-shadow-lg"/>
                            <div >
                                <p className="text-[20px] font-medium">{startup.author?.name}</p>
                                <p className="text-[20px] font-medium !text-black-300">@{startup.author?.username}</p>
                            </div>
                        </Link>
                        <p className="font-medium text-[16px] bg-blue-100 px-4 py-2 rounded-full">{startup?.category}</p>
                    </div>
                    <h3 className="text-[30px] font-bold">
                        Pitch Details
                        
                    </h3>
                    {startup_pitch ? (<article className="pros max-w-4xl break-all" dangerouslySetInnerHTML={{__html: startup_pitch}}></article>) :
                    <p>No Details provided</p>
                    }
                </div>
                <hr className="divider"/>
                
                <Suspense fallback={<Skeleton />}>
                    <View id={id}/>
                </Suspense>
            </section>


        </>
    )
}