import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

import { GoGraph } from "react-icons/go";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import News from "./News";

{
  /* <img src={require("../assets/images/banner.jpeg")} />; */
}

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container container-cont">
        <div className="row">
          <div className="col-md-8">
            <div className="home-main">
              <div className="home-wrapper">
                <Link
                  className="home-wrapper-link"
                  path="/news"
                  element={<News />}
                >
                  {" "}
                  <div className="home-wrapper-image">
                    <img src={require("../assets/images/banner.jpeg")} />
                  </div>
                  <div className="home-wrapper-title">
                    <div className="home-wrapper-desc">
                      <div className="home-wrapper-desc-tle">news</div>
                      <div className="home-wrapper-desc-date">
                        wed 12.04, 2024 | Club news
                      </div>
                    </div>
                    <h6 className="home-wrapper-title-head">
                      <span>Champions :</span> Promotion to Division || league
                    </h6>

                    <div className="home-wrapper-desc-info">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy as their default model text, and a search
                      for 'lorem ipsum' will uncover many web sites still in
                      their infancy...
                    </div>
                  </div>
                </Link>
              </div>
              <div className="container home-container-wrapper">
                <div className="row">
                  <div className="col-md-6">
                    <div className="home-wrapper-items">
                      <div className="home-wrapper-items-thumb">
                        <img
                          className="home-wrapper-items-thumb-img"
                          src={require("../assets/images/banner.jpeg")}
                        ></img>
                      </div>
                      <div className="home-wrapper-items-info">
                        <h6 className="home-wrapper-items-info-dte">
                          wed 04.12.2024 | news
                        </h6>
                        <h2 className="home-wrapper-items-info-head">
                          Super weekend of derby games in action
                        </h2>
                        <Link className="home-wrapper-items-info-btn">
                          read more{" "}
                          <FiArrowUpRight className="fa-home-link-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="home-wrapper-items">
                      <div className="home-wrapper-items-thumb">
                        <img
                          className="home-wrapper-items-thumb-img"
                          src={require("../assets/images/banner.jpeg")}
                        ></img>
                      </div>
                      <div className="home-wrapper-items-info">
                        <h6 className="home-wrapper-items-info-dte">
                          wed 04.12.2024 | news
                        </h6>
                        <h2 className="home-wrapper-items-info-head">
                          Super weekend of derby games in action
                        </h2>
                        <Link className="home-wrapper-items-info-btn">
                          read more{" "}
                          <FiArrowUpRight className="fa-home-link-icon" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* table content  */}
          <div className="col-md-4">
            <div className="right-aside">
              <div className="league-table">
                <div className="table-header">
                  <div className="table-head">
                    <h3>Regional League</h3>
                  </div>
                </div>
                <div className="table-data">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Club</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>TeamOne</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>
                        <td>TeamTwo</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">3</th>
                        <td>TeamThree</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">4</th>
                        <td>Four</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">5</th>
                        <td>Five</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="table-footer">
                    <div className="table-more table-load-more">
                      <Link className="table-loadmore table-footer-link">
                        <GoGraph className="table-footer-icons" /> Load full
                        table
                      </Link>
                    </div>
                    <div className="table-cl"></div>
                    <div className="table-fixtures table-load-more">
                      <Link className="table-moregames table-footer-link">
                        Upcoming Fixtures
                        <FaArrowRightLong className="table-footer-icons fx" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* COUNTY LEAGUE  */}
              <div className="league-table">
                <div className="table-header">
                  <div className="table-head">
                    <h3>county League</h3>
                  </div>
                </div>
                <div className="table-data">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Club</th>
                        <th scope="col">W</th>
                        <th scope="col">D</th>
                        <th scope="col">L</th>
                        <th scope="col">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>TeamOne</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">2</th>
                        <td>TeamTwo</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">3</th>
                        <td>TeamThree</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">4</th>
                        <td>Four</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>

                      <tr>
                        <th scope="row">5</th>
                        <td>Five</td>
                        <td>10</td>
                        <td>3</td>
                        <td>5</td>
                        <td>45</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="table-footer">
                    <div className="table-more table-load-more">
                      <Link className="table-loadmore table-footer-link">
                        <GoGraph className="table-footer-icons" /> Load full
                        table
                      </Link>
                    </div>
                    <div className="table-cl"></div>
                    <div className="table-fixtures table-load-more">
                      <Link className="table-moregames table-footer-link">
                        Upcoming Fixtures
                        <FaArrowRightLong className="table-footer-icons fx" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
