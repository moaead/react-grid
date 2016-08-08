/// <reference path="../../../typings/globals/jquery.datatables/index.d.ts" />
import * as React from "react";
import * as $ from "jquery";

interface IGridProps {
    selectable: "single" | "multiple";
    data?: any[];
}
export class Grid extends React.Component<IGridProps, {}> {
    tableDom;

    constructor(props: IGridProps) {
        super(props);
    }

    componentDidMount() {
        var table = ($(this.tableDom).dataTable)({
            select: {
                style: 'single'
            },
            aaData: this.props.data
        });
        /*
         if (this.props.selectable === "single") {
         $('#example').on('click', 'tr', function () {
         if ($(this).hasClass("selected")) {
         $(this).removeClass("selected");
         } else {
         $('tr.selected').removeClass('selected');
         $(this).addClass("selected");
         }
         });

         }
         else if (this.props.selectable === "multiple") {
         $('#example').on('click', 'tr', function () {
         if ($(this).hasClass("selected")) {
         $(this).removeClass("selected");
         } else {
         $(this).addClass("selected");
         }
         });
         }
         */

    }


    static componentWillUnmount(): void {
        $('#example').off('click', 'tr');
    }

    componentDidUpdate() {
        //TODO refresh the table with the new props
        //$(this.refs["dropdown"]).dropdown('refresh');
    }

    render() {
        return (
            <div style={{margin: "50px"}}>
                <table id="example" className="ui celled table" width="100%"
                       ref={node => this.tableDom = node}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Extn.</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    </thead>
                    <tfoot>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Office</th>
                        <th>Extn.</th>
                        <th>Start date</th>
                        <th>Salary</th>
                    </tr>
                    </tfoot>
                </table>

            </div>
        );
    }
}