import React, { Component } from 'react'
import './services.css';


class ServicesComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <table>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        <tr>
                            <td>Centro comercial Moctezuma</td>
                            <td>Francisco Chang</td>
                            <td>Mexico</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default ServicesComponent;