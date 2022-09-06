import React,{useState} from "react";

function Container(){

    //declare variables
    //const [counter,setCounter]=useState('Add to cart');
    const [noofitem,setItemcount]=useState(0);
    const [products, setProducts]=useState([
        {id:"1",name:"VIVO",price:"20.00",addedtoCart:false},{id:"2",name:"NOKIA",price:"30.00",addedtoCart:false},{id:"3",name:"OPPO",price:"40.00",addedtoCart:false},
        {id:"4",name:"IPHONE",price:"40.00",addedtoCart:false},{id:"5",name:"REDMI",price:"40.00",addedtoCart:false},{id:"6",name:"SAMSUNG",price:"40.00",addedtoCart:false},
        {id:"7",name:"INTEX",price:"40.00",addedtoCart:false},{id:"8",name:"LAVA",price:"40.00",addedtoCart:false}]);
   
    //declare function for toggle
    const toggleCart=(e)=>{
        //console.log(e.target.id); 
        let product=[...products];
        let index = product.findIndex(p=>p.id===e.target.id);
        console.log(index);
        product[index].addedtoCart=!product[index].addedtoCart;
        setProducts(product);
        if(product[index].addedtoCart==true){
            setItemcount(noofitem+1);
        }else{
            setItemcount(noofitem-1);    
        }
    }


    return (
        <>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                
                {products.map((prod,index)=>(

                  <div className="col mb-5" key={index}>
                  <div className="card h-100">
                      <div className="badge bg-dark text-white position-absolute" style={{top: '0.5rem',right: '0.5rem'}}>Sale</div>
                      <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                      <div className="card-body p-4">
                          <div className="text-center">
                              <h5 className="fw-bolder">{prod.name}</h5>
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                              ${prod.price}
                              
                          </div>
                      </div>
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center">
                         
                              <button noofitem={noofitem} className="btn btn-outline-dark mt-auto" id={prod.id} onClick={(e) => toggleCart(e)}>{prod.addedtoCart? "Remove from cart" : "Add to cart"}</button>
                              
                           </div>
                      </div>
                  </div>
              </div>

                ))}
                    
                </div>
            </div>
        </section>
        </>
    );
}

export default Container;