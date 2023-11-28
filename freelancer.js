// freelancer.js

document.addEventListener('DOMContentLoaded', function () {
    // Initial freelancers
    const freelancers = [
        { name: 'Alice', occupation: 'Writer', startingPrice: 30 },
        { name: 'Bob', occupation: 'Teacher', startingPrice: 70 },
        { name: 'Charlie', occupation: 'Graphic Designer', startingPrice: 45 },
        { name: 'David', occupation: 'Web Developer', startingPrice: 60 },
        { name: 'Eva', occupation: 'Marketing Specialist', startingPrice: 55 },
        { name: 'Frank', occupation: 'UX Designer', startingPrice: 40 },
        { name: 'Grace', occupation: 'Illustrator', startingPrice: 50 },
        { name: 'Hank', occupation: 'Photographer', startingPrice: 65 },
        // Add more freelancers as needed
    ];

    // Function to calculate and update average starting price
    function updateAveragePrice() {
        const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        const averagePrice = totalPrices / freelancers.length || 0;
        document.getElementById('average-price').textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
    }

    // Function to add a new freelancer with a delay
    function addFreelancerWithDelay(freelancer, delay) {
        setTimeout(() => {
            addFreelancer(freelancer.name, freelancer.occupation, freelancer.startingPrice);
        }, delay);
    }

    // Function to add a new freelancer
    function addFreelancer(name, occupation, startingPrice) {
        freelancers.push({ name, occupation, startingPrice });

        // Update the freelancers list
        const freelancersList = document.getElementById('freelancers-list');
        const newFreelancerItem = document.createElement('li');
        newFreelancerItem.textContent = `${name}, ${occupation}, Starting Price: $${startingPrice}`;
        freelancersList.appendChild(newFreelancerItem);

        // Update the average starting price
        updateAveragePrice();
    }

    // Initial rendering of freelancers with a delay
    freelancers.forEach((freelancer, index) => {
        const delay = index * 1000; // 1000 milliseconds (1 second) delay between each freelancer
        addFreelancerWithDelay(freelancer, delay);
    });

    // Simulate new freelancers being added every few seconds
    setInterval(() => {
        const newFreelancer = { name: 'Isabel', occupation: 'Content Writer', startingPrice: Math.floor(Math.random() * 100) + 1 };
        addFreelancer(newFreelancer.name, newFreelancer.occupation, newFreelancer.startingPrice);
    }, 3000); // Add a new freelancer every 3 seconds
});