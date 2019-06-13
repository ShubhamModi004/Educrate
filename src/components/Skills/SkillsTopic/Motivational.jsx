import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FormattedMessage } from 'react-intl';


class Motivational extends React.Component {
    state = {
        currentIndex: 1,
        itemsInSlide: 1,
        responsive: { 0: { items: 6 } },
        galleryItems: this.galleryItems(),
    }

    galleryItems() {
        const Array = ['home.Focus on goals', 'home.Value of education in persons life', 'home.Everyone has talent to bring change', 'home.Pursuing sports as career', 'home.Study for learning', 'home.To study and work for nation', 'home.Not to fear from studies', 'home.Dream big', 'home.Importance of  yoga', 'home.Obesity is a major health problem', 'home.Interest in subject can lead you to success in your life', 'home.Complete your task in timely manner(Time management)', 'home.Listen to your heart and be courageous with your plans', 'home.Be careful what you wish for', 'home.To follow your dreams in student life', 'home.Importance of nature and wildlife for earth', 'home.Overcoming your failures to become great', 'home.Not to waste water', 'home.Children from small towns can also be great', 'home.Practice makes one perfect in sports', 'home.To be persistent', 'home.Follow knowledge not results']
        return (
            Array.map((item, i) => <div className="skills-categories" style={{ background: '#FF7272' }}><p className="item"><FormattedMessage id={item} /></p></div>)
        )
    }

    slidePrevPage = () => {
        const currentIndex = this.state.currentIndex - this.state.itemsInSlide
        this.setState({ currentIndex })
    }

    slideNextPage = () => {
        const { itemsInSlide, galleryItems: { length } } = this.state
        let currentIndex = this.state.currentIndex + itemsInSlide
        if (currentIndex > length) currentIndex = length

        this.setState({ currentIndex })
    }

    handleOnSlideChange = (event) => {
        const { itemsInSlide, item } = event
        this.setState({ itemsInSlide, currentIndex: item })
    }

    render() {
        const { currentIndex, galleryItems, responsive } = this.state
        return (
            <div className="alice-carosel-container">
                <AliceCarousel
                    items={galleryItems}
                    slideToIndex={currentIndex}
                    responsive={responsive}
                    onInitialized={this.handleOnSlideChange}
                    onSlideChanged={this.handleOnSlideChange}
                    onResized={this.handleOnSlideChange}
                />
                <div className="left-arrow">
                    <img src={require('./Leftarrow.png')} />
                </div>

                <div className="right-arrow">
                    <img src={require('./Rightarrow.png')} />
                </div>
                <div className="left-blurr"></div>
                <div className="right-blurr"></div>
            </div>
        )
    }
}


export default Motivational;