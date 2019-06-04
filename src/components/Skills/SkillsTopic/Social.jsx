import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FormattedMessage } from 'react-intl';


class Social extends React.Component {
    state = {
        currentIndex: 1,
        itemsInSlide: 1,
        responsive: { 0: { items: 6 } },
        galleryItems: this.galleryItems(),
    }

    galleryItems() {
        const Array = ['Honesty', 'Social awareness', 'Everyone should make their opinion and respect others', 'Social etiquette and good behaviour', 'To not be jealous and greedy of neighbour', 'Overcome inferiority complex', 'Anti-bullying', 'Problem sharing with parents and teachers', 'Humbleness', 'Girls education impact whole society', 'Vital human values', 'bullying and teasing should not be done, it can disturb someone’s well being', 'Both male and female are equal', 'Basic Human Rights', 'Empathy with animals', 'Donations can make people happy']
        return (
            Array.map((item, i) => <div className="skills-categories" style={{ background: '#7937C5' }}><p className="item"><FormattedMessage id={item} /></p></div>)
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


export default Social;