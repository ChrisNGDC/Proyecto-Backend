import { readProductosRepository, readProductosByCategoryRepository, readProductosBySubCategoryRepository, readProductosByProviderRepository, readProductosByPerishablilityRepository, readProductosByMaxDaysBeforePerishRepository, readProductosByIdRepository, readCategoriasRepository, readSubcategoriasRepository, readProductosByCategoryAndSubcategoryRepository }  from '../repository/productosRead.repository.js';

export const readProductosService = async () => {
    try {
        return readProductosRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByIdService = async (id) => {
    try {
        return readProductosByIdRepository(id)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByCategoryService = async (category) => {
    try {
        return readProductosByCategoryRepository(category)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosBySubCategoryService = async (subcategory) => {
    try {
        return readProductosBySubCategoryRepository(subcategory)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByCategoryAndSubcategoryService = async (category, subcategory) => {
    try {
        return readProductosByCategoryAndSubcategoryRepository(category, subcategory)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByProviderService = async (provider) => {
    try {
        return readProductosByProviderRepository(provider)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByPerishablilityService = async (perishable) => {
    try {
        return readProductosByPerishablilityRepository(perishable)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readProductosByMaxDaysToPerishService = async (days) => {
    try {
        return readProductosByMaxDaysBeforePerishRepository(days)
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber los productos')
    }
}

export const readCategoriasService = async () => {
    try {
        return readCategoriasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber las categorias')
    }
}

export const readSubcategoriasService = async () => {
    try {
        return readSubcategoriasRepository()
    } catch (error) {
        console.error('Error en el Servicio: ', error)
        throw new Error('Error al obteber las subcategorias')
    }
}