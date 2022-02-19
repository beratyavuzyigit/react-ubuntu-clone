import TopActivities from "./components/TopActivities";
import TopDate from "./components/TopDate";
import TopTools from "./components/TopTools";

export default function UbuntuTop() {
    return (
        <div className="w-full h-8 bg-[#222] flex items-center justify-between px-5 text-white text-sm">
            <TopActivities />
            <TopDate />
            <TopTools />
        </div>
    );
}