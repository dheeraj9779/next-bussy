import Image from "next/image";
import { Searchform } from "@/components/Searchform";
import { StartupCards } from "@/components/StartupCards";

export default async function Home({searchParams}: {searchParams: Promise<{query ?: string}>}) {
    const query = (await searchParams).query;
    const posts = [{
        _createdAt: '',
        views: 55,
        author: {_id:1},
        _id: 1,
        description: 'My Description',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww',
        category: 'Robots',
        title: 'The robots'
    },
    {
        _createdAt: '',
        views: 55,
        author: {_id:1},
        _id: 1,
        description: 'My Description',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww',
        category: 'Toys',
        title: 'The robots'
    },
    {
        _createdAt: '',
        views: 55,
        author: {_id:1},
        _id: 1,
        description: 'My Description',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww',
        category: 'Cars',
        title: 'The robots'
    },
    {
        _createdAt: '',
        views: 55,
        author: {_id:1},
        _id: 1,
        description: 'My Description',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvYm90aWNzfGVufDB8fDB8fHww',
        category: 'Dolls',
        title: 'The robots'
    }
]
  return (
    <>
    <section className="yellow-container  min-h-[530px] bg-blue-600 flex_center flex-col">
        <div className="text-[36px] heady">Pitch your startup, <br/>Connect with us</div>
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
                        posts.map((post) => 
                            // <li key={post?._id}>{post?.title}</li>
                            <StartupCards key={post?._id} post={post}/>
                        )
                    ):
                    (
                        <p className="">No startups found</p>
                    )
            }
        </ul>
    </section>
    </>
    
  );
}
 
