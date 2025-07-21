require('dotenv').config();


const mongoose = require('mongoose');
const express= require('express');
const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const cors = require('cors');
const bodyParser = require('body-parser');
const { OrderModel } = require('./model/OrderModel');
const userRoutes  = require('./routes/user.routes.js');
const cookieParser = require('cookie-parser');
const { authUser } = require('./middle/authMiddle.js');
const userModel = require('./model/user.model.js');



const app = express();

const allowedOrigins = [process.env.FRONTEND_URL,process.env.FRONTEND_URL2];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
const dbUrl= process.env.MONGOO_URL
const PORT= process.env.PORT || 3000;

main().then(() => {
    console.log("Connected to MongoDB");
}
).catch(err => {
    console.error("MongoDB connection error:", err);
});

async function main() {
    await mongoose.connect(dbUrl);

}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);

app.use('/user', userRoutes);


app.get('/dashboard/holdings',authUser, async (req, res) => {
    try {
        const email = req.user.email;
        const user= await userModel.findOne({email});
        console.log(user._id);
        const holdings = await HoldingsModel.find({ authUser: user._id });
        console.log(req.user._id);
        if (!holdings) {
            return res.status(404).json({ error: 'No holdings found' });
        }
        res.status(200).json(holdings);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).json({ error: 'Failed to fetch holdings' });
    }
    
})

app.get('/dashboard/positions',authUser, async (req, res) => {
    try {
        const positions = await PositionsModel.find();
        res.status(200).json(positions);
    } catch (error) {
        console.error("Error fetching holdings:", error);
        res.status(500).json({ error: 'Failed to fetch holdings' });
    }
})


app.post('/dashboard/newOrder',async (req, res) => {
    const { name, qty, price,mode,authUser } = req.body;
    try {
        const newOrder = new OrderModel({
            name: name,
            qty: qty,
            price: price,
            mode: mode, // Assuming default mode is BUY, can be changed as needed
            authUser: authUser // Store the user ID from the authenticated request
        });
        await newOrder.save();
    } catch (error) {
        console.error("Error creating order:", error);
    }
    const newHolding = new HoldingsModel({
        name: name,
        qty: qty,
        avg: price,
        price: price,
        net: "+0.00%", // Default value, can be updated later
        day: "+0.00%", // Default value, can be updated later
        authUser: authUser // Store the user ID from the authenticated request
    });
    newHolding.save()
        .then(() => {
            res.status(201).json({ message: 'New holding added successfully' });
        })
        .catch(err => {
            console.error("Error adding new holding:", err);
            res.status(500).json({ error: 'Failed to add new holding' });
        });


});

app.get('/dashboard/orders',authUser, async (req, res) => {
    try {
        const email = req.user.email;
        const user= await userModel.findOne({email});
        const orders = await OrderModel.find({ authUser: user._id });
        res.status(200).json(orders);
    } catch (error) {
        console.error("Error fetching orders:", error);
        res.status(500).json({ error: 'Failed to fetch orders' });
    }
});
app.get("/dashboard/user", authUser, async(req, res) => {
    const email = req.user.email;
    const user = await userModel.findOne({ email })
    res.status(200).json(user);
    

});





// app.get('/addHoldings', (req, res) => {
    
//     const holdingsData = [
//         {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
//     ];
    
//     HoldingsModel.insertMany(holdingsData)
//         .then(() => res.status(200).send('Holdings added successfully'))
//         .catch(err => res.status(500).send('Error adding holdings:', err));
// });

// app.get('/addPositions', (req, res) => {
    
//     const positionsData = [
//         {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
//     ];
    
//     PositionsModel.insertMany(positionsData)
//         .then(() => res.status(200).send('Positions added successfully'))
//         .catch(err => res.status(500).send('Error adding positions:', err));
// });