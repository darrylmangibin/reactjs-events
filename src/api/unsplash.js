import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e55dcd3792c6037058bd801223a221c015ebff3e774eaf281ce1e3f49c1d21b2'
  }
});

