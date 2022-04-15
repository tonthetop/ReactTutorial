import React from 'react';
class Hover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        }
    }
    onMouseEnter = () => {
        this.setState({ isHovered: true });
    }

    onMouseLeave = () => {
        this.setState({ isHovered: false });
    }
    render() {
        return (
            <div
                style={{
                    opacity: this.state.isHovered ? 0.5 : 1
                }}
                onMouseEnter={this.onMouseEnter}
                onMouseLeave={this.onMouseLeave}
            >
                {this.props.children}
            </div>
        )
    }
}
export default  Hover