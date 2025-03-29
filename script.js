// Navratri Countdown Timer
const countDownDate = new Date("March 30, 2025 00:00:00").getTime();

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countdown").innerHTML = `
        <div class="flex justify-center space-x-4">
            <div class="text-center">
                <div class="text-4xl font-bold">${days}</div>
                <div class="text-sm">Days</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold">${hours}</div>
                <div class="text-sm">Hours</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold">${minutes}</div>
                <div class="text-sm">Minutes</div>
            </div>
            <div class="text-center">
                <div class="text-4xl font-bold">${seconds}</div>
                <div class="text-sm">Seconds</div>
            </div>
        </div>
    `;
    
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").innerHTML = `
            <div class="text-3xl font-bold text-green-400">
                Navratri has begun! Jai Mata Di!
            </div>
        `;
    }
}, 1000);

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});