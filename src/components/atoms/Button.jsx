import React from "react"

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            id: props.id,
            className: props.className,
            text: props.text,
            action: props.navigateTo
        };
    }
    
    render() { 
        return (
            <button className={this.state.className}
                onClick={ this.action }
                id={ this.state.id }>{ this.state.text }</button>
        )
    }
}

export default Button;