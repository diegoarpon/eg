// Google Sheets URL
const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQRDhrJEXPCZQs24GjGr0rr9_-lzLF70I_TVWFi8dif2JuEsYDj6I3IiyocAM_BOmwDoIr7qiBA89dC/pub?output=csv';


function getNextEvent() {
	const today = new Date();
	today.setHours(0, 0, 0, 0);
	
	// Sort events by date first
	const sortedEvents = events.sort((a, b) => new Date(a.start) - new Date(b.start));
	
	for (let event of sortedEvents) {
		// Fix timezone issue by parsing date in local timezone
		const [year, month, day] = event.start.split('-');
		const eventDate = new Date(year, month - 1, day);
		console.log('Checking event:', event.title, 'Date:', eventDate, 'Today:', today); // Debug
		if (eventDate > today) {
			return event;
		}
	}
	return null;
}

function updateNextEventBadge() {
	const nextEvent = getNextEvent();
	const badge = document.getElementById('nextEventBadge');
	
	if (nextEvent && badge) {
		// Fix timezone issue by parsing date in local timezone
		const [year, month, day] = nextEvent.start.split('-');
		const eventDate = new Date(year, month - 1, day);
		const formattedDate = eventDate.toLocaleDateString('es-ES', { day: 'numeric', month: 'numeric' });
		if (nextEvent.url) {
			badge.innerHTML = `<a href="${nextEvent.url}" target="_blank" class="text-white text-decoration-none"> ${formattedDate} ${nextEvent.title} ${nextEvent.description || '¡Anotate!'}</a>`;
		} else {
			badge.innerHTML = `${formattedDate} ${nextEvent.title} ${nextEvent.description || '¡Anotate!'}`;
		}
		// Update popover content
		if (typeof updatePopoverContent === 'function') {
			updatePopoverContent();
		}
	} else if (badge) {
		badge.style.display = 'none';
	}
}

function loadEventsFromSheet() {
	fetch(sheetUrl)
		.then(response => {
			console.log('Fetch response status:', response.status);
			return response.text();
		})
		.then(csvText => {
			console.log('Raw CSV:', csvText.substring(0, 500)); // First 500 chars
			
			const lines = csvText.split('\n');
			console.log('Total lines:', lines.length);
			console.log('First few lines:', lines.slice(0, 3));
			
			// Skip header and filter empty lines
			const dataLines = lines.slice(1).filter(line => line.trim());
			console.log('Data lines:', dataLines);
			
			events = dataLines.map((line, index) => {
				console.log(`Processing line ${index}:`, line);
				
				// Simple CSV split (assuming no commas in data)
				const parts = line.split(',');
				console.log('Split parts:', parts);
				
				if (parts.length >= 2) {
					const title = parts[0].replace(/^"|"$/g, '').trim();
					const start = parts[1].replace(/^"|"$/g, '').trim();
					const description = parts[2] ? parts[2].replace(/^"|"$/g, '').trim() : '¡Anotate!';
					const url = parts[3] ? parts[3].replace(/^"|"$/g, '').trim() : '';
					
					console.log('Parsed event:', { title, start, description, url });
					return { title, start, description, url };
				}
				return null;
			}).filter(event => event && event.title && event.start);
			
			console.log('Final events array:', events);
			updateNextEventBadge();
			initializeCalendar();
		})
		.catch(error => {
			console.log('Error loading events, using fallback:', error);
			updateNextEventBadge();
			initializeCalendar();
		});
}

function initializeCalendar() {
	const calendarEl = document.getElementById('calendar');
	if (calendarEl) {
		const calendar = new FullCalendar.Calendar(calendarEl, {
			initialView : window.innerWidth < 768 ? 'listWeek' : 'dayGridMonth',
			locale: 'es',
			headerToolbar: {
				left: 'title',
				center: '',
				right: 'prev,next'
			},
			events: events
		});
		calendar.render();
	}
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
	loadEventsFromSheet();
});