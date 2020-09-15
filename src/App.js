import React from 'react';
import Constants from './utils/constant';
import Global from './utils/global';
import Button from "./Components/Button"
import Card from "./Components/Card"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      year: "",
      launch: "",
      land: ""
    };
  }
  componentDidMount() {
    this.getData()
  }
  getData = () => {
    // get api for get data 
    let { year, land, launch } = this.state;
    let link = (launch ? `&launch_success=${launch}` : '') + (land ? `&land_success=${land}` : '') + (year ? `&launch_year=${year}` : '')
    Global.getRequest(Constants.BASE_URL + link)
      .then((res) => {
        if (res.status == "200") {
          var temp = res.data
          this.setState({ data: temp })
        } else {
          this.setState({ data: [] })
        }
      })
  }
  getYear = (year) => {
    // search by year
    this.setState({ year }, () => {
      this.getData()
    })
  }
  getLand = (land) => {
    // search by land
    this.setState({ land }, () => {
      this.getData()
    })
  }
  getLaunch = (launch) => {
    // search by launch
    this.setState({ launch }, () => {
      this.getData()
    })

  }
  clear = () => {
    // clear search filter get all data 
    this.setState({ launch: "", land: "", year: "" }, () => {
      this.getData()
    })

  }
  render() {
    let { data } = this.state;
    return (
      <div >
        <nav className="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0 shadow p-3">
          <a className="navbar-brand col-md-3 col-lg-2  ext-center" href="#">
            <h4>SpaceX Launch Programs</h4>
          </a>
        </nav>
        <br />
        <div className="container" role="main">

          <div className="row">
            <div className=" col-md-3 col-sm-12">

              <div className="row">
                <div className="col-sm-6" >
                  <Button function={() => this.getYear("2006")} title="2006" />
                  <Button function={() => this.getYear("2008")} title="2008" />
                  <Button function={() => this.getYear("2010")} title="2010" />
                  <Button function={() => this.getYear("2012")} title="2012" />
                  <Button function={() => this.getYear("2014")} title="2014" />
                  <Button function={() => this.getYear("2016")} title="2016" />
                  <Button function={() => this.getYear("2018")} title="2018" />
                  <Button function={() => this.getYear("2020")} title="2020" />
                </div>
                <div className="col-sm-6">
                  <Button function={() => this.getYear("2007")} title="2007" />
                  <Button function={() => this.getYear("2009")} title="2009" />
                  <Button function={() => this.getYear("2011")} title="2011" />
                  <Button function={() => this.getYear("2013")} title="2013" />
                  <Button function={() => this.getYear("2015")} title="2015" />
                  <Button function={() => this.getYear("2017")} title="2017" />
                  <Button function={() => this.getYear("2019")} title="2019" />
                </div>

              </div>
              <div className="d-flex justify-content-center">
                <h4 className="panel-title">
                  <p className="accordion-toggle btn-block text-secondary " data-toggle="collapse" data-parent="#accordion" href="#collapseOne"> Successfull launch</p>
                </h4>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Button function={() => this.getLaunch("true")} title="True" />
                </div>
                <div className="col-sm-6">
                  <Button function={() => this.getLaunch("false")} title="False" />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <h4 className="panel-title">
                  <a className="accordion-toggle btn-block text-secondary " data-toggle="collapse" data-parent="#accordion" href="#collapseOne">  Successfull landing </a>
                </h4>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Button function={() => this.getLand("true")} title="True" />
                </div>
                <div className="col-sm-6">
                  <Button function={() => this.getLand("false")} title="False" />
                </div>
              </div>
              <div className="col-sm-12">
                <Button function={this.clear} title="Clear Filter" />
              </div>
            </div>
            <div className="col-sm-9">

              <div className="container">
                <div className="row">
                  {data.length ?
                    data.map((val, key) => {

                      return (
                        <>
                          <Card val={val} />
                        </>
                      )
                    })
                    :
                    <div className="container">
                      <div className="row justify-content-center">
                        <h1>No Result Found</h1>
                      </div>
                    </div>
                  }


                </div>

              </div>
            </div>

          </div>
        </div>
        <footer className="page-footer font-small blue pt-4">

          <div className="footer-copyright text-center py-3">©Farrukh Ehsan
          </div>

        </footer>
      </div >
    );
  }
}
export default App;