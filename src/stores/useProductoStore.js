import { defineStore } from "pinia"

export const useProductoStore = defineStore("productos", {
  state: () => ({
   productos: [
      { 
        id: 1, 
        nombre: "Vinilo The Beatles", 
        precio: 800, 
        imagen: "https://cdn-images.dzcdn.net/images/cover/346169e46cb9869b52165dabfdd9605b/0x1900-000000-80-0-0.jpg"
      },
      { 
        id: 2, 
        nombre: "Vinilo Pink Floyd", 
        precio: 900, 
        imagen: "https://upload.wikimedia.org/wikipedia/en/3/3b/Dark_Side_of_the_Moon.png" 
      },
      { 
        id: 3, 
        nombre: "Cassette Nirvana", 
        precio: 200, 
        imagen: "https://upload.wikimedia.org/wikipedia/en/b/b7/NirvanaNevermindalbumcover.jpg" 
      },
      { 
        id: 4, 
        nombre: "Vinilo The Strokes - The New Abnormal",
        precio: 300, 
        imagen: "https://m.media-amazon.com/images/I/91PbdrEjhaL._UF1000,1000_QL80_.jpg"
      },
      { 
        id: 5, 
        nombre: "Vinilo Enjambre - Daltónico",
        precio: 550, 
        imagen: "https://akamai.sscdn.co/letras/360x360/albuns/6/0/9/9/1951291694698504.jpg"
      }
    ]
  }),

  actions: {

    crearProducto(producto) {
      producto.id = Date.now()
      this.productos.push(producto)
    },

    actualizarProducto(id, productoActualizado) {
      const index = this.productos.findIndex(p => String(p.id) === String(id))
      if (index !== -1) {
    // Reemplazamos el producto viejo por el nuevo
      this.productos[index] = { ...productoActualizado }
    }
  },

    eliminarProducto(id){
      this.productos = this.productos.filter(p => p.id != id)
    }

  },

  getters: {

    obtenerProductoPorId: (state) => {
      return (id) => state.productos.find(p => p.id == id)
    }

  }
})