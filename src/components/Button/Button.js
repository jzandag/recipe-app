import React, {Component} from 'react'

class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <button type="button" class="btn btn-primary">{this.props.label}</button>
            </React.Fragment>
        )
    }
}

export default Button
