import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHardHat } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import "./account-overview.css";
import AccountOverviewHeader from "./components/AccountOverviewHeader";
import SalesCard from "./components/SalesCard";
import PercentageCard from "./components/PercentageCard";
import Row from "./components/shared/Row";

export const AccountOverview = ({ data }) => {
  return (
    <div className="AccountOverview">
      <AccountOverviewHeader contactInfo={data.supportContact} />
      <SalesCard salesOverview={data.salesOverview} />
      <div className="ContainerPercentageCards">
        <PercentageCard
          title="UPLOAD SUCCESS"
          value={data.salesOverview.successfulUploads}
        />
        <PercentageCard
          title="LINES SAVED"
          value={data.salesOverview.linesAttempted}
        />
      </div>
    </div>
  );
};

export default AccountOverview;
