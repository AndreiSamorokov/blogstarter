import cn from 'classnames'
import ReactPlayer from 'react-player';


export default function LoadVideo({ title, src }) { 
  const isplay = 1;
  const control = 1;
  return (
    <div className="sm:mx-0">
         <ReactPlayer url={src} playing={isplay}  width='100%' min-height='500px' controls />
    </div>
  )
}
