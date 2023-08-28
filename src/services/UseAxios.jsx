import axios from "axios";
import Swal from "sweetalert2";

let authToken =`Bearer ${localStorage.getItem("code")}`; 

// ACTUALIZAR TOKEN DE AUTENTICACION---------------------------------------------------------

export async function updateAuth(email, password) {
  console.log("Entre al update");
  try {
    const response = await axios.post("http://localhost:8080/login", {
      email: email,
      password: password,
    });
    authToken = `Bearer ${response.data.accessToken}`;
    localStorage.setItem("code", response.data.accessToken);
    console.log("NEW TOKEN", authToken);
    console.log('Datos Usuarios,', response.data.user)
    return response.data.user;
  } catch (error) {
    console.log(error.response.data)
   if(error.reponse.data ==='Entre al update'){
    new Swal('Error has occurred. try again later');
   }
   if(error.reponse.data ==='Incorrect password'){
    new Swal('Wrong email or password. Please enter the correct information');
   }
    
  }
}

// TRAER LOS PRODUCTOS------------------------------------------------------------------------
export async function getproduct() {
  try {
    const res = await axios.get('http://localhost:8080/products', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    console.log("RES", res.data);
    return res.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
    return null;
  }
} 

//TRAER LAS ORDENES----------------------------------------------------------------------------------------
export async function getOrder() {
  try {
    const res = await axios.get('http://localhost:8080/orders', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    return res.data;
  } catch (error) {
    new Swal('Error has occurred. try again later');
    return null;
  }
} 

//CREAR ORDENES--------------------------------------------------------------------------------------
export async function createOrder(clientName, table, products) {
 
  try {
    const dateEntry = new Date().toLocaleString()
    const response = await axios.post("http://localhost:8080/orders", {
    "client": clientName,
    "table" : table,
    "products": products,
    "status": 'pending',
    "dateEntry": dateEntry,
    "startTime": new Date(),
},  
{headers: {
  "Content-Type": "application/json",
  Authorization: `${authToken}`,
},})
    return response.data;
  } catch (error) {
    console.log(error.response.data)
   
  }
}

//ACTUALIZAR ORDENES--------------------------------------------------------------------------------------------
export async function updateOrder(orderId, newStatus , readyTime) {
  try {
    await axios.patch(
      `http://localhost:8080/orders/${orderId}`,
      {
        status: newStatus,
        readyTime: readyTime, //agregar el tiempo de preparacion al cuerpo de la solicitud
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${authToken}`,
        },
      }, 
    );
    new Swal('Succesfully completed');
    console.log('Orden actualizada con éxito');
  } catch (error) {
    console.error('Error al actualizar la orden', error);
  }
}










/* 

export async function updateOrder(order) {
  console.log("Entre al update");
  try {
    const response = await axios.post("http://localhost:8080/orders", 
{
    "client": client,
    "products": [
        {
            "qty":count,
            "product": {
            "id": id,
            "name": name,
            "price": price,
            "image": "https://github.com/Laboratoria/bootcamp/tree/main/projects/04-burger-queen-api/resources/images/sandwich.jpg",
            "type": "Desayuno",
            "dateEntry": dataEntry
            }
        }
        
    ],
    "status": status,
    "dataEntry": dataEntry
});
    authToken = `Bearer ${response.data.accessToken}`;
    
    return response.data.orders;
  } catch (error) {
    console.log(error.response.data)
   
  }
}


export const addOrder = async (order, client) => {
  console.log(order);
  console.log(client);
  const arrayProducts = order.products.map(function (product) {
    return {
      productId: product.id,
      qty: product.qty,
      name: product.name,
      img: product.image,
      price: product.price,
    };
  });
  const testOrder = { userId: "user", client: client, products: arrayProducts };

  console.log(testOrder);
  const res = await axios.post("http://localhost:8080/orders", testOrder);

  return res.data;
};















// Fetch users data
export async function getproduct() {
  console.log("Entre al user");
  try {
    const res = await axios.get('http://localhost:8080/users', {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${authToken}`,
      },
    });

    console.log("RES", res.data);

    console.log(res.data, "MAMAMAMAMAMAMA");
    return res.data;
  } catch (error) {
    if (error.response.status == 401) {
      updateAuth();
      return Users();
    }
    console.error("Error fetching users:", error);
    return null;
  }
} */

{
  /*import axios from 'axios'
const options =  {
  "Content-Type": "application/json",
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImdyYWNlLmhvcHBlckBzeXN0ZXJzLnh5eiIsImlhdCI6MTY5MjA0ODg2OSwiZXhwIjoxNjkyMDUyNDY5LCJzdWIiOiIyIn0.bxA1V5tjjmwMBp8AxsJ8BdGklPU9ZBbJLVpj0zZIu6s"
}
//Actualizar JWT  solicitud a la url de inicio de sesion 
async function updateAuth(){
  const response = await axios.post('http://localhost:8080/users',{
    "email": "grace.hopper@systers.xyz",
    "password": "123456"
})
  const newToken = response.data.token;
  console.log('NEW TOKEN', response.data.token)
  options.Authorization = `Bearer ${newToken}`
}
//Traer los usuarios
export async function Users(url) {
    const res = await axios.get(url,{  headers: options})
    console.log('RES', res)
    //funcion recursiva para actualizar JWT si da 402
    if(res.status == 402){
      updateAuth()
      Users(url)
    }
    console.log(res.data,'mamama') 
  return res.data;
}
*/
}