// document.getElementById('reservationForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get form values
//     var username = document.getElementById('username').value;
//     var guests = document.getElementById('guests').value;
//     var phone = document.getElementById('phone').value;
//     var checkin = document.getElementById('checkin').value;
//     var checkout = document.getElementById('checkout').value;
//     var destination = document.getElementById('destination').value;

//     // Set receipt values
//     document.getElementById('receiptUsername').textContent = username;
//     document.getElementById('receiptGuests').textContent = guests;
//     document.getElementById('receiptPhone').textContent = phone;
//     document.getElementById('receiptCheckin').textContent = checkin;
//     document.getElementById('receiptCheckout').textContent = checkout;
//     document.getElementById('receiptDestination').textContent = destination;

//     // Show receipt
//     document.getElementById('receipt').style.display = 'block';
//   });




import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://rymxvhrtwzsvuvjsgeen.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5bXh2aHJ0d3pzdnV2anNnZWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4Njg5MDksImV4cCI6MjAyOTQ0NDkwOX0.-Y3Jsr9n_yG_Wr6GQo_0et2UDCwSV_RNeEXzoY0x11o"
const supabase = createClient(supabaseUrl, supabaseKey)

document.getElementById('reservationForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    console.log();
    // Get form values
    var mode = document.getElementById('mode').value;
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var passenger = document.getElementById('passenger').value;
    var from = document.getElementById('departure').value;
    var to = document.getElementById('destination').value;
    var going = document.getElementById('going').value;
    var returnDate = document.getElementById('return').value;

    // Set receipt values
    document.getElementById('receiptUsername').textContent = name;
    document.getElementById('receiptGuests').textContent = passenger;
    document.getElementById('receiptPhone').textContent = phone;
    document.getElementById('receiptCheckin').textContent = going;
    document.getElementById('receiptCheckout').textContent = returnDate;
    document.getElementById('receiptDestination').textContent = to;
    document.getElementById('receiptMode').textContent = mode;

    // Show receipt
    document.getElementById('receipt').style.display = 'block';


    const { data, error } = await supabase
        .from('ticket_booking')
        .insert([
            {
                "mode": mode,
                "phone": phone,
                "name": name,
                "passengers": passenger,
                "from": from,
                "to": to,
                "going": going,
                "return": returnDate
            },
        ])
        .select();

    console.log(data, error);
    console.log("Data Updated to database");

});