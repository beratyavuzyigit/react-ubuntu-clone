import UbuntuTop from './UbuntuTop';
import UbuntuLeft from './UbuntuLeft';
import UbuntuBody from './UbuntuBody';


function App() {
  return (
    <div className='fixed bg-default_wallpaper bg-center bg-cover w-full h-full font-ubuntu select-none flex flex-col'>
      <div>
        <UbuntuTop />
      </div>
      <div className='flex w-full h-full'>
        <UbuntuLeft />
        <UbuntuBody />
      </div>
    </div>
  );
}

export default App;
