import Joi from 'joi';

module.exports = {
    create: () => {
        return Joi.object({
            productCode: Joi.string(),
            productName: Joi.string(),
            MRP: Joi.number(),
            retailPrice: Joi.number(),
            purchasePrice: Joi.number(),
            HSNCode: Joi.string(),
            GST_Percentage: Joi.number(),
            productCategory: Joi.string(),
            productSubcategory1: Joi.string(),
            productSubcategory2: Joi.string(),
            productSubcategory3: Joi.string(),
            quantity: Joi.number(),
            barcode: Joi.number(),
            maxAllowedQty: Joi.number(),
            packQty:Joi.any(),
            UOM: Joi.string(),//units of measure
            length: Joi.any(),
            breadth: Joi.any(),
            height: Joi.any(),
            weight: Joi.any(),
            isReturnable: Joi.boolean(),
            returnWindow: Joi.string(),
            isVegetarian: Joi.boolean(),
            manufacturerName: Joi.string(),
            manufacturedDate: Joi.string(),
            nutritionalInfo: Joi.string(),
            additiveInfo: Joi.string(),
            instructions: Joi.string(),
            isCancellable: Joi.boolean(),
            availableOnCod: Joi.boolean(),
            longDescription: Joi.string(),
            description: Joi.string(),
            images: Joi.array(),
            manufacturerOrPackerName:Joi.string(),
            manufacturerOrPackerAddress:Joi.string(),
            commonOrGenericNameOfCommodity:Joi.string(),
            monthYearOfManufacturePackingImport:Joi.string(),
            importerFSSAILicenseNo:Joi.string(),
            brandOwnerFSSAILicenseNo:Joi.string()
        });
    },
    update: () => {
        return Joi.object({
            productCode: Joi.string(),
            productName: Joi.string(),
            MRP: Joi.number(),
            retailPrice: Joi.number(),
            purchasePrice: Joi.number(),
            HSNCode: Joi.string(),
            GST_Percentage: Joi.number(),
            productCategory: Joi.string(),
            productSubcategory1: Joi.string(),
            productSubcategory2: Joi.string(),
            productSubcategory3: Joi.string(),
            quantity: Joi.number(),
            barcode: Joi.number(),
            maxAllowedQty: Joi.number(),
            packQty:Joi.any(),
            UOM: Joi.string(),//units of measure
            length: Joi.any(),
            breadth: Joi.any(),
            height: Joi.any(),
            weight: Joi.any(),
            isReturnable: Joi.boolean(),
            returnWindow: Joi.string(),
            isVegetarian: Joi.boolean(),
            manufacturerName: Joi.string(),
            manufacturedDate: Joi.string(),
            nutritionalInfo: Joi.string(),
            additiveInfo: Joi.string(),
            instructions: Joi.string(),
            isCancellable: Joi.boolean(),
            availableOnCod: Joi.boolean(),
            longDescription: Joi.string(),
            description: Joi.string(),
            images: Joi.array(),
            manufacturerOrPackerName:Joi.string(),
            manufacturerOrPackerAddress:Joi.string(),
            commonOrGenericNameOfCommodity:Joi.string(),
            monthYearOfManufacturePackingImport:Joi.string(),
            importerFSSAILicenseNo:Joi.string(),
            brandOwnerFSSAILicenseNo:Joi.string()
        });
    },
    publish: () => {
        return Joi.object({
            published: Joi.boolean().required(),
        });
    },
    get:()=>{
        return Joi.object({
            productId: Joi.string().guid({
                version: ['uuidv4']
            }),
        });
    },
    

    
    list:()=>{
        return Joi.object({
            name:Joi.string().empty(''),
            offset:Joi.number(),
            limit:Joi.number()
        });
    }
};
