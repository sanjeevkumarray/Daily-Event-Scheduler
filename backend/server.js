const express = require("express");
const cors = require("cors");
const schedulerRoutes = require("./routes/schedulerRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/scheduler", schedulerRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
