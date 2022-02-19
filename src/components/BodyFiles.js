import homeFileIcon from "assets/images/home-file-icon.png"
import { useSelector, useDispatch } from 'react-redux'
import { homeFolder } from 'stores/applications'
import Home from 'components/Applications/Home'

export default function BodyFiles() {
    const menuToggle = useSelector((state) => state.menuToggle.value);
    const dispatch = useDispatch();

    return (
        <div className={`w-full h-full p-7 flex items-start text-center text-xs text-white ${menuToggle ? 'animate-fade-down' : 'animate-fade-up'}`}>
            <div className="hover:bg-[#ffffff20] duration-75 p-3 px-4 rounded-sm cursor-pointer">
                <button className="flex flex-col justify-center gap-1" onClick={() => dispatch(homeFolder(true))}>
                    <div className="flex justify-center"><img src={homeFileIcon} className="w-12 h-max cursor-pointer" alt="Ubuntu Logo" /></div>
                    <div className="text-center truncate text-sm w-full">Firefox</div>
                </button>
            </div>
            <Home />
        </div>
    );
}