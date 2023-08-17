import './Hero.css';
import Carousel from 'react-material-ui-carousel'; 
import { Paper } from '@mui/material';

const Hero = ({movies}) => {
    return (
        <div className='movie-carousel-cpntainer'>
              <Carousel> 
                {
                    movies.map((movie) => {
                        return (
                            <Paper>
                                <div className='movie-card-cpntainer'>
                                    <div className="movie-card">
                                        <div className="movie-detail">
                                            <div className="movie-poster">
                                                <img src = {movie.poster} alt = "" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title} </h4>
                                             </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </Paper>
                        )
                    })
                }
          
                        
            </Carousel>
        </div>
    )
}
Hero.defaultProps = {
    movies: []
};  
export default Hero