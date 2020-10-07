/* react */
import React from 'react';

/* css */
import './GitHub.css';

const ProfileDiv = ({profile}) => {
    return (
        <div className="container profileContainer">
            <img className="circleImg padd30" src={profile.avatar_url} alt=""></img>
            <div className="padd30">
                <h2 className="name">
                    {profile.name}
                </h2>
                <h3 className="username">
                    {profile.login}
                </h3>
                <br />
                <h4 className="bio">
                    {profile.bio}
                </h4>
                <button className="btn btn-dark btn-block">Go to Profile</button>
                <h5 className="follows">
                    <span className="fa fa-users fa-sm padd5"></span>
                    {profile.followers} { profile.followers === 1 ? 'follower' : 'followers'} | {profile.following} following
                </h5>
                <hr />
                <h6 className="company">
                    <span className="fa fa-building fa-sm padd5"></span>{profile.company}
                </h6>
                <h6 className="blog">
                    <span className="fa fa-link fa-sm padd5"></span>{profile.blog}
                </h6>
            </div>
        </div>
    )
}

export default ProfileDiv;
