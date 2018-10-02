import * as React from "react";

export class Spinner extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.httpLoading) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/whirl/index.rotate-whirl-ajax-vortex-spinner.svg" />
                </div>)
        }
        else {
            return null
        }
    }
}