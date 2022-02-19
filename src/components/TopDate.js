export default function TopDate() {
    const months = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];
    let newDate = new Date()
    let date = newDate.getDate();
    let month = months[newDate.getMonth()];
    let hours = newDate.getHours();
    let minutes = newDate.getMinutes();
    return (
        <div>
            {month} {date} {hours}:{minutes}
        </div>
    );
}