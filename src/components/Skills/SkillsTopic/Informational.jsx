import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import { FormattedMessage } from 'react-intl';


import './SkillsTopic.css';

class Informational extends React.Component {
    state = {
        currentIndex: 1,
        itemsInSlide: 1,
        responsive: { 0: { items: 6 } },
        galleryItems: this.galleryItems(),
    }

    galleryItems() {
        const Array = ['home.Importance of  saving water', 'home.Operation of devices of Computer', 'home.Importance Of traffic rules for safety', 'home.Benefits of electricity saving and importance of solar energy', 'home.Cleanliness and Disease prevention', 'home.Golden and glorious India and brotherhood', 'home.Conservation of earth resources to maintain balance', 'home.India integration', 'home.Freedom fighters of India', 'home.Importance of hand wash in prevention of disease', 'home.Anthem for school kids', 'home.Importance of ganga river', 'home.About Indian constitution', 'home.Importance of Indian farmer', 'home.Attendance in school', 'home.Meaning of National Anthem', 'home.Republic of India meaning', 'home.Importance of national flag', 'home.India space power', 'home.Culture of India, Festivals and their relevance', 'home.Importance of vaccination for immunity', 'home.Financial literacy', 'home.Prevention of cholera', 'home.Army pride', 'home.Wind energy', 'home.History of National Anthem', 'home.The basic principles of constitution']
        return (
            Array.map((item, i) => <div className="skills-categories" style={{ background: "#4C93EF" }}><p className="item"><FormattedMessage id={item} /></p></div>)
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


export default Informational;