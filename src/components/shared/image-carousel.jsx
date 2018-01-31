import React from 'react'
import styled from 'styled-components'
import { Container, Image } from 'rebass'
import Icon from 'react-icons-kit'
import { ic_navigate_before } from 'react-icons-kit/md/ic_navigate_before'
import { ic_navigate_next } from 'react-icons-kit/md/ic_navigate_next'

const StyledContainer = styled(Container)`
    text-align: center;
    margin: 10px 0px;
    padding: 0px 10px;
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
`

const StyledImage = styled(Image)`
    cursor: pointer;
    display: inline;
    max-width: 50px;
    border: 1px solid ${props => (props.active ? `#222` : `#d2d2d2`)};
    border-radius: 5px;
    margin: 0px 5px 0px 5px;
`

class ImageCarousel extends React.Component {
    state = {
        images: []
    }
    componentDidMount = () => {
        this.setState({
            images: this.props.images
        })
    }
    handleArrowClick = e => {
        if (e.target.parentNode.id === 'image-left') {
            const lastImg = this.state.images.pop()
            this.state.images.unshift(lastImg)
        } else {
            const firstImg = this.state.images.shift()
            this.state.images.push(firstImg)
        }
        this.setState({
            images: this.state.images
        })
    }
    handleImageClick = e => {
        this.props.handleSelectPhoto(e.target.src)
    }
    render() {
        const { images } = this.state
        return (
            <StyledContainer>
                <StyledIcon
                    id="image-left"
                    icon={ic_navigate_before}
                    size={48}
                    onClick={this.handleArrowClick}
                />
                {images &&
                    images.slice(0, 3).map((image, idx) => {
                        return (
                            <StyledImage
                                id={idx}
                                key={idx}
                                src={image.image}
                                onClick={this.handleImageClick}
                            />
                        )
                    })}
                <StyledIcon
                    id="image-right"
                    icon={ic_navigate_next}
                    size={48}
                    onClick={this.handleArrowClick}
                />
            </StyledContainer>
        )
    }
}

export default ImageCarousel
