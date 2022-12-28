const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Postagem = new Schema({
    titulo:{
        type:String,
        required:true
    },
    slug:{
        type: String,
        required:true
    },
    descricao:{
        type: String,
        required:true
    },
    //armazena o id da categoria
    categoria:{
        type: Schema.Types.ObjectId,
        ref:"categorias",
        required:true
    },
    documentacao:{
        id: String,
        name: String,
        size: Number,
        key: String,
        url: String,
        createdAt:{
            type: Date,
            default: Date.now,
        }, 
    },
    usuarios:{
        type: String,
        required:true
    },
    data: {
        type: Date, 
        default: Date.now()
    }
})

Postagem.index({ titulo: 'text'});

const postagens = mongoose.model("postagens", Postagem)

postagens.createIndexes();
