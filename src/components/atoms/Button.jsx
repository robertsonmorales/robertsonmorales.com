import React from "react"

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: props.id,
            className: props.className,
            text: props.text
        };
    }
    
    render() { 
        return (
            <button className={this.state.className}
                onClick="navSelected('services')"
                id={this.state.id}>{this.state.text}</button>
        )
    }
}

export default Button;