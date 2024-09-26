import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( { category } ) => { 
    
    const { images, isLoading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }
            <div className="card-grid">
                {
                    // images.map( img => 
                    //     (
                    //         <li key={img.id}>{img.title}</li>
                    //     )
                    // )

                    // images.map( ({ id, title }) => 
                    //     (
                    //         //<li key={id}>{title}</li>
                    //         <GifItem key = { id } />
                    //     )
                    // )

                    images.map( ( image ) => 
                        (
                            <GifItem 
                                key = { image.id } 
                                { ... image }
                            />
                        )
                    )
                }
            </div>
        </>
    )
}