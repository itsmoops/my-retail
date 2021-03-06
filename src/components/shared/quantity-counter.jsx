import React from 'react'
import styled from 'styled-components'
import Icon from 'react-icons-kit'
import { plus } from 'react-icons-kit/icomoon/plus'
import { minus } from 'react-icons-kit/icomoon/minus'

const StyledDiv = styled.div`
    border: 2px solid rgba(34, 36, 38, 0.1);
    border-radius: 3px;
    padding: 15px;
    width: 220px;
`

const StyledIconContainer = styled.div`
    float: right;
    margin-top: -10px;
    color: grey;
`

const StyledIcon = styled(Icon)`
    cursor: pointer;
    background: #efefef;
    border-radius: 50%;
    padding: 10px;
`

class QuantityCounter extends React.Component {
    state = {
        quantity: 1
    }
    handleIncrement = () => {
        const quantity = this.state.quantity
        this.setState({
            quantity: quantity + 1
        })
    }
    handleDecrement = () => {
        const quantity = this.state.quantity
        this.state.quantity !== 1 &&
            this.setState({
                quantity: quantity - 1
            })
    }
    render() {
        return (
            <StyledDiv>
                quantity:
                <StyledIconContainer>
                    <StyledIcon id="quantity-minus" icon={minus} onClick={this.handleDecrement} />
                    &nbsp; {this.state.quantity} &nbsp;
                    <StyledIcon id="quantity-plus" icon={plus} onClick={this.handleIncrement} />
                </StyledIconContainer>
            </StyledDiv>
        )
    }
}

export default QuantityCounter
