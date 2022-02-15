import Head from "next/head";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import style from "../styles/Home.module.css";

export default function Home() {
  const [date] = useState(new Date().toDateString().slice(0, 10));
  console.log(date);

  return (
    <div className={style.container}>
      <Head>
        <title>Lawd Gaming</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className=''>
        <header>
          <h1 className={style.date}>{date}</h1>

          <div className='flex items-center justify-between'>
            <h3 className={style.today}>Today</h3>
            {/* user here and flex */}
            <Link href='/user/login'>
              <a className={`text-white ${style.login}`}>Login</a>
            </Link>
          </div>
        </header>

        <section className={style.section_container}>
          <div className={style.image_container}>
            <img
              src='pubg_new_state.jpg'
              alt='new state'
              className={style.home_img}
            />
            <div className={`p-3  ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>GET</a>
              </Link>
            </div>
          </div>
        </section>

        {/* top games treding right now */}
        <section className={`${style.trending_Section} p-3 mb-7`}>
          <div>
            <h2 className={style.trending_title}>NOW TRENDNG</h2>
            <h1 className={style.trending_top_games}>Top Games Right Now</h1>
          </div>

          {/* games */}
          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>
        </section>

        {/* hotest games */}
        <section className={`${style.trending_Section} p-3 mb-7`}>
          <div>
            <h2 className={style.trending_title}>NOW TRENDNG</h2>
            <h1 className={style.trending_top_games}>Hotest Games Right Now</h1>
          </div>

          {/* games */}
          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>

          <div>
            <div className={`my-3 ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='pubg_new_state.jpg'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>DOWNLOAD</a>
              </Link>
            </div>
            <hr />
          </div>
        </section>

        <section className={style.section_container}>
          <div className={style.image_container}>
            <img src='giphy.gif' alt='new state' className={style.home_img} />
            <div className={`p-3  ${style.img_btm}`}>
              <div className='  flex items-center'>
                {/* game profile */}
                <div className='pr-3 flex items-center'>
                  <img
                    src='giphy.gif'
                    alt='new state'
                    className={style.game_dp}
                  />
                </div>
                {/* text */}
                <div>
                  <h5 className={style.game_title}>Pubg New State</h5>
                  <p className={style.game_status}>Extreme Battle Royale</p>
                </div>
              </div>
              {/* getbtn */}
              <Link href='/get'>
                <a className={style.get_btn}>GET</a>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className={""}></footer>
    </div>
  );
}
