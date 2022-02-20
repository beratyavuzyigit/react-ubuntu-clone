import Icon from '@mdi/react';
import { React, useState } from 'react';
// import { mdiClose, mdiMinus, mdiCropSquare, mdiChevronLeft, mdiChevronRight, mdiHome, mdiCog, mdiFolder, mdiFileOutline, mdiDownload, mdiMusic, mdiCamera, mdiMovieOpen, mdiTrashCan, mdiHarddisk, mdiLanConnect } from '@mdi/js';
import { mdiClose, mdiMinus, mdiCropSquare, mdiChevronLeft, mdiChevronRight, mdiCog, mdiHarddisk, mdiLanConnect } from '@mdi/js';
import * as MuiIcons from '@mdi/js';
import { useSelector, useDispatch } from 'react-redux';
import FolderContent from 'components/Applications/FolderContents/FolderContent';
import { Folder } from 'stores/applications'
import { FoldersArray, FoldersObject } from 'stores/types'

export default function Folders(props) {
    const dispatch = useDispatch();
    const FolderValue = props.FolderValue;
    const FolderVisible = useSelector((state) => state.applications.OpenFolders).includes(FolderValue);
    const OpenFolders = useSelector((state) => state.applications.OpenFolders);
    // const [positionX, setPositionX] = useState((document.body.clientWidth / 2) - 550 + (OpenFolders.length * 30));
    const [positionX, setPositionX] = useState((document.body.clientWidth / 2) - 550 + (OpenFolders.length * 30));
    // const [positionY, setPositionY] = useState((document.body.clientHeight / 2) + 192 + (OpenFolders.length * 30));
    const [positionY, setPositionY] = useState((document.body.clientHeight / 2) + 192 + (OpenFolders.length * 30));
    const [cursorX, setCursorX] = useState(0);
    const [cursorY, setCursorY] = useState(0);
    return (
        <div className={`Folder relative w-[1100px] h-96 ${FolderVisible ? 'animate-fade-up' : 'animate-fade-down'}`} style={{
            position: 'absolute',
            left: `${positionX}px`,
            top: `${positionY}px`,
        }}>
            <div className="w-full h-9 bg-[#45443f] flex items-center gap-5 px-5 rounded-t-xl shadow-[0_0px_10px_0px_rgba(0,0,0,0.3)]" draggable
                onDragStart={(e) => {
                    setCursorX(e.pageX);
                    setCursorY(e.pageY);
                }}
                onDrag={(e) => {
                    if (!(positionX - (cursorX - e.pageX) < 0) && !(positionY - (cursorY - e.pageY) < 0)) {
                        setCursorX(e.pageX);
                        setCursorY(e.pageY);
                        setPositionX(positionX - (cursorX - e.pageX));
                        setPositionY(positionY - (cursorY - e.pageY));
                    }
                }}
                onDragEnd={(e) => {
                    setCursorX(e.pageX);
                    setCursorY(e.pageY);
                    const newX = positionX - (cursorX - e.pageX) < 0 ? 0 : positionX - (cursorX - e.pageX);
                    const newY = positionY - (cursorY - e.pageY) < 0 ? 0 : positionY - (cursorY - e.pageY);
                    setPositionX(newX);
                    setPositionY(newY);
                }}>
                <div className='flex items-center gap-1 bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>
                    <button className='bg-[#e76033] text-zinc-800 p-1 rounded-full shadow-md shadow-gray-900' onClick={() => dispatch(Folder([FolderValue, false]))}><Icon path={mdiClose} size={0.5} /></button>
                    <button className='bg-[#787770] text-zinc-800 p-1 rounded-full shadow-md shadow-gray-900'><Icon path={mdiMinus} size={0.5} /></button>
                    <button className='bg-[#787770] text-zinc-800 p-1 rounded-full shadow-md shadow-gray-900'><Icon path={mdiCropSquare} size={0.5} /></button>
                </div>
                <div className='text-[#dedad1] text-sm font-semibold'>
                    {FoldersObject[FolderValue].name}
                </div>
            </div>
            <div className='w-full bg-[#41403b] shadow-inner shadow-[#3a3a3a] h-14 flex items-center relative'>
                <div className='ml-5 shadow-[0_0px_5px_0px_rgba(0,0,0,0.5)] rounded-md bg-[#363632]'>
                    <button className='py-1 px-3 rounded-l-md border-[1px] border-[#555] border-r-[#333]'><Icon path={mdiChevronLeft} size={1.5} color="#aaa" /></button>
                    <button className='py-1 px-3 rounded-r-md border-[1px] border-[#555] border-l-0'><Icon path={mdiChevronRight} size={1.5} color="#aaa" /></button>
                </div>
                <div className='ml-5 shadow-inner shadow-[#222] rounded-md bg-[#363632] flex flex-wrap gap-2 items-center px-3 h-12'>
                    <Icon path={MuiIcons[FoldersObject[FolderValue].icon]} size={1.1} color="#aaa" /> <span className='text-[#dedad1] text-sm font-semibold'>{FoldersObject[FolderValue].name}</span>
                </div>
                <div className='ml-5 shadow-[0_0px_5px_0px_rgba(0,0,0,0.3)] rounded-md bg-[#3d3d3d] flex flex-wrap gap-2 items-center px-3 h-12 border-[1px] border-[#555] right-2 absolute'>
                    <Icon path={mdiCog} size={1.1} color="#aaa" />
                </div>
            </div>
            <div className='w-full flex flex-wra text-[#564d55] text-base font-normal'>
                <div className='w-3/12  bg-[#e7e5e4]'>
                    <div className='text-left'>
                        <div className='px-5 py-1 text-lg font-semibold'>Yerler</div>
                        {FoldersArray.map(ArrFolderValue => (
                            <div className={`flex flex-wrap gap-2 pl-10 py-1 cursor-pointer ${ArrFolderValue === FolderValue ? 'bg-[#ed7443] text-white shadow-inner' : 'hover:bg-[#ed7443] hover:text-white hover:shadow-inner'}`}><Icon path={MuiIcons[FoldersObject[ArrFolderValue].icon]} size={1.1} /> <span >{FoldersObject[ArrFolderValue].name}</span></div>
                        ))}
                        {/* <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer bg-[#ed7443] text-white shadow-inner'><Icon path={test} size={1.1} /> <span >Başlangıç</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiFolder} size={1.1} /> <span >Masaüstü</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiFileOutline} size={1.1} /> <span >Belgelerim</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiDownload} size={1.1} /> <span >İndirilenler</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiMusic} size={1.1} /> <span >Müzik</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiCamera} size={1.1} /> <span >Resimler</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiMovieOpen} size={1.1} /> <span >Videolar</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiTrashCan} size={1.1} /> <span >Çöp</span></div> */}
                        <div className='px-5 py-1 text-lg font-semibold'>Aygıtlar</div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiHarddisk} size={1.1} /> <span >Yeni Birim</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiHarddisk} size={1.1} /> <span >Acer</span></div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiHarddisk} size={1.1} /> <span >Bilgisayar</span></div>
                        <div className='px-5 py-1 text-lg font-semibold'>Ağ</div>
                        <div className='flex flex-wrap gap-2 pl-10 py-1 cursor-pointer hover:bg-[#ed7443] hover:text-white hover:shadow-inner'><Icon path={mdiLanConnect} size={1.1} /> <span >Ağa Gözat</span></div>
                    </div>
                </div>
                <div className='w-9/12 bg-[#f2f1f0]'>
                    <FolderContent FolderValue={FolderValue} />
                </div>
            </div>
        </div >
    );
}