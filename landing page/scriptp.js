fetch('http://localhost:5000/recommend', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',  // Prevents caching
    },
    body: JSON.stringify(userPreferences),
})
.then(response => response.json())
.then(data => {
    // Apply AI recommendations
    fabricSelect.value = data.fabric;
    designSelect.value = data.design;
    updateOutfit();
})
.catch(error => console.error('Error:', error));
