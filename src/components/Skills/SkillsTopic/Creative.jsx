import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FormattedMessage } from 'react-intl';


class Creative extends React.Component {
    state = {
        currentIndex: 1,
        itemsInSlide: 1,
        responsive: { 0: { items: 6 } },
        galleryItems: this.galleryItems(),
    }

    galleryItems() {
        const Array = ['home.Entrepreneur skills', 'home.Grassroot Innovation', 'home.Drawing environment posters for awareness classroom', 'home.We should not contribute to greenhouse gases', 'home.Recycle and reuse', 'home.Renewable energy']
        return (
            Array.map((item, i) => <div className="skills-categories" style={{ background: '#29AF82' }}><p className="item"><FormattedMessage id={item} /></p></div>)
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


export default Creative;