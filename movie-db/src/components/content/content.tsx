import * as React from 'react';
import { MovieCard } from '../moviecard/moviecard'
import { discoverPopular } from '../store'
import './content.css'

const moviesArray: [{}] = discoverPopular.results;

const posterPath: string = `https://image.tmdb.org/t/p/w185`

interface IMovieCard {
    poster_path:string,
    id: number
}

const contentItems = moviesArray.map((item: IMovieCard, key: number)=>
    <MovieCard imageLink={ posterPath + item.poster_path } key={item.id} />
)

export class Content extends React.Component{
    public render(){
        return(
            <div className='ap-content'>
                <div className='ap-content--wrapper'>
                    {contentItems}
                </div>
            </div>
        )
    }
}