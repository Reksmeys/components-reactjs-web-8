import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { fetchCategories, insertProductToAPI, uploadFile } from '../actions/ProductActions'

export default function CreateProduct() {

    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    // state product for insert
    const [product, setProduct] = useState({
        title: "",
        price: 0,
        description: "",
        categoryId: 0,
        images: ["https://api.lorem.space/image/watch?w=640&h=480&r=9123"]
    })


    // create function to get value from form
    const onInputChange = (e) => {
        console.log(e.target.value);
        const {name, value} = e.target

        setProduct(preState => {
            return{
                ...preState,
                [name]: value
            }
        })
        console.log(product);

    }

    
    const [source, setSource] = useState("");
    const onChangeFileHandler = (e) => {
        console.log(e.target.files[0]);
        setSource(e.target.files[0]);
    }

    useEffect(() => {
        fetchCategories()
        .then(res => res.json())
        .then(res => setCategories(res))
    }, [])

    const insertProduct = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("file", source, source.name);
        uploadFile(formData).then((res) => {
            console.log(res.data);
            product.images = [res.data.location];
            console.log('product', product);
            insertProductToAPI(product)
            .then(res => res.json())
            .then(res => {
                navigate("/")
            })
        })
    }

  return (
    <Container>
    <main class="form-product w-50 m-auto">
            <h1 class="h3 my-3 fw-normal">New Product</h1>
            <div class="form-floating">
            <input 
                onChange={onInputChange}
                name="title"
                value={product.title}
                type="text" class="form-control mb-2" placeholder="Magic Mouse" />
            <label for="floatingInput">Product Name</label>
            </div>
            <div class="form-floating">
            <input
                onChange={onInputChange} 
                name="price"
                value={product.price}
                type="text" class="form-control mb-2" placeholder="Prices ($)" />
            <label for="floatingPassword">Prices $</label>
            </div>
            <div className='form-floating mb-3'>
                <select class="form-select" aria-label="Product Category" onChange={onInputChange} name="categoryId" value={product.categoryId}>
                    <option selected>Product Category</option>
                    {
                        categories && categories.map((category) => (
                            <option value={category.id}>{category.name}</option>
                        ))
                    }
                    
                </select>
            </div>
            <div class="form-floating">
                <textarea
                    onChange={onInputChange} 
                    name="description"
                    value={product.description}
                    class="form-control mb-2" placeholder="Leave a comment here"></textarea>
                <label for="floatingTextarea">Description</label>
            </div>
            <div className="col-md-4">
            <div className="d-flex justify-content-center align-items-center" style={{border: '3px dotted darkblue', height: 300}}>
              <img src={source && URL.createObjectURL(source)} style={{height: 260}}/>
              <input type="file" onChange={onChangeFileHandler} />
            </div>
          </div>
            <button 
                onClick={insertProduct}
                class="w-100 btn btn-lg btn-primary mt-3" 
                type="submit">Insert Product</button>
            <p class="mt-5 mb-3 text-muted">© 2017-2022</p>
        </main> 
    </Container>
  )
}
