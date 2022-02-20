import firefoxIcon from "assets/images/firefox-icon.png"
import mailIcon from "assets/images/mail-icon.png"
import fileBrowserIcon from "assets/images/file-browser-icon.png"
import instagramIcon from "assets/images/instagram.png"
import translateIcon from "assets/images/translate.png"
import settingsIcon from "assets/images/settings.jpg"
import twitterIcon from "assets/svg/twitter.svg"

export default function BodyMenuApps() {
    return (
        <div className="flex justify-center relative mt-20 transition-all ease-out duration-500">
            <div className="w-[900px] flex flex-wrap justify-start">
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-5">
                    <div className="hover:bg-[#ffffff20] duration-200 p-3 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={firefoxIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Firefox</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-3">
                    <div className="hover:bg-[#ffffff20] duration-200 p-4 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={mailIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Mail</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-3">
                    <div className="hover:bg-[#ffffff20] duration-200 p-4 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={fileBrowserIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">File Manager</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-5">
                    <div className="hover:bg-[#ffffff20] duration-200 p-3 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={instagramIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Instagram</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-3">
                    <div className="hover:bg-[#ffffff20] duration-200 p-4 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={twitterIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Twitter</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-3">
                    <div className="hover:bg-[#ffffff20] duration-200 p-4 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={translateIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Translate</div>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-2 w-[150px] text-white p-3">
                    <div className="hover:bg-[#ffffff20] duration-200 p-4 rounded-xl cursor-pointer">
                        <div className="flex justify-center"><img src={settingsIcon} className="w-16 h-max mb-2" alt="Ubuntu Logo" /></div>
                        <div className="text-center truncate text-sm">Settings</div>
                    </div>
                </div>
            </div>
        </div>
    );
}