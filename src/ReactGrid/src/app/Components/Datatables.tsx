import * as React from 'react';
import {render} from 'react-dom';


interface IStateDataTabe {
    data: Array<any>
}

export default class DataTables extends React.Component<{}, IStateDataTabe> {
    constructor(props: any) {
        super(props);
        this.state = { data: [] };
    }


    componentDidMount() {
        $.ajax({
            url: '/test',
            success: result => {
                console.log(result);
            },
            error: _ => {
                console.log("error");

            }
        });

        let self = this;
        $('#example').dataTable({
            "sPaginationType": "full_numbers",
            'ajax': "/test",
            'aoColumns': 
            [
                { 'mData': 'name' },
                { 'mData': 'position' },
                { 'mData': 'office' },
                { 'mData': 'age' },
                { 'mData': 'start_date' },
                { 'mData': 'salary' }
            ],
            "bAutoWidth": true,
            "bDestroy": true
            // "fnDrawCallback": function () {
            //     self.forceUpdate();
            // },
        });
    }

    componentDidUpdate() {
        $('#example').dataTable({
            "sPaginationType": "full_numbers",
            "bAutoWidth": true,
            "bDestroy": true,
            
        });
    }

    public render() {



        return (
            <div className="ui container">
                <h4>Hello</h4>
                <table id="example" className="ui celled table" cellSpacing="0" width="100%">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Office</th>
                            <th>Age</th>
                            <th>Start date</th>
                            <th>Salary</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        );
    }
}