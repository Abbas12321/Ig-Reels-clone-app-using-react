import React, { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import VideoCard from './VideoCard';

function App() {
  
  const [reels, setReels] = useState([]);
  
  useEffect (() =>{
    db.collection('reels').onSnapshot(snapshot =>(
      setReels(snapshot.docs.map(doc => doc.data()))
    ))
  }, [])

  return (

    // BEM naming convention
    <div className="app">
      <h1>Hey Abbas Shaikh, Lets build ig reels clone 🚀!</h1>

      <div className='app_top'>
      <img className='app_logo' 
      src='https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png'  alt=''/>
      {/* images at top logo  */}
      {/* reels text */}
      <h1>Reels</h1>
      </div>

      <div className='app_videos'>
      {reels.map(({channel, avatarSrc, song,url, likes, shares}) =>{
        {/* container of app videos {scrollable container} */}
      <VideoCard 
      channel={channel}
      avatarSrc={avatarSrc}
      song={song}
      url={url}
      likes={likes}
      shares={shares}
      />
      })}
      
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      <VideoCard/>
      {/* <videos/> */}
      {/* <videos/> */}
      {/* <videos/> */}
      {/* <videos/> */}
      {/* <videos/> */}
      </div>
    </div>
  )
}

export default App;

