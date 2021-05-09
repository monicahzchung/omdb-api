import SearchBox from './searchBox';
import MovieResults from './movieResults';
import Slogan from './slogan'

const Landing = () => {
    return (
        <>
                <Slogan />
                <div className='container'>
                    <SearchBox />
                    <MovieResults />
                </div>
                
        </>
    )
}

export default Landing;