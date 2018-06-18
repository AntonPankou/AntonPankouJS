import * as React from 'react';
import './moviecard.css'

interface IMovieCardProps{
    backgroundLink: string
}

export class MovieCard extends React.Component<IMovieCardProps>{
    constructor(props: IMovieCardProps){
        super(props)
    }

    // public turnOnBottomBar =()=>{
        
    // }

    // public turnOfBottomBar =()=>{
        
    // }

    public render(){

        const style = {
            backgroundImage: "url("+this.props.backgroundLink+")"
        }

        return(
            <div style={style} className='ap-movie-card'>
                <div className='ap-movie-card--wrapper' style={style}>
                    <div className='ap-movie-card--icon-section'>
                        <div className='ap-movie-card--icon icon-info'><i className="fas fa-info"/></div>                        
                        <div className='ap-movie-card--icon info-watch'><i className="fas fa-heart" /></div>
                    </div>
                </div>
            </div>
        )
    }
}