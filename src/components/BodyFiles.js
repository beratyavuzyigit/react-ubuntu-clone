import homeFileIcon from "assets/images/home-file-icon.png"
import { useSelector, useDispatch } from 'react-redux'
import { Folder } from 'stores/applications'
import Folders from 'components/Applications/Folders'
import { FoldersObject, FoldersArray } from 'stores/types'

export default function BodyFiles() {
    const menuToggle = useSelector((state) => state.menuToggle.value);
    const OpenFolders = useSelector((state) => state.applications.OpenFolders);
    console.log(OpenFolders);
    const dispatch = useDispatch();
    return (
        <div className={`w-full h-full p-7 flex items-start text-center text-xs text-white ${menuToggle ? 'animate-fade-down' : 'animate-fade-up'}`}>
            <div>
                {FoldersArray.map(FolderValue => (
                    <button className="flex flex-col justify-center gap-1 hover:bg-[#ffffff20] duration-75 p-3 px-4 rounded-sm cursor-pointer" onClick={() => dispatch(Folder([FolderValue, true]))}>
                        <div className="flex justify-center w-full"><img src={homeFileIcon} className="w-12 h-max cursor-pointer" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm w-full">{FoldersObject[FolderValue].name}</div>
                    </button>
                ))}

            </div>
            {OpenFolders.map(FolderValue => (
                <Folders FolderValue={FolderValue} />
            ))}
        </div>
    );
}