
/* ---- Rooms ---- */
db.rooms.insert({
	_id : "mum_habitacion",
	hotel_id: "nombre_hotel",
	type: "simple double",
})

/* ---- Customers ---- */
db.customers.insert({
	_id: "NIF/NIE",
	first: "",
	last: "",
	email: "",
	phone1: "",
	phone2: "",
	birthdate: "",
})

/* ---- Service ---- */
db.service.insert({
	_id: "nombre_servicio",
	description: "",
	rate: {high : "price" , low : "price"}
})

/* ---- Hotel ---- */
db.hotel.insert({
	_id: "nombre_hotel",
	address: {city: "", street: "", zip: "codigo_postal"}
	gps_location: "",
	picture_path: "",
})

/* ---- Booking ---- */
db.booking.insert({
	_id: "yyyymmdd_customerid_random(0 - 100)",
	id_hotel: "", 
	hotel_address: "",
	customer_id: "",
	first: "",
	last: "",
	checkin_date: "",
	checkout_date: "",
	season: "alta baja",
	occupancy: [{
			room_id: "",
			type: "", 
			date: "yyyymmdd", 
			price: ""}],
	services: [{
			service_id: "",
			date: "yyyymmdd",
			desc: "",
			price: "",
			quantity: "",
	}]
	booking_cost: "precio",
	services_cost: "precio"
})