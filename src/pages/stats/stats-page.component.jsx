import React from 'react';
import StatsOverview from '../../components/stats-overview/stats-overview.component';
import { connect } from 'react-redux';
import './stats.styles.scss';
import GlobalStatsTable from '../../components/global-stats-table/global-stats-table.component';
import { Grid } from '@material-ui/core';
import CountryChart from '../../components/chart/chart.component';
import {
  getAllStats,
  resetAlertNoDataAvailable,
} from '../../redux/stats/stats.actions';
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

class StatsPage extends React.Component {
  componentWillMount() {
    this.props.dispatch(getAllStats());
  }

  render() {
    return (
      <div className='stats'>
        <div className='section'>
          <div className='section-content'>
            {this.props.errorByCountry ? (
              <Snackbar
                open={this.props.errorByCountry ? true : false}
                autoHideDuration={6000}
                onClose={() => this.props.dispatch(resetAlertNoDataAvailable())}
              >
                <Alert severity='warning'>
                  Data for the selected country not available{' '}
                </Alert>
              </Snackbar>
            ) : null}
            <StatsOverview />
          </div>
        </div>
        <div className='section'>
          <div className='section-content'>
            <CountryChart />
          </div>
        </div>
        <div className='section'>
          <Grid xs={12}>
            <GlobalStatsTable />
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errorByCountry: state.stats.errorByCountry,
});

export default connect(mapStateToProps)(StatsPage);
