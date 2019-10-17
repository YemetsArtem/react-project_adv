import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchLazy, selectEvent, eventListSelector, moduleName } from '../../ducks/events'
import { Table, Column, InfiniteLoader } from 'react-virtualized'
import Loader from '../Common/Loader'
import EventListItem from './EventListItem'
import 'react-virtualized/styles.css'


export class EventList extends Component {
    componentDidMount() {
        this.props.fetchLazy();
    }

    render() {
        const { loading, loaded, events } = this.props;
        // if (loading) return <Loader />

        return (
            <InfiniteLoader
                isRowLoaded={this.isRowLoaded}
                rowCount={loaded ? events.length : events.length + 1}
                loadMoreRows={this.loadMoreRows}
            >
                {({ onRowsRendered, registerChild }) =>
                    <Table
                        ref={registerChild}
                        rowCount={events.length}
                        rowGetter={this.rowGetter}
                        rowHeight={40}
                        headerHeight={50}
                        overscanRowCount={5}
                        width={600}
                        height={600}
                        onRowClick={this.handleRowClick}
                        onRowsRendered={onRowsRendered}
                        rowRenderer={this.getRowRenderer}
                    >
                        <Column
                            dataKey="title"
                            label="title"
                            width={300}
                        />
                        <Column
                            dataKey="where"
                            label="where"
                            width={250}
                        />
                        <Column
                            dataKey="month"
                            label="when"
                            width={150}
                        />
                    </Table>
                }
            </InfiniteLoader>
        )
    }

    getRowRenderer = (rowCtx) => <EventListItem {...rowCtx} />

    isRowLoaded = ({ index }) => index < this.props.events.length;

    loadMoreRows = () => { this.props.fetchLazy() };

    rowGetter = ({ index }) => this.props.events[index];
    
    handleRowClick = ({rowData}) => {
        const { selectEvent } = this.props;
        selectEvent && selectEvent(rowData.uid);
    }
}


export default connect(state => ({
    events: eventListSelector(state),
    loading: state[moduleName].loading
}), { fetchLazy, selectEvent })(EventList)
