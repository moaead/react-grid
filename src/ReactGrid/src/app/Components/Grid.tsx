import * as React from "react";
import * as $ from "jquery";

export default class Grid extends React.Component<{}, {}> {

    componentDidMount() {
        $(this.refs["dropdown"]).dropdown();
    }

    componentDidUpdate() {
        $(this.refs["dropdown"]).dropdown('refresh');
    }

    render() {
        return (
            <p><select className="ui dropdown" ref="dropdown">
                <option value="">Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
            </select>
            </p>
        );
    }
}