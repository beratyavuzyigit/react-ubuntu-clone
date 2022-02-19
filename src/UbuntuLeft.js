import Icon from '@mdi/react';
import { mdiDotsGrid } from '@mdi/js';
import firefoxIcon from "./assets/images/firefox-icon.png"
import mailIcon from "./assets/images/mail-icon.png"
import fileBrowserIcon from "./assets/images/file-browser-icon.png"
import { useDispatch } from 'react-redux'
import { menuToggle } from 'stores/menuToggle'

export default function UbuntuLeft() {
    const dispatch = useDispatch();

    return (
        <div className="bg-[#00000070] w-20 h-full flex justify-center flex-wrap content-start gap-6 py-5 relative">
            <img src={firefoxIcon} className="w-12 h-max hover:scale-110 duration-300 cursor-pointer" alt="Ubuntu Logo" />
            <img src={fileBrowserIcon} className="w-12 h-max hover:scale-110 duration-300 cursor-pointer" alt="File Browser Logo" />
            <img src={mailIcon} className="w-12 h-max hover:scale-110 duration-300 cursor-pointer" alt="Mail Logo" />
            <button className='absolute bottom-2 flex flex-wrap text-white hover:bg-[#ffffff10] duration-200 p-3 rounded-md cursor-pointer' onClick={() => dispatch(menuToggle())}>
                <Icon path={mdiDotsGrid} title="" size={1.5} />
            </button>
        </div>
    );
}