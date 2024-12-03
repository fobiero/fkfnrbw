import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";

import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container container-cont">
        <div className="row">
          <div className="col-md-8">
            <div className="main">main</div>
          </div>
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
