import React from "react";
import ProjectItem from './ProjectItem'
import cryptoImg from '../assets/crypto.png'
import cloneSpotifyImg from '../assets/cloneSpotify.png'
import tmdbImg from '../assets/tmdb.png'
import kyouImg from '../assets/kyou.png'

const Projects = () => {
    return(
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Projects
            </h1>
            <p className='text-center py-8'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quas placeat, doloremque fugit saepe dolor iusto ipsa cum expedita architecto dolore ipsam exercitationem repudiandae. Omnis a voluptate similique assumenda culpa!
            </p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={cloneSpotifyImg}  title='Clone Spotify'/>
                <ProjectItem img={tmdbImg}  title='TMDB Anime'/>
                <ProjectItem img={kyouImg}  title='Clone Kyou.id'/>
                <ProjectItem img={cryptoImg}  title='Crypto App'/>
            </div>
        </div>
    )
}
export default Projects