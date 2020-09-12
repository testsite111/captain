let status = function (response) {
  if (response.status !== 200) {
    return Promise.reject(new Error(response.statusText))
  }
  return Promise.resolve(response)
}
let json = function (response) {
  return response.json()
}

let table = document.querySelector(".table");

fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json')
	.then(status)
	.then(json)
	.then(function (data) {
		console.log('data', data)
	    for (var i = 0; i < data.length; i++) {
	    	if (data[i].status == "pednding") {
	    		data[i].status = "Ожидается";
	    	} else if (data[i].status == "out_of_stock") {
	    		data[i].status = "В наличии";
	    	} else if (data[i].status == "in_stock") {
	    		data[i].status = "Нет в наличии";
	    	}
	    	table.innerHTML += 
	    	"<tr id=" + data[i].id + "><td style='width:454px'>" + data[i].title + 
	    	"<br><span>" + data[i].description + "</span></td><td style='padding-left:15px'>" 
	    	+ data[i].year +
	    	"</td><td><div style='background:" + data[i].color + "'></div>" +
	    	"</td><td>" + data[i].status +
	    	"</td><td>" + data[i].price + " руб." +
	    	"</td><td><button class='remove' type='button' onclick='this.parentNode.parentNode.remove()'>Удалить</button></td></tr>";
	    }  
	})
	.catch(function (error) {
		console.log('error', error)
	})