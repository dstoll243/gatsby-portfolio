import React from 'react'
import Section from '../Section'
import ExperienceUnit from '../ExperienceUnit'

import bloomio from '../../assets/images/projects/Bloomio.png'
import musicPic from '../../assets/images/projects/MusicPicFlow.jpg'
import runWalkCrawl from '../../assets/images/projects/RUN-WALK-CRAWL.png'
import seattleBreweryFinder from '../../assets/images/projects/Seattle_Brewery_Finder.png';

class ProjectsSection extends React.Component {
  render() {
    return (
      <Section title="Projects">
        <div className="row">
          <ExperienceUnit
            logo={musicPic}
            title="Music Pic"
            link="https://github.com/MusicPic"
            timeperiod="2018"
            subtitle="MusicPic helps you find music you may be interested in depending on your mood. Users log in using Spotify Oauth, which allows users to upload a picture to Microsoft Azure's Face API to determine the mood of the person in the picture. This information is then used to find a relevant playlist on Spotify for the user to listen to."
          />
          <ExperienceUnit
            logo={bloomio}
            title="Bloomio"
            link="https://github.com/Bloomio/Bloomio-backend"
            timeperiod="2018"
            subtitle="Bloomio is a calendar-assistant app designed to assist in caring for one's plants and also utilizes an extensive database of comprehensive plant-care directions. Users are able to specify their personal collections of plants they own and Bloomio will take care of notifying the user which plants are due for watering."
          />
          <ExperienceUnit
            logo={runWalkCrawl}
            title="Run Walk Crawl"
            link="https://github.com/Run-Walk-Crawl"
            timeperiod="2018"
            subtitle="A mobile-first, full stack pub crawl generator that takes in a starting location, desired number of stops, and preferred budget and makes a pub crawl for the user. Users can name crawls and save them to their profile."
          />
          <ExperienceUnit
            logo={seattleBreweryFinder}
            title="Seattle Brewery Finder"
            link="https://github.com/dahby/Seattle-Brewery-Finder"
            timeperiod="2018"
            subtitle="The goal of Seattle Brewery Finder is to allow a user to find a Brewery in Seattle that meets their needs.  This site tells you if you can bring your dogs or children with you on your next outing."
          />
        </div>
      </Section>
    )
  }
}

export default ProjectsSection
