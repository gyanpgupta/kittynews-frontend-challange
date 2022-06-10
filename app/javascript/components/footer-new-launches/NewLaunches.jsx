import React, { Fragment } from "react";

//GraphQL
import { useQuery } from "@apollo/react-hooks";
import ShowAllPostQuery from "../../graphql-queries/ShowAllPostQuery";

//Assets
import ArrowBlackUp from "../../../assets/images/arrow-up.png";

//Launch Styled Components
import * as LSC from "./LaunchStyledComponents";

const NewLaunches = () => {
  const { data, loading, error } = useQuery(ShowAllPostQuery);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <LSC.NewLaunchesContainer>
      <LSC.NewLaunchesHeader>
        <div style={{ borderBottom: "solid 1px #dfdfdf", width: "100%" }}></div>
        <LSC.NewLaunchTitle>Trending launches</LSC.NewLaunchTitle>
      </LSC.NewLaunchesHeader>
      <div style={{ display: "flex", marginBottom: "30px" }}>
        {data.postsAll.map((post, i) => (
          <Fragment key={i}>
            <LSC.TrendLaunchContainer
              style={{
                borderRight: `${
                  data.postsAll.length - 1 !== i ? "1px solid #dfdfdf" : ""
                }`,
              }}
            >
              <LSC.TrendLaunchSection>
                <img src={post.image} style={{ width: "60px" }} />
                <LSC.TrendLaunchTitle>{post.title}</LSC.TrendLaunchTitle>
                <LSC.TrendLaunchTagLine>{post.tagline}</LSC.TrendLaunchTagLine>
                <LSC.TrendLaunchCountWrapper>
                  <div>
                    <img
                      style={{
                        width: "12px",
                        marginRight: "7px",
                        width: "12px",
                      }}
                      src={ArrowBlackUp}
                    />
                    {post.votesCount}
                  </div>
                  <span style={{ marginTop: "-3px" }}>.</span>
                  <div style={{ marginLeft: "0px" }}>
                    {post.commentsCount} Comments
                  </div>
                </LSC.TrendLaunchCountWrapper>
              </LSC.TrendLaunchSection>
            </LSC.TrendLaunchContainer>
          </Fragment>
        ))}
      </div>
    </LSC.NewLaunchesContainer>
  );
};

export default NewLaunches;
