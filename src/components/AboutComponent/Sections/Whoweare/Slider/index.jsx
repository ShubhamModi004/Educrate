import React, { useState, useCallback } from 'react'
import { useTransition, animated } from 'react-spring'
import './styles.css'

const pages = [
    ({ style }) => <animated.div style={{ ...style, background: 'lightpink' }}>A</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightblue' }}>B</animated.div>,
    ({ style }) => <animated.div style={{ ...style, background: 'lightgreen' }}>C</animated.div>,
]

export default function App() {
    const [index, set] = useState(0)
    const onClick = useCallback(() => set(state => (state + 1) % 3), [])
    const slide1 = useCallback(() => set(state => (0) ))
    const slide2 = useCallback(() => set(state => (1) ))
    const slide3 = useCallback(() => set(state => (2) ))
    const transitions = useTransition(index, p => p, {
        from: { opacity: 1, transform: 'translate3d(100%,0,0)' },
        enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
    })

    

    
    return (
        <div>
            <div className="simple-trans-main" onClick={onClick}>
                {transitions.map(({ item, props, key }) => {
                    const Page = pages[item]
                    return <Page key={key} style={props} />
                })}
                
            </div>
            {transitions.map(({ item, props, key }) => {
                return(
                    <div className="dots">
                        {(item === 0) ? 
                            <div className="activeDot" onClick={slide1}>
                            </div>
                            :
                            <div className="dot" onClick={slide1}>
                            </div>
                        }
                        {(item === 1) ?
                            <div className="activeDot" onClick={slide2}>
                            </div>
                            :
                            <div className="dot" onClick={slide2}>
                            </div>
                        }
                        {(item === 2) ?
                            <div className="activeDot" onClick={slide3}>
                            </div>
                            :
                            <div className="dot" onClick={slide3}>
                            </div>
                        }
                        
                    </div>
                )
            })}
        </div>
    )
}




