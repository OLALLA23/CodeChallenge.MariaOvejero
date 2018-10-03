import * as React from "react";

export class Spinner extends React.Component{
     
    render = () => {
        const { httpLoading } = this.props;

        if (httpLoading) {
            return (
                <div className="spinner">
                    <img src="https://loading.io/spinners/whirl/index.rotate-whirl-ajax-vortex-spinner.svg" alt="spinner" />
                </div>)
        }
        else {
            return null
        }
    }
}