import React from 'react'

function withHover(WrapComponent) {
    return class extends React.Component{
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
            const {src} = this.props;
            return (
                <div
                    style={{
                        opacity: this.state.isHovered ? 0.5 : 1
                    }}
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                >
                   <WrapComponent src={src}></WrapComponent>
                </div>
            )
        }
    }
}
export default withHover