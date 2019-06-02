import React, {Component} from 'react'
import { InView } from 'react-intersection-observer'
import { Spring, animated, config } from 'react-spring/renderprops'

class School extends Component {
    state = {
        numbers: false
    }

    onInViewChange = inview => {
        if (!this.state.numbers && inview) this.setState({ numbers: true })
    }

    render() {
        
        return (
        <>
            <InView tag="div" onChange={this.onInViewChange}>
                <Spring
                    from={{ number: 0 }}
                    to={{ number: this.state.numbers ? 300 : 0 }}
                    config={{ duration: 2000}}
                    >
                    {props => <div>{Math.round(props.number)}</div>}
                </Spring>

            </InView>
        </>
    )
    }
}

export default School



