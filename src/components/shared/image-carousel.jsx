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
        images: [],
        minIndex: 0,
        maxIndex: 3
    }
    componentWillReceiveProps = nextProps => {
        this.setState({
            images: nextProps.images.slice(this.state.minIndex, this.state.maxIndex)
        })
    }
    handleArrowClick = e => {
        if (e.target.parentNode.id === 'image-left') {
            this.setState({
                minIndex: this.state.minIndex - 1,
                maxIndex: this.state.maxIndex - 1
            })
        } else {
            this.setState({
                minIndex: this.state.minIndex + 1,
                maxIndex: this.state.maxIndex + 1
            })
        }
    }
    handleImageClick = e => {
        this.props.handleSelectPhoto(e.target.src)
    }
    render() {
        const { images } = this.props
        return (
            <StyledContainer>
                <StyledIcon
                    id="image-left"
                    icon={ic_navigate_before}
                    size={48}
                    onClick={this.handleArrowClick}
                />
                {images &&
                    images.slice(this.state.minIndex, this.state.maxIndex).map((image, idx) => {
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
