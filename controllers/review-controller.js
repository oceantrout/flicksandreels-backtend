const {Review} = require("../models");
const httpStatus = require("http-status");

const create = async (req, res) => {
    try{
        const result = await Review.create(req.body);
        res.json(result);   
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const findAll = async (req, res) => {
    try{        
        console.log(req.query);
        const result = await Review.find(req.query).exec();
        res.json(result);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
};

const updateOne = async(req, res) => {
    try{
        const id = req.params.id;

        const updated = await Review.updateOne({_id:id}, {$set: req.body});
        res.json(updated);

    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const deleteOne = async (req,res) => {
    try{
        const id = req.params.id;
        const deleted = await Review.deleteOne({_id:id});
        res.json(deleted);
    }catch(e){  
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}

const findOne = async (req, res) => {
    try{
        const id = req.params.id;
        const fetched = await Review.findOne({_id:id});
        res.json(fetched);
    }catch(e){
        console.error(e);
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    create, findAll, updateOne, deleteOne, findOne
}