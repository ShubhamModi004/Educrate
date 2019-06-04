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
        const Array = ['Focus on goals', 'Value of education in persons life', 'Everyone has talent to bring change', 'Pursuing sports as career', 'Study for learning', 'To study and work for nation', 'Not to fear from studies', 'Dream big', 'Importance of  yoga', 'Obesity is a major health problem', 'Interest in subject can lead you to success in your life', 'Complete your task in timely manner(Time management)', 'Listen to your heart and be courageous with your plans', 'Be careful what you wish for', 'To follow your dreams in student life', 'Importance of nature and wildlife for earth', 'Overcoming your failures to become great', 'Not to waste water', 'Children from small towns can also be great', 'Practice makes one perfect in sports', 'To be persistent', 'Follow knowledge not results']
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