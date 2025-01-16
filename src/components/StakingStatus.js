import React from "react";
import Button from "@mui/material/Button";

function StakingStatus({ stakingStatus, rewardsAmount, onUnstake }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "20px" }}>
      <p>
        <Button variant="contained" style={{ margin: "10px" }}>
          Staking Status: {stakingStatus || "Not Staked"}
        </Button>
      </p>
      <p>
        <Button variant="contained" style={{ margin: "10px" }}>
          Available Rewards: {rewardsAmount || "0"}
        </Button>
      </p>
      {stakingStatus && stakingStatus.includes("staked") && (
        <Button variant="contained" onClick={onUnstake} style={{ marginTop: "10px" }}>
          Unstake
        </Button>
      )}
    </div>
  );
}

export default StakingStatus;
