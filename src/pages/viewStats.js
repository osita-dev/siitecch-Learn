import React, { useEffect, useState } from 'react';

const ViewStats = () => {
    const [viewsData, setViewsData] = useState({
        day: 0,
        week: 0,
        month: 0,
        year: 0,
    });

    useEffect(() => {
        const fetchViews = async () => {
            try {
                const response = await fetch('http://localhost:5000/get-views');
                const data = await response.json();
                if (data.length > 0) {
                    // Assuming we only need the most recent stats
                    const latestData = data[data.length - 1];  // Get the most recent data

                    setViewsData({
                        day: latestData.views,
                        week: latestData.week,
                        month: latestData.month,
                        year: latestData.year,
                    });
                }
            } catch (err) {
                console.log('Error fetching views:', err);
            }
        };

        fetchViews();
    }, []);

    return (
        <div>
            <h1>View Stats</h1>
            <div className="card-container">
                <div className="card">
                    <div>Day</div>
                    <div>{viewsData.day} views</div>
                </div>
                <div className="card">
                    <div>Weekly</div>
                    <div>{viewsData.week} views</div>
                </div>
                <div className="card">
                    <div>Monthly</div>
                    <div>{viewsData.month} views</div>
                </div>
                <div className="card">
                    <div>Yearly</div>
                    <div>{viewsData.year} views</div>
                </div>
            </div>
        </div>
    );
};

export default ViewStats;
