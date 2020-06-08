import React from 'react';
import { Line, Pie, HorizontalBar } from 'react-chartjs-2';
import { connect } from 'react-redux';
import moment from 'moment';
import Spinner from '../spinner/spinner.component';

class CountryChart extends React.Component {
  render() {
    let currentCountryHistoryormalized = this.props.currentCountryStats.history
      ? this.props.currentCountryStats.history
          .map((item, index, arr) => ({
            x: moment(item.date).format('MMM Do'),
            ...item,
            activeCases: item.confirmed - item.recovered,
          }))
          .filter((item, index) => index % 2 === 0)
      : [{ x: 0, confirmed: 0, activeCases: 0 }];

    const getSortedArray = (array, key) =>
      array.sort((a, b) => b[key] - a[key]);

    let topMostAffectedCountries =
      this.props.allStats || !this.props.isLoadingAllStats
        ? getSortedArray(this.props.allStats.breakdowns, 'totalConfirmedCases')
            .filter((item, key) => key < 10)
            .map(
              ({
                location,
                totalConfirmedCases,
                totalRecoveredCases,
                totalDeaths,
              }) => ({
                x: location.countryOrRegion,
                confirmed: totalConfirmedCases,
                deaths: totalDeaths,
              })
            )
        : false;

    return (
      <div>
        <Line
          options={{
            title: {
              display: true,
              text: `Comparison Of Confirmed & Active Cases in ${this.props.currentCountry}`.toUpperCase(),
            },
          }}
          data={{
            labels: currentCountryHistoryormalized.map((item) => item.x),
            datasets: [
              {
                label: 'Confirmed Cases',
                data: currentCountryHistoryormalized.map(
                  (item) => item.confirmed
                ),
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
              {
                label: 'Active Cases',
                data: currentCountryHistoryormalized.map(
                  (item) => item.activeCases
                ),
                backgroundColor: ['rgba(39, 162, 171, 0.2)'],
                borderColor: ['rgba(39, 162, 171, 1)'],
                borderWidth: 1,
              },
            ],
          }}
        />

        <Pie
          options={{
            title: {
              display: true,
              text: `Visual Overview Of the situation in ${this.props.currentCountry}`.toUpperCase(),
            },
          }}
          data={{
            labels: ['Total Cases', 'Total Recovered', 'Total Deaths'],
            datasets: [
              {
                label: 'Confirmed Cases',
                data: this.props.currentCountryStats
                  ? [
                      this.props.currentCountryStats.totalConfirmedCases,
                      this.props.currentCountryStats.totalRecoveredCases,
                      this.props.currentCountryStats.totalDeaths,
                    ]
                  : [0, 0, 0],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                ],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 1,
              },
            ],
          }}
        />
        {topMostAffectedCountries ? (
          <HorizontalBar
            options={{
              title: {
                display: true,
                text: 'Top Most Effected Countries By Number of Cases'.toUpperCase(),
              },
            }}
            data={{
              labels: topMostAffectedCountries.map((item) => item.x),
              datasets: [
                {
                  label: 'Confirmed Cases',
                  data: topMostAffectedCountries.map((item) => item.confirmed),
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: ['rgba(255, 99, 132, 1)'],
                  borderWidth: 1,
                },
              ],
            }}
          />
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentCountryStats: state.stats.currentCountryStats,
  currentCountry: state.stats.currentCountry.label,
  isLoading: state.stats.isLoadingByCountry,
  allStats: state.stats.allStats,
  isLoadingAllStats: state.stats.isLoadingAllStats,
});

export default connect(mapStateToProps)(CountryChart);
