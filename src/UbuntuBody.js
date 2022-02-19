import BodyFiles from "./components/BodyFiles"
import BodyMenu from "./components/BodyMenu"
import { useSelector } from 'react-redux'

export default function UbuntuBody() {
    const menuToggle = useSelector((state) => state.menuToggle.value);
    return (
        <div className="w-full h-full relative">
            <BodyFiles />
            <BodyMenu />
        </div>
    );
}