import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {
    const {images} = useFetchGifs(category);
    return (
        <> 
         <hr/>    
         <h3>{category}</h3>
          <div className='card-grid'>
            {
             images.map( (image) =>(
                <GifItem 
                key={image.id}
                    {...image}
                    />
                    ))
                }
            </div>
        
        </>
  )
}
export default GifGrid


