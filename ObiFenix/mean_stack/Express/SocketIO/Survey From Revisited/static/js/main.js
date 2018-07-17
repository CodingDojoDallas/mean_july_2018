$(document). ready(() => {
   let socket = io.connect();

   $('form').submit((e) => {
      e.preventDefault();
      let formData = $('form').serializeArray();
      socket.emit("sending_form", formData);
   });

   socket.on('receive_data', (data) => {
      var response = `
      <div class="col-8 offset-2 border">
         <h6>You emitted the following information to the server:</h6>
         <ul class="col-12 mt-4 offset-3" id="messages" action="">
            <div class="form-row form-group"><label for="" class="text-muted col-6">Name:</label><p class="col-6">${data[0].value}</p></div>
            <div class="form-row form-group"><label for="" class="text-muted col-6">Location: </label><p class="col-6">${data[1].value}</p></div>
            <div class="form-row form-group"><label for="" class="text-muted col-6">Language: </label><p class="col-6">${data[2].value}</p></div>
            <div class="form-row form-group"><label for="" class="text-muted col-6">Comment: </label><p class="col-6">${data[3].value}</p></div>
            <div class="form-row form-group"><label for="" class="text-muted col-6">Your Lucky Number: </label><p class="col-6">${Math.floor(Math.random() * 1000) + 1}</p></div>
         </ul>
      </div>`;
      $('#messages').html(response);
   });
})
