import BodyMenuSearchBar from "components/BodyMenuSearchBar"
import BodyMenuApps from "components/BodyMenuApps"
import { useSelector } from 'react-redux'

export default function BodyMenu() {
    const menuToggle = useSelector((state) => state.menuToggle.value);

    return (
        <div className={`w-full h-full absolute top-0 left-0 bg-[#222222ef] transition-all ease-out ${menuToggle ? 'animate-fade-up' : 'animate-fade-down'} `}>
            <div className={`absolute w-full h-full transition-all ease-out duration-500 ${menuToggle ? 'top-0' : 'top-full'} `}>
                <BodyMenuSearchBar />
                <BodyMenuApps />
            </div>
        </div>
    );
}