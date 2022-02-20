
import Baslangic from 'components/Applications/FolderContents/Baslangic';
import Masaustu from 'components/Applications/FolderContents/Masaustu';

export default function FolderContent(props) {
    if (props.FolderValue === 'baslangic') {
        return <Baslangic />;
    } else if (props.FolderValue === 'masaustu') {
        return <Masaustu />;
    } else {
        return (
            <div className='w-full h-full text-center pt-5'>Bu klasör boş</div>
        );
    }
}