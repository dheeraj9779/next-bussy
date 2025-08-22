import Image from "next/image";
import { Searchform } from "@/components/Searchform";
import { StartupCards, StartupTypeCard } from "@/components/StartupCards";
import { client } from "@/sanity/lib/client";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";


export default async function Home({searchParams}: {searchParams: Promise<{query ?: string}>}) {
    const query = (await searchParams).query;
    const params = {search: query || null}
   // const posts = await client.fetch(STARTUPS_QUERY)
    const {data:posts} = await sanityFetch({query:STARTUPS_QUERY,params})
    console.log(posts)
    
  return (
    <>
    <section className="pattern  min-h-[500px] bg-blue-600 flex_center flex-col px-4 py-2">
        <h1 className="text-[56px] heady">Pitch your startup, <br/>Connect with us</h1>
        <p className="!max-w-3xl my-3 font-medium text-[20px] text-white max-w-2xl text-center break-words">Create ideas and showcase it to the world!</p>
        <Searchform query={query}/>
    </section>

    <section className="px-6 py-10 max-w-7xl mx-auto">
        <p className="text-[30px] font-semibold">
            {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 grid md:grid-cols-3 sm:grid-cols-2 gap-5">
            {
                posts.length > 0 ?  
                    (
                        posts.map((post:StartupTypeCard) => 
                            <StartupCards key={post?._id} post={post}/>
                        )
                    ):
                    (
                        <p className="">No startups found</p>
                    )
            }
        </ul>
    </section>
    <SanityLive/>
    </>
    
  );
}
 
