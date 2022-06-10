import React from "react";

//Launch Styled Component
import * as LSC from "./LaunchStyledComponents";

const LaunchStatistics = ({ post }) => {
  return (
    <div>
      <LSC.AboutThisLaunchHead>About this launch</LSC.AboutThisLaunchHead>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        <LSC.AboutThisLaunchWrapper>
          <LSC.Text>Upvotes</LSC.Text> <LSC.Count>{post.votesCount}</LSC.Count>
        </LSC.AboutThisLaunchWrapper>
        <LSC.AboutThisLaunchWrapper>
          <LSC.Text>Comments</LSC.Text>{" "}
          <LSC.Count>{post.commentsCount}</LSC.Count>
        </LSC.AboutThisLaunchWrapper>
        <LSC.AboutThisLaunchWrapper>
          <LSC.Text>Views</LSC.Text> <LSC.Count>{post.viewsCount}</LSC.Count>
        </LSC.AboutThisLaunchWrapper>
        <LSC.AboutThisLaunchWrapper>
          <LSC.Text>Daily Rank</LSC.Text>{" "}
          <LSC.Count>#{post.dailyFeedPosition}</LSC.Count>
        </LSC.AboutThisLaunchWrapper>
        <LSC.AboutThisLaunchWrapper>
          <LSC.Text>Weekly Rank</LSC.Text>{" "}
          <LSC.Count>#{post.weeklyFeedPosition}</LSC.Count>
        </LSC.AboutThisLaunchWrapper>
      </div>
      <LSC.CenterTextWrapper>
        <span>Report</span>
        <span style={{ marginTop: "-5px" }}> . </span>
        <span>Edit this page</span>
      </LSC.CenterTextWrapper>
    </div>
  );
};

export default LaunchStatistics;
