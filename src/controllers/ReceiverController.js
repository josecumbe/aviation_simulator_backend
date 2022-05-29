const Receiver = require('../models/Receiver.js')

module.exports = {
    async save(req, res) {
        const { latitude } = req.body;
        const { longitude } = req.body;
        const { coverage } = req.body;

        let receiver = await Receiver.findOne({ latitude, longitude, coverage });

        if (!receiver) {
            receiver = await Receiver.create({ latitude, longitude, coverage });
        }

        return res.json(receiver);   
    },

    async index(req, res) {
       const receivers = await Receiver.find({});
       return res.json(receivers);
    },

    async destroy(req, res) {
        const { receiver_id } = req.headers;
        try {
            const receiver = await Receiver.findById(receiver_id)
            await receiver.remove();
            return res.json({"message": "Removed"});
        } catch {
            res.status(404).json({ "ErrorMessage": "Receiver not found" });
        }
        
    
    }
}