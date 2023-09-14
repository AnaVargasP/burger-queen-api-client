<p  align="center">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQ9U91vTOAhQbErmTe2Nl7ghcFv6SmVxMREcLYGo3TkKS-F5peVNT7m566FjCgzF8DAVZQ_uDZ8WFaib_DmRsb5WP4Ph5jbxOJPBdAAe2JuKXfYNhl1HDrm3MsaJ6J9N7X2BK58qLKhmTQHMIgvHuRTOehqXAWQIseO5DWY2JkygMQJBCF95BazyGLbp0/s1308/Sin%20t%C3%ADtulo.png "  />
</p>

# Burger Queen (API Client)

Un pequeño restaurante de hamburguesas en crecimiento requiere un sistema que les permita tomar pedidos a través de tabletas y enviarlos a la cocina de manera organizada y eficiente. La aplicación diseñada cumple con esta funcionalidad al proporcionar las siguientes capacidades:

- El administrador puede gestionar usuarios y productos, lo que le permite mantener un control completo sobre el sistema.

- El cocinero puede administrar el estado de las órdenes y visualizar el tiempo que le toma preparar cada pedido, lo que contribuye a una preparación más eficiente.

- El mesero puede tomar los pedidos de los clientes y marcar las órdenes que ya han sido entregadas, lo que mejora la comunicación y la satisfacción del cliente.

Es importante destacar que esta aplicación ha sido desarrollada utilizando React, lo que garantiza una experiencia de usuario moderna y receptiva.

Esta es la información entregada por el cliente:

> Somos **Burguer Queen**, una cadena de comida 24hrs.
>
> Nuestra propuesta de servicio 24hrs ha tenido muy buena acogida y, para
> seguir creciendo, necesitamos un sistema que nos ayude a tomar los pedidos de
> nuestrxs clientxs.
>
> Tenemos 2 menús: uno muy sencillo para el desayuno:
>
> | Ítem                      |Precio $|
> |---------------------------|------|
> | Café americano            |    5 |
> | Café con leche            |    7 |
> | Sandwich de jamón y queso |   10 |
> | Jugo de frutas natural    |    7 |
>
> Y otro menú para el resto del día:
>
> | Ítem                      |Precio|
> |---------------------------|------|
> |**Hamburguesas**           |   **$**   |
> |Hamburguesa simple         |    10|
> |Hamburguesa doble          |    15|
> |**Acompañamientos**        |   **$**   |
> |Papas fritas               |     5|
> |Aros de cebolla            |     5|
> |**Para tomar**             |   **$**   |
> |Agua 500ml                 |     5|
> |Agua 750ml                 |     7|
> |Bebida/gaseosa 500ml       |     7|
> |Bebida/gaseosa 750ml       |     10|
>
> Nuestrxs clientxs son bastante indecisos, por lo que es muy común que cambien
> el pedido varias veces antes de finalizarlo.

## Diseño UX

**Waiter**

<p float="left">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhWL0jrrpr00XVv9W5HNKJvZtnvm7iVKGWXIIqEj0MGXsaNQ_rPFyZc8MJsu55G30GfOGfX5YdVkmlWrcQQAORUvUiLpzag0ETkrZ6ydfdW9qLkBDvi6cddHWfkYGIQ0JSljkb0tufU8agS_1BGsw8k6tCkztNJbxZtSwfo5l2k5rTRKXbitN3tpdeYyB8/s320/waiter.png)"  />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiekCMnF_bD9FT00kmw0EuZo_mgQhUrkcjYdnN-R9LYEXcJ5iWLyfhYSJWv8dCaAMe0yu0bjr3DyBzWB3YYqSH9pnnyS57GiBA07BKygZTHmsBMyZ-QIbzKkqIumWs-4LO6kcIM6v_m5av-fzhq9ZfnwvCLbnv6Jh5MfLvpGKMVJM0-0-vynHzzTfRKuY4/s320/waiter-a.png" /> 
</p>

<p float="left">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiv07W54vQZ2w7pOI70Yfn_zfGFli-oah5pMqPCeBBEAGExv7v_fIY96hJ84A2UBK1YfKvAE-QRGj6PnyDPRHGYwxeZb266w7udXH_4_xD8Hgubo-vp0SF3EnYCgRsdhz7mwflbNmDlxCaw_DbTzETUBEdyMQcwKthxeErVD5befNwPOOUdMCXhepBxTyg/s320/waiter-1.png"  />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhA7q4GsWoPl-z_DSaXpNWrV8SaGuYHFe8t5zGYEcAG6JCtxd2uTJ6ETt8fTHVtZ1C7rxoUWfPJgghuAnpypTOAHZAsUn2EIjvUog1ptciGv8cqHT4kBCecZ0s--nWKz7Nu9uEUiOsI39LkKrxMP8Vw7UlEuaGiFnQZ0ymLP8J4gnOysTrdc5HHsypOB98/s320/waiter-2.png" /> 
</p>

**Chef**

<p float="left">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUGBAZLDrJpOTYv_f2FP30kKJ3caDw3RcwQ35eMh1gUix7fgMmsx1V3jGEu7WVimDt2czqJMUbPgFd6czaNB1DRl3-P8WD_rL3zjNHJsnvGCivN8p-zJl0NE34bNZ7JKiW-Wp5riickd1TieD_YAGQ659OrkqVTnZtxEerqxunhmKsqS6fumaXlUQppl0/s320/chef1.png"  />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh8jR8VGxw2nMgza7wpVgVl6DCc8MYXN80uY5t9Ct4-LgjM8EIpFP8fLJOoji2afzb5apNMOwtrCvCH_yelQk-RY7aeugyuIpZzMNWeSUXSxK-frk3QPqnwXP4kcXLN-RsHLJOeYUs3eEn4pj4sJpB-R5CYnx5z8n7bPhchvHAO9PtVWsOiqSF-tjiKfZ4/s320/chef2.png" /> 
</p>

**Admin**

<p float="left">
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg44654s4RK0ylaIvE1qC4zI2T135opB18toQrSiCH1ijCl2witc1f_q5SJOwS8eMSg_YqHiHZ-Lr_q8Vg9cPz4E9pT0AIRcbSAEblRc0bLkeWsAzpG9G8h9-YiDYrVO2H0c_U6JtEysh-O0IKh-rzoD-cSgmyZOrstoikcLlzuLqdJCpfrAhW08k0V4tQ/s320/admin1.png"  />
  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEis4Rl9AMem5m8yUJpo8kZ5riUvAp7-bWtgk20j1f6-bw8WKUBEZaLeyuFdFsWPahOLh_mU8zba-3c3d-LJqn_tdDqZAX5Q_P1NyeNEmjEST-tKMhFe5UFECnHM5oxx9kO-0KkH5KwgGz5zj9vZIJWax3TQ0MDohv8w4YAc20psYesAD7ZfNz4JwZpGMHY/s320/admin2.png" /> 
</p>


## Historias de usuario

#### [Historia de usuario 1] Mesero/a debe poder ingresar al sistema, si el admin ya le ha asignado credenciales

Yo como meserx quiero poder ingresar al sistema de pedidos.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario.

* Acceder a una pantalla de login.
* Ingresar email y contraseña.
* Recibir mensajes de error comprensibles, dependiendo de cuál es el error
  con la información ingresada.
* Ingresar al sistema de pedidos si las crendenciales son correctas.

***

#### [Historia de usuario 2] Mesero/a debe poder tomar pedido de cliente/a

Yo como meserx quiero tomar el pedido de unx clientx para no depender de mi mala
memoria, para saber cuánto cobrar, y enviarlo a la cocina para evitar errores y
que se puedan ir preparando en orden.

##### Criterios de aceptación

Lo que debe ocurrir para que se satisfagan las necesidades del usuario

* Anotar nombre de clientx.
* Agregar productos al pedido.
* Eliminar productos.
* Ver resumen y el total de la compra.
* Enviar pedido a cocina (guardar en alguna base de datos).
* Se ve y funciona bien en una _tablet_

***

#### [Historia de usuario 3] Jefe de cocina debe ver los pedidos

Yo como jefx de cocina quiero ver los pedidos de lxs clientxs en orden y
marcar cuáles están listos para saber qué se debe cocinar y avisar a lxs meserxs
que un pedido está listo para servirlo a un clientx.

##### Criterios de aceptación

* Ver los pedidos ordenados según se van haciendo.
* Marcar los pedidos que se han preparado y están listos para servirse.
* Ver el tiempo que tomó prepara el pedido desde que llegó hasta que se
  marcó como completado.

***

#### [Historia de usuario 4] Meserx debe ver pedidos listos para servir

Yo como meserx quiero ver los pedidos que están preparados para entregarlos
rápidamente a lxs clientxs que las hicieron.

##### Criterios de aceptación

* Ver listado de pedido listos para servir.
* Marcar pedidos que han sido entregados.

***

#### [Historia de usuario 5] Administrador(a) de tienda debe administrar a sus trabajadorxs

Yo como administrador(a) de tienda quiero gestionar a los usuarios de
la plataforma para mantener actualizado la informacion de mis trabajadorxs.

##### Criterios de aceptación

* Ver listado de trabajadorxs.
* Agregar trabajadorxs.
* Eliminar trabajadoxs.
* Actualizar datos de trabajadorxs.

***

#### [Historia de usuario 6] Administrador(a) de tienda debe administrar a sus productos

Yo como administrador(a) de tienda quiero gestionar los productos
para mantener actualizado el menú.

##### Criterios de aceptación

* Ver listado de productos.
* Agregar productos.
* Eliminar productos.
* Actualizar datos de productos.

***

## Depliegue de la aplicación

La página se encuentrea desplegada en Vercel  →
[Burger Queen](https://burger-queen-api-client-phi.vercel.app/)

Para ingresar existen los siguientes usuarios: 
Admin 
- correo: grace.hopper@systers.xyz
- contraseña: 123456

Waiter
- correo: lola@mail.com 
- contraseña: 12345

Chef 
- correo: cheff@mail.com 
- contraseña: 12345


