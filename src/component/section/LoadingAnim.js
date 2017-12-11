import React from 'react'

const LoadingAnim = props => {

    const {
        color_left,
        color_middle,
        color_right
    } = props

    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48px" height="60px" viewBox="0 0 24 30">
            <rect x="0" y="13" width="4" height="5" fill={color_left ? color_left : '#fff'}>
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
            </rect>
            <rect x="10" y="13" width="4" height="5" fill={color_middle ? color_middle : '#333'}>
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.15s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
            </rect>
            <rect x="20" y="13" width="4" height="5" fill={color_right ? color_right : '#fff'}>
                <animate
                    attributeName="height"
                    attributeType="XML"
                    values="5;21;5"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                <animate
                    attributeName="y"
                    attributeType="XML"
                    values="13; 5; 13"
                    begin="0.3s"
                    dur="0.6s"
                    repeatCount="indefinite"/>
            </rect>
        </svg>
    )
}

export default LoadingAnim