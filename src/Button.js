import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <div>
                <button type="submit"> {this.props.message}</button>
            </div>
        );
    }
}

export default Button;
