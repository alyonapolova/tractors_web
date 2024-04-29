import axios from 'axios';

export async function getProducts() {
  const res = await axios.get('http://localhost:3001/products');
  return res.data;
}

export async function getProductById(id) {
  const res = await axios.get(`http://localhost:3001/products/${id}`);
  return res.data;
}
