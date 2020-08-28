import React from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component {

    handleDecrement = () => {

    }

    handleIncrement = () => {
        
    }

    render() {
        return (
            <div>
                <h2 className="text-center mt-3">Counter</h2>
                <div className="row justify-content-center align-items-center mt-3">
                    <button type="button" className="btn btn-secondary" onClick={this.handleDecrement}>-</button>
                    <span className="btn btn-light pl-4 pr-4">{this.props.count}</span>
                    <button type="button" className="btn btn-secondary" onClick={this.handleIncrement}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Counter);

// https://spiderum.com/bai-dang/Redux-hoat-dong-ra-sao-Thong-qua-vi-du-so-dem-ags