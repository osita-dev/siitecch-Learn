export default function Youtube({ url }) {
    // Extract the video ID from the URL
    const getEmbedUrl = (url) => {
        let videoId = '';
        
        if (url.includes('youtu.be/')) {
            // Handle short URLs like https://youtu.be/k51eGQgHKpc
            videoId = url.split('youtu.be/')[1].split('?')[0];
        } else if (url.includes('watch?v=')) {
            // Handle standard URLs like https://www.youtube.com/watch?v=k51eGQgHKpc
            videoId = url.split('watch?v=')[1].split('&')[0];
        } else if (url.includes('/embed/')) {
            // If it's already an embed URL
            return url;
        }

        return `https://www.youtube.com/embed/${videoId}`;
    };

    const embedUrl = getEmbedUrl(url);

    return (
        <div style={{ display: 'flex', justifyContent: 'center', margin: '20px auto' }}>
            <iframe
                width="100%"
                height="200"
                src={embedUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                    width: '100%',
                    aspectRatio: '16 / 9'
                }}
            ></iframe>
        </div>
    );
}
