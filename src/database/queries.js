import { database } from "../config.js"

const queries = {
    createProduct: `
        INSERT INTO Productos (ProveedorID, CategoriaSubcategoriaID, Nombre, Marca, Stock, Perece, Fecha_Vencimiento)
        OUTPUT INSERTED.*
        VALUES (@ProveedorID, @CategoriaSubcategoriaID, @Nombre, @Marca, @Stock, @Perece, @Fecha_Vencimiento)`,
    getProductoById:`USE ${database}; SELECT * FROM Productos WHERE ProductoID = @ID`,
    eliminarProducto:`USE ${database}; DELETE FROM Productos WHERE ProductoID = @ID`,
};


export default queries;
