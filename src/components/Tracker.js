import React, { useEffect } from 'react';

const TrackView = () => {
    useEffect(() => {
        const trackView = async () => {
            try {
                const response = await fetch('http://localhost:5000/track-view', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ views: 1 }), // Track one view
                });
                const data = await response.json();
                console.log('View tracked:', data);
            } catch (err) {
                console.log('Error tracking view:', err);
            }
        };

        trackView();
    }, []);

    return <div>Tracking user views...</div>;
};

export default TrackView;
