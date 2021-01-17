import React from 'react';
import "./searchpage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchpage-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
              image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s88-c-k-c0xffffffff-no-rj-mo"
              channel="Clever Programmer"
              verified
              subs="822k"
              noOfVideos={382}
              description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the next level."
            />

            <hr />

            <VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
             image="https://i.ytimg.com/an_webp/NT299zIk2JY/mqdefault_6s.webp?du=3000&sqp=CKqElP0F&rs=AOn4CLB9qgRhFp9T720lpZENZOSSMhm3VQ"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Build a iMessage Clone with REACT.JS for Beginners! (with REDUX)"
             image="https://i.ytimg.com/an_webp/h-bBfLc0Xto/mqdefault_6s.webp?du=3000&sqp=CPqrlP0F&rs=AOn4CLDDRN2l4UgdqkFTQKePgzeE2hgfpg"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Building a MERN Discord Clone for Beginners (w/ REDUX"
             image="https://i.ytimg.com/an_webp/B-kxUMHBxNo/mqdefault_6s.webp?du=3000&sqp=COq5lP0F&rs=AOn4CLAE1-4AB5lnUd7pfg9_sRA4KAbukw"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Build a Messenger MERN Clone for Beginners (REACT.JS)"
             image="https://i.ytimg.com/an_webp/pUxrDcITyjg/mqdefault_6s.webp?du=3000&sqp=CNjFlP0F&rs=AOn4CLDe1-1kdt5rzT8TX9uRLK_Q7W2L8g"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Build a Facebook MERN Clone for Beginners (REACT.JS)"
             image="https://i.ytimg.com/an_webp/rJjaqSTzOxI/mqdefault_6s.webp?du=3000&sqp=CN6elP0F&rs=AOn4CLBP9QjPVZvvMUZqxks82pqYHE8s0g"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 Build a Discord clone with REACT.JS for beginners! (With REDUX)"
             image="https://i.ytimg.com/an_webp/r5iFrxi9-hY/mqdefault_6s.webp?du=3000&sqp=CLSklP0F&rs=AOn4CLCThcGccnHJry6ZoRpROAf3Lr_SUQ"
            />

<VideoRow 
             views="1.4m"
             subs="659k"
             description="Do you want free one hour training...."
             timestamp="Streamed live on 29 Jul 2020"
             channel="Clever Programmer"
             title="🔴 How to Build a MERN Instagram Clone with REACT JS for Beginners 🚀"
             image="https://i.ytimg.com/an_webp/_Z6eRoagmz4/mqdefault_6s.webp?du=3000&sqp=CIKulP0F&rs=AOn4CLBl8F53jYpsvkLysjeU5uqeT5K8xg"
            />

        </div>
    )
}

export default SearchPage
