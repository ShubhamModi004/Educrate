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
        const Array = ['Importance of  saving water', 'Operation of devices of Computer', 'Importance Of traffic rules for safety', 'Benefits of electricity saving and importance of solar energy', 'Cleanliness and Disease prevention', 'Golden and glorious India and brotherhood', 'Conservation of earth resources to maintain balance', 'India integration', 'Freedom fighters of India', 'Importance of hand wash in prevention of disease', 'Anthem for school kids', 'Importance of ganga river', 'About Indian constitution', 'Importance of Indian farmer', 'Attendance in school', 'Meaning of National Anthem', 'Republic of India meaning', 'Importance of national flag', 'India space power', 'Culture of India, Festivals and their relevance', 'Importance of vaccination for immunity', 'Financial literacy', 'Prevention of cholera', 'Army pride', 'Wind energy', 'History of National Anthem', 'The basic principles of constitution']
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