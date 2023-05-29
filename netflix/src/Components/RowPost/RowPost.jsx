
import './RowPost.css'
import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'
import Youtube from 'react-youtube';



function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId,setUrlId]=useState('')
  useEffect(()=>{

      axios.get(props.url).then(response=>{
       console.log(response.data);
       setmovies(response.data.results)
      })
     
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
 
      if(response.data.results.length!==0){
      
        console.log(response.data.results[0] , "kk");
        setUrlId(response.data.results[0])
      }else{
        console.log("trailer not available");
      }

    })
    .catch(err => console.log(err , "catch error"))
  }

  return (
    <div className='row' >
      <h2>{props.title}</h2>
      <div className='posters'>
       {movies.map((obj)=>

      <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter" :'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

  )}
      
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key} />}

    </div>
  )
}

export default RowPost