
import Form from 'next/form';
import { SearchFormReset } from '@/components/SearchFormReset';
import { Search } from 'lucide-react';
export const Searchform = ({query}: {query ?: string}) => {
    
    return (
        <Form action='/dashboard' scroll={false} className='search-form'>
            <input name='query' defaultValue={query} className='search-input' placeholder='Search Startup'/>
            <div className='flex gap-2'>
                {query && (
                   <SearchFormReset />
                )}
                <button type='submit' className='search-btn'>
                    <Search/>
                </button>
            </div>
        </Form>
    )
}