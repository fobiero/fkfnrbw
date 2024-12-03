import React from "react";

import Navbar from "../components/Navbar";

import RegionalsZoneA from "./table/RegionalLeague/RegionalsZoneA";
import RegionalsZoneB from "./table/RegionalLeague/RegionalsZoneB";
import RegionalsZoneC from "./table/RegionalLeague/RegionalsZoneC";

import CountyLeagueZoneA from "./table/CountyLeague/CountyLeagueZoneA";
import CountyLeagueZoneB from "./table/CountyLeague/CountyLeagueZoneB";
import CountyLeagueZoneC from "./table/CountyLeague/CountyLeagueZoneC";

const Standings = () => {
  return (
    <>
      <Navbar />
      <div className="container container-cont standing-contents">
        <div class="d-flex align-items-start">
          <div
            class="nav flex-column nav-pills me-3 aside-navList-item"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <span className="tab-league-name">Regional League</span>
            <button
              class="nav-link active nav-link-menu-items"
              id="v-pills-home-zoneA-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home-zoneA"
              type="button"
              role="tab"
              aria-controls="v-pills-home-zoneA"
              aria-selected="true"
            >
              Zone A
            </button>
            {/* end zone A  */}
            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-home-zoneB-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home-zoneB"
              type="button"
              role="tab"
              aria-controls="v-pills-home-zoneB"
              aria-selected="true"
            >
              Zone B
            </button>
            {/* end zone B  */}
            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-home-zoneB-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home-zoneC"
              type="button"
              role="tab"
              aria-controls="v-pills-home-zoneC"
              aria-selected="true"
            >
              Zone C
            </button>
            {/* end zone C  */}
            {/* end regional league  */}
            {/* COUNTY LEAGUE STATS  */}
            <span className="tab-league-name">county League</span>
            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-cl-zoneA-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-cl-zoneA"
              type="button"
              role="tab"
              aria-controls="v-pills-cl-zoneA"
              aria-selected="false"
            >
              ZONE A
            </button>
            {/* end zone A  */}
            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-cl-zoneB-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-cl-zoneB"
              type="button"
              role="tab"
              aria-controls="v-pills-cl-zoneB"
              aria-selected="false"
            >
              ZONE B
            </button>
            {/* end Zone B  */}
            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-cl-zoneC-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-cl-zoneC"
              type="button"
              role="tab"
              aria-controls="v-pills-cl-zoneC"
              aria-selected="false"
            >
              ZONE C
            </button>
            {/* end Zone C  */}

            {/* end COUNTY LEAGUE datas  */}
            {/* SUB-COUNTY LEAGUE  */}
            <span className="tab-league-name">sub-county</span>

            <button
              class="nav-link nav-link-menu-items"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              League Table
            </button>
            {/* end SUB-COUNTY LEAGUE datas  */}
          </div>

          {/* TAB CONTENT  */}
          {/* REGIONAL TAB CONTENT DATAS  */}
          <div class="tab-content tab-content-datas" id="v-pills-tabContent">
            <RegionalsZoneA />
            <RegionalsZoneB />
            <RegionalsZoneC />
            {/* END REGIONAL LEAGUE DATAS  */}
            {/* COUNTY LEAGUE STANDING DATAS  */}
            <CountyLeagueZoneA />
            <CountyLeagueZoneB />
            <CountyLeagueZoneC />
            {/* END COUNTY LEAGUE DATAS  */}
            {/* SUB-COUNTY LEAGUE STANDING DATAS  */}
            <div
              class="tab-pane fade"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              SB-C LEAGUE STANDING
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Standings;
