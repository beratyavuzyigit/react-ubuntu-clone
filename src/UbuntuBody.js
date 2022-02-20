import BodyFiles from "./components/BodyFiles"
import BodyMenu from "./components/BodyMenu"

export default function UbuntuBody() {
    return (
        <div className="w-full h-full relative">
            <BodyFiles />
            <BodyMenu />
        </div>
    );
}