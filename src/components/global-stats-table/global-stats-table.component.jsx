import React, { Component } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import './global-stats-table.styles.scss';
// import { STATS } from '../../redux/stats/stats.data';

import { connect } from 'react-redux';
import Spinner from '../spinner/spinner.component';

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const getSortedArray = (array, key) => array.sort((a, b) => b[key] - a[key]);

class GlobalStatsTable extends Component {
  render() {
    const { allStats } = this.props;
    console.log(allStats);
    return (
      <div>
        <Table className='table'>
          <Thead className='table-header'>
            <Tr>
              <Th className='table-header-item'>Country</Th>
              <Th className='table-header-item'>Confirmed</Th>
              <Th className='table-header-item'>Recovered</Th>
              <Th className='table-header-item'>Deaths</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allStats ? (
              getSortedArray(allStats.breakdowns, 'totalConfirmedCases')
                .filter((item, key) => key < 15)
                .map(
                  ({
                    location,
                    totalConfirmedCases,
                    totalRecoveredCases,
                    totalDeaths,
                    newlyConfirmedCases,
                    newlyRecoveredCases,
                    newDeaths,
                  }) => (
                    <Tr className='table-content'>
                      <Td
                        className='table-content-item'
                        style={{ textAlign: 'justify' }}
                      >{`${
                        location.isoCode ? countryToFlag(location.isoCode) : ''
                      } ${location.countryOrRegion}`}</Td>
                      <Td className='table-content-item'>
                        {totalConfirmedCases.toLocaleString()}{' '}
                        <span className='new'>
                          {`(+${newlyConfirmedCases.toLocaleString()})`}
                        </span>
                      </Td>
                      <Td className='table-content-item'>
                        {totalRecoveredCases.toLocaleString()}{' '}
                        <span className='new'>{`(+${newlyRecoveredCases.toLocaleString()})`}</span>
                      </Td>
                      <Td className='table-content-item'>
                        {totalDeaths.toLocaleString()}{' '}
                        <span className='new'>{`(+${newDeaths.toLocaleString()})`}</span>
                      </Td>
                    </Tr>
                  )
                )
            ) : (
              <Spinner />
            )}
          </Tbody>
        </Table>{' '}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  allStats: state.stats.allStats,
  isLoadingAllStats: state.stats.isLoadingAllStats,
});

export default connect(mapStateToProps)(GlobalStatsTable);
