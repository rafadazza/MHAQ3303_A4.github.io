import React from 'react'

const Home = (props) => {
  return (
    <>
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
          Sort your tasks into columns based on priorities, subject, or even
          just when you want to do it. Task sorting made easy!
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
          Struggling with finding synonyms or meaning for words? Use a
          dictionary lookup and learn those words faster than before!
        </span>
        <span className="home-text09">
          Sort your tasks into columns based on priorities, subject, or even
          just when you want to do it. Task sorting made easy!
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
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #ff0000;
          }
          .home-text {
            top: 35px;
            left: 25px;
            color: #ffffff;
            width: 670px;
            height: 157px;
            position: absolute;
            font-size: 8em;
            font-family: Merriweather;
          }
          .home-text01 {
            top: 184px;
            left: 36px;
            color: #ffffff;
            position: absolute;
            font-size: 48px;
            font-family: Inter;
          }
          .home-text02 {
            top: 324px;
            left: 37px;
            color: #ffffff;
            width: 1178px;
            position: absolute;
            font-size: 5em;
            font-style: normal;
            font-weight: 800;
            margin-right: 13px;
          }
          .home-image {
            top: 32px;
            left: 1309px;
            width: 142px;
            height: 142px;
            position: absolute;
            object-fit: cover;
            border-width: 0px;
          }
          .home-image1 {
            top: 32px;
            right: 57px;
            width: 142px;
            height: 142px;
            position: absolute;
            object-fit: cover;
            border-width: 0px;
          }
          .home-image2 {
            top: 32px;
            right: 228px;
            width: 142px;
            height: 142px;
            position: absolute;
            object-fit: cover;
            border-width: 0px;
          }
          .home-text03 {
            top: 429px;
            left: 39px;
            color: #ffffff;
            position: absolute;
            font-size: 36px;
            transition: 0.3s;
            font-family: Roboto;
            font-weight: 700;
          }
          .home-text03:hover {
            box-shadow: 5px 5px 10px 0px #272626;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .home-text04 {
            top: 431px;
            left: 429px;
            color: #ffffff;
            position: absolute;
            font-size: 36px;
            transition: 0.3s;
            font-family: Roboto;
            font-weight: 700;
          }
          .home-text04:hover {
            box-shadow: 5px 5px 10px 0px #272626;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .home-text05 {
            top: 433px;
            left: 803px;
            color: #ffffff;
            position: absolute;
            font-size: 36px;
            transition: 0.3s;
            font-family: Roboto;
            font-weight: 700;
          }
          .home-text05:hover {
            box-shadow: 5px 5px 10px 0px #272626;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .home-text06 {
            top: 487px;
            left: 40px;
            color: #ffffff;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
            font-size: 20px;
            transition: 0.3s;
          }
          .home-text06:hover {
            box-shadow: 5px 5px 10px 0px #7f7676;
          }
          .home-text07 {
            top: 486px;
            left: 428px;
            color: #ffffff;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
            font-size: 20px;
            transition: 0.3s;
          }
          .home-text07:hover {
            box-shadow: 5px 5px 10px 0px #7f7676;
          }
          .home-text08 {
            top: 486px;
            left: 804px;
            color: #ffffff;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
            font-size: 20px;
            transition: 0.3s;
          }
          .home-text08:hover {
            box-shadow: 5px 5px 10px 0px #7f7676;
          }
          .home-text09 {
            top: 487px;
            left: 40px;
            color: #ffffff;
            width: var(--dl-size-size-xxlarge);
            position: absolute;
            font-size: 20px;
            transition: 0.3s;
          }
          .home-text09:hover {
            box-shadow: 5px 5px 10px 0px #7f7676;
          }
          .home-button {
            top: 628px;
            left: 483px;
            width: 175px;
            height: 65px;
            display: flex;
            position: absolute;
            flex-direction: row;
            padding-bottom: 0px;
          }
          .home-text10 {
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-button1 {
            top: 625px;
            left: 833px;
            width: 175px;
            height: 65px;
            display: flex;
            position: absolute;
            flex-direction: row;
            padding-bottom: 0px;
          }
          .home-text11 {
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-button2 {
            top: 629px;
            left: 78px;
            width: 175px;
            height: 65px;
            display: flex;
            position: absolute;
            flex-direction: row;
            padding-bottom: 0px;
          }
          .home-text12 {
            font-size: 34px;
            font-style: normal;
            text-align: center;
            font-weight: 700;
          }
          .home-image3 {
            top: 305px;
            right: 46px;
            width: 668px;
            height: 409px;
            position: absolute;
            object-fit: cover;
          }
        `}
      </style>
    </>
  )
}

export default Home
