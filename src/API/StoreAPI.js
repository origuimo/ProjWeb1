const url = 'https://balandrau.salle.url.edu/i3/';
const options = {
  method: 'GET',
  headers: {
    'Contant-Type' : '/shop/attacks'},};
    //Import {ref} from ‘vue’
      //const imatge = ref(“”);
      
	    fetch(url, options)
		  .then(res => res.json())      //ho converteix a json
		  .then(data => {
        console.log(data);
			//Imatge.value = data[0];   //l’assigno on jo vull
		  });
	  
  