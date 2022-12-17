import React from 'react';
import './VideoFooter.css';
// import { Button, Avatar } from "@mui/material";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SendIcon from '@mui/icons-material/Send';
import Ticker from 'react-ticker';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
    return (
        <div className='VideoFooter'>
        <div className='videoFooter'>
        {/* <Avatar src={avatarSrc} />
        <h3>
        {channel} <Button>Follow</Button>
        </h3> */}
        </div>
        <div className='videoFooter_ticker'>
            <MusicNoteIcon className="videoFooter_icon" />
            <Ticker mode="smooth">
                {({ index }) => (
                    <>
                        <h1>{song}</h1>
                    </>
                )}
            </Ticker>
        </div>
        <div className='videoFooter_actions'>
            <div className='videoFooter_actionLeft'>
            <FavoriteIcon fontSize='large'/>
            <ModeCommentIcon fontSize='large'/>
            <SendIcon fontSize='large'/>
            <MoreHorizIcon fontSize='large' />
            </div>
            <div className='videoFooter_actionRight'>
            <ModeCommentIcon />
            <p>{shares}</p>
            </div>
        </div>
        </div>
    );
}

export default VideoFooter;