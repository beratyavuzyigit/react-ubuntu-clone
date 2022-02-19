import Icon from '@mdi/react';
import { mdiLan, mdiVolumeHigh, mdiPower, mdiMenuDown } from '@mdi/js';

export default function TopTools() {
    return (
        <div className='flex gap-2 items-center'>
            <Icon path={mdiLan} title="" size={0.8} />
            <Icon path={mdiVolumeHigh} title="" size={0.8} />
            <Icon path={mdiPower} title="" size={0.8} />
            <Icon path={mdiMenuDown} title="" size={0.8} />
        </div>
    );
}