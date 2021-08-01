import React, { useState, useEffect } from "react";
import { useAuth0 } from "../../contexts/auth0-context";
import axios from "axios";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./AllIssues1.scss";

const AllIssues1 = () => {
  const { isLoading, user, dbUser, statusUrl } = useAuth0();
  const [issueArr, setIssueArr] = useState([]);
  const [loading, setLoading] = useState(true);

  const getIssues = () => {
    axios
      .get(`${statusUrl}/api/issues/${dbUser.uid}`)
      .then(response => setIssueArr([...response.data]))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getIssues();
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="allIssuesMother">
      <section className="bioSection">
        <img className="profilePic" src={user.picture} alt={dbUser.nickname} />

        <div className="bioInfo">
          <h1 className="profileName">
            {dbUser.given_name !== "null" ? dbUser.given_name : dbUser.nickname}
            's Profile
          </h1>

          {dbUser.company !== "null" && dbUser.role !== "null" && (
            <h1 className="profileRoleComp">
              {dbUser.role} at {dbUser.company}
            </h1>
          )}
        </div>
      </section>
      <section className="issuesSection">
        {issueArr.reverse().map(issue => (
          <Link key={issue.uid} to={`/issues/${issue.uid}`}>
            <div className="issuePost">
              <h4 className="issueTitle">{issue.issue_title}</h4>

              <div className="issueParaDiv">
                <p className="issuePara">{`${issue.date_created} | ${issue.time_created}`}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default AllIssues1;
