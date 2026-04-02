const url = 'data/specialists.json';
const grid = document.querySelector('#directory-grid');
const modal = document.querySelector('#specialist-modal');
const modalContent = document.querySelector('#modal-details');

export async function initDirectory() {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Data fetch failed");
        const specialists = await response.json();
        
        // Display 15 items using forEach
        renderCards(specialists);
    } catch (error) {
        grid.innerHTML = `<p class="error">Unable to load specialists at this time.</p>`;
    }
}

function renderCards(data) {
    grid.innerHTML = "";
    data.forEach(doctor => {
        const card = document.createElement('section');
        card.className = 'doctor-card';
        
        // Template Literals for cleaner HTML molding
        card.innerHTML = `
            <img src="${doctor.image}" alt="${doctor.name}" loading="lazy" width="300" height="400">
            <h3>${doctor.name}</h3>
            <p class="tag">${doctor.specialty}</p>
            <p>${doctor.location}</p>
            <button class="view-btn">View Profile</button>
        `;

        // Event Handling for Modal & Local Storage
        card.querySelector('.view-btn').addEventListener('click', () => {
            localStorage.setItem('recent-dr', doctor.name);
            showModal(doctor);
        });

        grid.appendChild(card);
    });
}

function showModal(doctor) {
    modalContent.innerHTML = `
        <h2>${doctor.name}</h2>
        <p><strong>Experience:</strong> ${doctor.experience}</p>
        <p>${doctor.bio}</p>
    `;
    modal.showModal();
}

// Close Modal Logic
document.querySelector('#close-modal')?.addEventListener('click', () => modal.close());