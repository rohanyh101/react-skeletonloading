import React from 'react'
import "./Skeleton.css"
import { CircularProgress } from '@mui/material';

const Skeleton = ({ type }) => {

    const counter = 8;

    const FeedSkeleton = () => (
        <div className="postSk">
            <div className="postSkImg"></div>
            <div className="postSkInfo">
                <div className="postSkAvatar"></div>
                <div className="postSkDetail">
                    <div className="postSkText"></div>
                    <div className="postSkText sm"></div>
                </div>
            </div>
        </div>
    );

    const TopSkeleton = () => (
        <div className="topSk">
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkIcon"></div>
            <div className="topSkAvatar"></div>
        </div>
    )

    const MenuSkeleton = () => (
        <div className="menuSk">
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
            <div className="menuSkItem"></div>
        </div>
    )

    const ProgressCircle = () => (
        <div className="circle">
            <CircularProgress />
        </div>
    )

    const CustomLoading = () => (
        <div className="custom">
            <div className="balls">
                <div className="ball b1"></div>
                <div className="ball b2"></div>
                <div className="ball b3"></div>
            </div>
            <span className="customText">Loading...</span>
        </div>
    )
    
    switch(type) {
        case "feed":
            return Array(counter).fill(<FeedSkeleton />);

        case "top": 
            return <TopSkeleton />;

        case "menu": 
            return <MenuSkeleton />;
        
        case "circle":
            return <ProgressCircle />;

        case "custom":
            return <CustomLoading />;

        default: return <></>;
    }
}

export default Skeleton;