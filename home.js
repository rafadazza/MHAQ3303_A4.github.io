import { h } from 'preact'
import { Link } from 'preact-router/match'

import projectStyles from '.style.css'
import styles from './home.css'

const Home = (props) => {
  return (
    <div class={styles['container']}>
      <h1 class={styles['text']}>STUDBUD</h1>
      <span class={styles['text01']}>
        An effective tool for managing your studying sessions for maximum
        efficiency!
      </span>
      <h1 class={styles['text02']}>Free Additional Study Tools!</h1>
      <img
        alt="image"
        src="/playground_assets/image_2022-05-26_211029119-200w.png"
        class={` ${styles['image']} ${projectStyles['button']} `}
      />
      <img
        alt="image"
        src="/playground_assets/%5Bobject%20object%5D-bvb-200w.png"
        class={` ${styles['image1']} ${projectStyles['button']} `}
      />
      <Link href="/stopwatch" class={styles['navlink']}>
        <img
          alt="image"
          src="/playground_assets/%5Bobject%20object%5D-k3ql-200h.png"
          class={` ${styles['image2']} ${projectStyles['button']} `}
        />
      </Link>
      <span class={styles['text03']}>Kanban Board</span>
      <span class={styles['text04']}>Pomodoro Timer</span>
      <span class={styles['text05']}>Dictionary Lookup</span>
      <span class={styles['text06']}>
        Sort your tasks into columns based on priorities, subject, or even just
        when you want to do it. Task sorting made easy!
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <span class={styles['text07']}>
        Set a timer for yourself based on set intervals, with included breaks
        for efficient studying!
      </span>
      <span class={styles['text08']}>
        Struggling with finding synonyms or meaning for words? Use a dictionary
        lookup and learn those words faster than before!
      </span>
      <span class={styles['text09']}>
        Sort your tasks into columns based on priorities, subject, or even just
        when you want to do it. Task sorting made easy!
        <span
          dangerouslySetInnerHTML={{
            __html: ' ',
          }}
        />
      </span>
      <button class={` ${styles['button']} ${projectStyles['button']} `}>
        <span class={styles['text10']}>TRY ME!</span>
      </button>
      <button class={` ${styles['button1']} ${projectStyles['button']} `}>
        <span class={styles['text11']}>TRY ME!</span>
      </button>
      <button class={` ${styles['button2']} ${projectStyles['button']} `}>
        <span class={styles['text12']}>TRY ME!</span>
      </button>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHN0dWR5fGVufDB8fHx8MTY1MzgxNDkyNQ&amp;ixlib=rb-1.2.1&amp;w=700"
        class={styles['image3']}
      />
    </div>
  )
}

export default Home
