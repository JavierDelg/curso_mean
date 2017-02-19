

db.rooms.insertMany([
	{
		_id : "101",
		hotel_id: "NodeNH",
		type: "simple"},
	{
		_id : "102",
		hotel_id: "NodeNH",
		type: "simple"},
	{
		_id : "103",
		hotel_id: "NodeNH",
		type: "double"},
	{
		_id : "104",
		hotel_id: "NodeNH",
		type: "double"},
	{
		_id : "105",
		hotel_id: "NodeNH",
		type: "double"}])


db.customers.insert({
	_id: "12345789N",
	first: "First1",
	last: "Last1",
	email: "email@email.com",
	phone1: "911234567",
	phone2: "612345678",
	birthdate: "19910205",
},
{
	_id: "12345788N",
	first: "First2",
	last: "Last2",
	email: "email2@email.com",
	phone1: "911334567",
	phone2: "612445678",
	birthdate: "19910305",
},
{
	_id: "12345786N",
	first: "First3",
	last: "Last3",
	email: "email3@email.com",
	phone1: "911244567",
	phone2: "612355678",
	birthdate: "19910105",
}
)


db.service.insert({
	_id: "nombre_servicio",
	description: "",
	rate: {high : "price" , low : "price"}
})



db.hotel.insert({
	_id: "NodeNH",
	address: {city: "Madrid", street: "Calle falsa 123", zip: "28807"}
	gps_location: "45.123 20.1234",
	picture_path: "picture",
})

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