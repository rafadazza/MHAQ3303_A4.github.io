import React from 'react'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <h1 className="home-text">STUDBUD</h1>
      <span className="home-text01">
        An effective tool for managing your studying sessions for maximum
        efficiency!
      </span>
      <h1 className="home-text02">Free Additional Study Tools!</h1>
      <img
        alt="image"
        src="/playground_assets/image_2022-05-26_211029119-200w.png"
        className="home-image button"
      />
      <img
        alt="image"
        src="/playground_assets/%5Bobject%20object%5D-bvb-200w.png"
        className="home-image1 button"
      />
      <img
        alt="image"
        src="/playground_assets/%5Bobject%20object%5D-k3ql-200h.png"
        className="home-image2 button"
      />
      <span className="home-text03">Kanban Board</span>
      <span className="home-text04">Pomodoro Timer</span>
      <span className="home-text05">Dictionary Lookup</span>
      <span className="home-text06">
        Sort your tasks into columns based on priorities, subject, or even just
        when you want to do it. Task sorting made easy!
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span className="home-text07">
        Set a timer for yourself based on set intervals, with included breaks
        for efficient studying!
      </span>
      <span className="home-text08">
        Struggling with finding synonyms or meaning for words? Use a dictionary
        lookup and learn those words faster than before!
      </span>
      <span className="home-text09">
        Sort your tasks into columns based on priorities, subject, or even just
        when you want to do it. Task sorting made easy!
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <button className="home-button button">
        <span className="home-text10">TRY ME!</span>
      </button>
      <button className="home-button1 button">
        <span className="home-text11">TRY ME!</span>
      </button>
      <button className="home-button2 button">
        <span className="home-text12">TRY ME!</span>
      </button>
      <img
        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHN0dWR5fGVufDB8fHx8MTY1MzgxNDkyNQ&amp;ixlib=rb-1.2.1&amp;w=700"
        alt="image"
        className="home-image3"
      />
    </div>
  )
}

export default Home
