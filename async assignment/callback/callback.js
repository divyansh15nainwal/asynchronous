document.getElementById('executeCallback').addEventListener('click', function() {
    // Function to execute after a delay
    function delayedCallback(callback) {
        setTimeout(callback, 5000); // 5 seconds delay
        document.getElementById('result').innerHTML ="callback execute after 5 sec"; // display message

    }

    // Callback function to fetch and display data
    function fetchDataAndUpdateResult() {
        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                const postTitles = data.posts.map(post => post.title).join('<br>');
                document.getElementById('result').innerHTML = postTitles;
            })
            .catch(error => {
                document.getElementById('result').innerText = 'Error fetching data';
                console.error('Error fetching data:', error);
            });
    }

    // Execute the callback with delay
    delayedCallback(fetchDataAndUpdateResult);
});
