import React from 'react';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import { posts } from './Posts';
import './App.css'

function App() {
  return (
    <>

      {/* Top bar */}
      <Header 
        pfp="percypic.png"
      />

      {/* Posts */}
      {posts.map((postCluster,i) => 
        <React.Fragment key={i}>
          {postCluster.map((postItem,j) => {
            return (
              <React.Fragment key={j}>
                <Post
                  username={postItem.username}
                  account={postItem.account}
                  text={postItem.text}
                  pfp={"/public/pfps/"+postItem.pfp}
                  verified1={postItem.verified1}
                  verified2={postItem.verified2}
                  likes={postItem.likes}
                  reposts={postItem.reposts}
                  replies={postItem.replies}
                  continues={j < postCluster.length - 1}
                  image={postItem.image}
                />
                {j == postCluster.length - 1 && <div className='break'></div>}
              </React.Fragment>
            );
          })}
        </React.Fragment>
      )}

      {/* Bottom bar */}
      <Footer />
      
    </>
  )
}

export default App
