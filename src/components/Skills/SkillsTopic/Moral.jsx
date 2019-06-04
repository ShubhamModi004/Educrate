import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FormattedMessage } from 'react-intl';


class Moral extends React.Component {
    state = {
        currentIndex: 1,
        itemsInSlide: 1,
        responsive: { 0: { items: 20 } },
        galleryItems: this.galleryItems(),
    }

    galleryItems() {
        const Array = ['Slow and steady wins the race', 'Humaniatarism', 'School learning will always help in future', 'Morals for kids to implement in daily life', 'Teachers importance', 'Practice makes the man perfect', 'Perseverance and Keep trying attitude', 'Respecting your parents', 'Honesty is the best policy', 'True Bravery']
        return (
            Array.map((item, i) => <div className="skills-categories" style={{ background: '#57C537' }}><p className="item"><FormattedMessage id={item} /></p></div>)
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


export default Moral;