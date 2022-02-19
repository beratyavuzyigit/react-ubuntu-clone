import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

export default function BodyMenuSearchBar() {
    return (
        <div className="w-full flex justify-center mt-10">
            <div className='bg-white rounded-3xl flex justify-between items-center py-1 px-5 w-1/4'>
                <Icon path={mdiMagnify} title="" size={1} horizontal color='#777' className='w-1/12' />
                <input type="text" className='bg-none outline-none p-1 font-ubuntu w-11/12' placeholder='Arama için yaz' />
            </div>
        </div>
    );
}