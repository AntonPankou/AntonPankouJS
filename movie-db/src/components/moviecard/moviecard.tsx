import * as React from 'react';
import './moviecard.css'

interface IMovieCardProps{
    imageLink: string
}

export class MovieCard extends React.Component<IMovieCardProps>{
    constructor(props: IMovieCardProps){
        super(props)
    }

    public render(){
        return(
            <div className='ap-movie-card'>
                <div>
                    <img className='ap-movie-card--image' src={this.props.imageLink} />                    
                </div>
            </div>
        )
    }
}