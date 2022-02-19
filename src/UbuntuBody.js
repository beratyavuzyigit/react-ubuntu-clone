import homeFileIcon from "./assets/images/home-file-icon.png"

export default function UbuntuBody() {
    return (
        <div className="w-full h-full p-7 flex items-start text-center text-xs text-white">
            <div className="flex flex-col justify-center gap-1">
                <img src={homeFileIcon} className="w-12 h-max cursor-pointer" alt="Ubuntu Logo" />
                <span>Folder</span>
            </div>
        </div>
    );
}