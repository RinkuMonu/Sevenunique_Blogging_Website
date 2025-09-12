import React from 'react'
import NowPlaying from '../../../components/NowPlaying'
import HoroscopeSection from '../../../components/HoroscopeSection'
import AdvertisementSection from '../../../components/AdvertisementSection2'
import PlanetsTransitsSection from '../../../components/PlanetsTransitsSection'
import AstroTipsSection from '../../../components/AstroTipsSection'
import VisualStoriesSwiper from '../../../components/VisualStoriesSwiper'
import MoreStories from '../../../components/MoreStories'
import SponsoredBrandsSection from '../../../components/Sponsored'
import HotTopics from '../../../components/HotTopics'

export default function page() {
    return (
        <>
            <div className='px-24'>

                <NowPlaying />
                <HoroscopeSection />
                <AdvertisementSection />
                <PlanetsTransitsSection />
                <AstroTipsSection />
                <VisualStoriesSwiper />
                <MoreStories />
                <SponsoredBrandsSection />
                <HotTopics />

            </div>

        </>
    )
}
