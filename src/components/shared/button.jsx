import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const StyledButton = styled.button`
    background: ${props => props.background};
    color: ${props => props.color};
    float: ${props => props.align};
    width: 150px;
    height: 50px;
    padding: 10px 0px;
    margin: 5px 5px;
    font-size: 18px;
    font: inherit;
    cursor: pointer;
    outline: none;
    border: 1px solid ${props => props.background};
    ${props => css`
        ${props.theme.screen.small} {
            width: 200px;
        }
    `};
`

class Button extends React.PureComponent {
    render() {
        return (
            <StyledButton
                type={this.props.type || 'submit'}
                onClick={this.props.onClick}
                align={this.props.align}
                width={this.props.width}
                background={this.props.background}
                color={this.props.color}
                disabled={this.props.disabled}>
                {this.props.children.toUpperCase()}
            </StyledButton>
        )
    }
}

Button.defaultProps = {
    type: 'submit',
    width: '100%'
}

Button.propTypes = {
    type: PropTypes.string,
    width: PropTypes.string
}

export default Button
