import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useSelector } from 'react-redux'

export default function Home() {
    const homeFolder = useSelector((state) => state.applications.homeFolder);

    return (
        <div className={`absolute w-[1100px] h-96 top-20 left-30 ${homeFolder ? 'animate-fade-up' : 'animate-fade-down'}`}>
            <div className="w-full h-8 bg-zinc-800 flex items-center gap-2 px-5">
                <div className='flex items-center gap-2 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
                    <button className='bg-[#e76033] text-zinc-800 p-1 rounded-full'><Icon path={mdiClose} size={0.5} /></button>
                    <button className='bg-[#e76033] text-zinc-800 p-1 rounded-full'><Icon path={mdiClose} size={0.5} /></button>
                    <button className='bg-[#e76033] text-zinc-800 p-1 rounded-full'><Icon path={mdiClose} size={0.5} /></button>
                </div>
            </div>
        </div>
    );
}