import { useState, useEffect } from "react";
import Navigation from "../../navigation/navigation";
import Dropdown from "../../DropDownList/DropDownList";
import Products from "../../Products/Products";
import Order from "../../Order/Order";

import { getproduct } from "../../../services/UseAxios";
import "./menu.css";


const Menu = () => {
// Define showButtons para controlar la visibilidad de los botones
const showButtons = {
  add: true,
  edit: false,
  delete: false, 
}

  //funcion para la navBar---------------------------
  const [selectedTab, setSelectedTab] = useState("Breakfast");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  //funcion para input--------------------------------
  const [clientName, setClientName] = useState("");

  const handleClientNameChange = (event) => {
    console.log(event.target.value);
    setClientName(event.target.value);
  };

    //dropDown--------------------------------------------------
    const [table, setTable] = useState("");

    function handleOnChange(e) {
      console.log(e.target.value, "lililili");
      setTable(e.target.value);
    }
  
    const items = [
      {
        id: 1,
        value: "Table 1",
      },
      {
        id: 2,
        value: "Table 2",
      },
      {
        id: 3,
        value: "Table 3",
      },
    ];


  // traer productos para desayuno o almuerzo-------------------
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getproduct();
        setProducts(response);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Resumen de la orden----------------------------------------------------
  const [orderProducts, setOrderProducts] = useState([]);
  const handlerAddProduct = (prod) => {
    const existingProductIndex = orderProducts.findIndex(
      (item) => item.product.id === prod.id
    );

    if (existingProductIndex !== -1) {
      // El producto ya existe, incrementa la cantidad
      const updatedOrderProducts = [...orderProducts];
      updatedOrderProducts[existingProductIndex].qty += 1;
      setOrderProducts(updatedOrderProducts);
    } else {
      // El producto no existe, agrégalo a la lista
      const newOrderProduct = {
        qty: 1,
        product: prod,
      };
      setOrderProducts([...orderProducts, newOrderProduct]);
    }
  };

// eliminar item en el resumen de la orden---------------------------------------------------
  const handleRemoveProduct = (productToRemove) => {
    const updatedProducts = orderProducts.filter(item => item.product !== productToRemove);
    setOrderProducts(updatedProducts);
  };



  

  return (
    <article>
      <section className="menu-waiter">
        <div className="container-info">
          <input
            type="text"
            placeholder="Client Name"
            className="client-name"
            value={clientName}
            onChange={handleClientNameChange}
          />
          <Dropdown items={items} handleOnChange={handleOnChange} />
        </div>

        <Navigation
          tabs={["Breakfast", "Lunch"]}
          activeTab={selectedTab}
          onSelectTab={handleTabChange}
        />

      </section>

      <div className="products-order">
        <Products
          productType={selectedTab}
          products={products}
          handlerAddProduct={handlerAddProduct}
          showButtons={showButtons}
        />
        <Order
          clientName={clientName}
          table={table}
          orderProducts={orderProducts}
          handleRemoveProduct={handleRemoveProduct}
          setClientName={setClientName}
          setTable={setTable}
          setOrderProducts={setOrderProducts}
        />
      </div>
    </article>
  );
};

export default Menu;


